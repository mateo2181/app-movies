import { URL_API, API_KEY } from "./constants";
import axios from "axios";
import { mapMovieData } from '../utils/index';

export const getUrl = function(path) {
  return `${URL_API}/?apikey=${API_KEY}&s=${path}`;
};

export async function getMovies(typeMovies) {
  const res = await axios.get(getUrl(typeMovies));
  console.log(res);
  const { Search, totalResults } = res.data;
  return {
    items: Search.map(mapMovieData),
    total: totalResults
  };
}

export async function getMoviesFiltered(textSearched) {
  const res = await axios.get(`${URL_API}/search/movie?query=${textSearched}&apikey=${API_KEY}`)
  console.log(res);
  return res.data;
}

export const getMovie = function(id) {
  return fetch(getUrl(id))
    .then(data => {
      return data.json();
    })
    .catch(error => {
      return error;
    });
};
