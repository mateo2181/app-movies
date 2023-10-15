import { URL_API, API_KEY } from "./constants";
import axios from "axios";
import { mapMovieData } from '../utils/index';

export const getUrl = function(path) {
  return `${URL_API}/movie/${path}?api_key=${API_KEY}`;
};

export async function getMovies(typeMovies) {
  // const res = await axios.get(getUrl(typeMovies));
  // const { results, total_results, page } = res.data;
  // return {
  //   items: results.map(mapMovieData),
  //   page: page,
  //   total: total_results
  // };
  return axios.get(getUrl(typeMovies))
    .then(res => {
      const { results, total_results, page } = res.data;
      return {
        items: results.map(mapMovieData),
        page: page,
        total: total_results
      };
    }).catch(e => {
      return e;
    })
}

export async function getMoviesFiltered(textSearched) {
  const res = await axios.get(`${URL_API}/search/movie?query=${textSearched}&api_key=${API_KEY}`)
  const { results, total_results, page } = res.data;
  return {
    items: results.map(mapMovieData),
    page: page,
    total: total_results
  };
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
