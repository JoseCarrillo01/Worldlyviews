import axios from 'axios';

const API_KEY = 'kGEJ1l8cw6BCrY6QE61jZW2r7GDe6QqiUYpC6nmWsSBD61kphI4KQYX5';
const API_URL = `https://api.pexels.com/v1`;

export const getPexelsPhotos = async (query) => {
  const response = await axios.get(`${API_URL}/search`, {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      query,
      per_page: 10, // el número de resultados por página que deseas recibir
    },
  });
  return response.data.photos;
};
