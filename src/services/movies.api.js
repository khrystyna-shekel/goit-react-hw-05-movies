import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '7da5fd28555694da9dd5eed6b6d34230';

export const fetchMovies = async (endpoint, query = '') => {
  const params = new URLSearchParams({
    api_key: KEY,
    // accept: 'aplication/json',
    query,
  });
  const { data } = await axios.get(`${endpoint}?${params}`);
  return data;
};
