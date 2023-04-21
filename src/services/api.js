import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'db5c04dbd9637821020050cea594d5e0';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  console.log(data);

  return data;
};

export const fetchMovieByName = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};
