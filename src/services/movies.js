import { URL_API, API_KEY } from "./constants";

export const getUrl = function(path) {
  return `${URL_API}/movie/${path}?api_key=${API_KEY}`;
};

export async function getMovies(typeMovies) {
  return (await fetch(getUrl(typeMovies))).json();
}

export async function getMoviesFiltered(textSearched) {
  return (await fetch(
    `${URL_API}/search/movie?query=${textSearched}&api_key=${API_KEY}`
  )).json();
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
