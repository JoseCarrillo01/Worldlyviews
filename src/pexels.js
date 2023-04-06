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
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.src.medium}
            alt={photo.photographer}
          />
        ))}
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
