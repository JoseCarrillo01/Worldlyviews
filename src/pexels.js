import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const API_KEY = 'kGEJ1l8cw6BCrY6QE61jZW2r7GDe6QqiUYpC6nmWsSBD61kphI4KQYX5';
const API_URL = `https://api.pexels.com/v1`;

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [perPage, setPerPage] = useState(20);
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [orientation, setOrientation] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function getInitials(name) {
    const words = name.split(" ");
    const initials = words.reduce((result, word) => result + word[0], "");
    return initials.toUpperCase();
  }
  

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch("https://api.pexels.com/v1/search?query=nature&per_page=20&page=1",
        {
          headers: {
            Authorization: "YOUR_PEXELS_API_KEY",
          },
        }
      );
      const data = await res.json();
      setPhotos(data.photos);
    };
    fetchPhotos();
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setSelectedPhoto(null);
    }
  };
  
  
  const handleDownload = async () => {
    if (!selectedPhoto) {
      return;
    }
  
    try {
      const response = await fetch(selectedPhoto.src.original);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${selectedPhoto.photographer}.jpg`;
      link.href = url;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  


  useEffect(() => {
    // Obtenemos 20 imágenes aleatorias de la API de Pexels
    const fetchRandomPhotos = async () => {
      try {
        const response = await axios.get(`${API_URL}/curated?per_page=20`, {
          headers: {
            Authorization: API_KEY,
          },
        });

        setRandomPhotos(response.data.photos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomPhotos();
  }, []);

  useEffect(() => {
    // Realizamos la búsqueda en la API de Pexels
    const fetchPhotos = async () => {
      try {
        let url = `${API_URL}/search?query=${query}&per_page=${perPage}&page=${page}`;
        if (orientation) {
          url += `&orientation=${orientation}`;
        }
        const response = await axios.get(url, {
          headers: {
            Authorization: API_KEY,
          },
        });

        setPhotos(response.data.photos);
        setTotalResults(response.data.total_results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, [page, query, perPage, orientation]);

  const handleSearch = (event) => {
    event.preventDefault();
    setPage(1);
    setQuery(event.target.query.value);
  };

  const handlePageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  const handleOrientationChange = (event) => {
    setOrientation(event.target.value);
    setPage(1);
  };

  return (
    <div className="gallery">
      <form onSubmit={handleSearch}>
      
        <input type="text" name="query" placeholder="Search..." />
      
        <button type="submit">Search</button>
        <div className="filters">
          <select value={orientation} onChange={handleOrientationChange}>
            <option value="">Todas las Orientaciones</option>
            <option value="landscape">Horizontal</option>
            <option value="portrait">Vertical</option>
          </select>
        </div>
      </form>
      





      <div className="photos">
      <div className="photos1">
    {photos.slice(0, photos.length / 3).map((photo) => (
      <img
        key={photo.id}
        src={photo.src.medium}
        alt={photo.photographer}
        onClick={() => handlePhotoClick(photo)}
      />
    ))}
  </div>
  <div className="photos2">
    {photos.slice(photos.length / 3, (photos.length / 3) * 2).map((photo) => (
      <img
        key={photo.id}
        src={photo.src.medium}
        alt={photo.photographer}
        onClick={() => handlePhotoClick(photo)}
      />
    ))}
  </div>
  <div className="photos3">
    {photos.slice((photos.length / 3) * 2, photos.length).map((photo) => (
      <img
        key={photo.id}
        src={photo.src.medium}
        alt={photo.photographer}
        onClick={() => handlePhotoClick(photo)}
      />
    ))}
  </div>

       
        {selectedPhoto && (
          <div className="modal" onClick={handleCloseModal}>
            <div className='containermodal'>
              <div className="modal-buttons">
              <img src={selectedPhoto.src.large} alt={selectedPhoto.photographer} />

              <div className="author-info">
    <div className="author-initials">{getInitials(selectedPhoto.photographer)}</div>
    <p>Photo by {selectedPhoto.photographer}</p>
  </div>        
  
        </div>
              <div className="modal-buttons-grid">
                <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a onClick={handleDownload}
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover">Download</a>
                </div>
                
                <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a onClick={() => setSelectedPhoto(null)}
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover h1R">Close</a>
                </div>
                </div>
              
            </div>
          </div>
        )}
      </div>




      {photos.length > 0 && (
        <ReactPaginate
          pageCount={Math.ceil(totalResults / perPage)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          previousLabel="Previous"
          nextLabel="Next"
          disabledClassName="disabled"

        />


      )}


    </div>
  );
};

export default Gallery;
