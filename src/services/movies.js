import { URL_API, API_KEY } from "./constants";

export const getUrl = function(path) {
  return `${URL_API}/${path}?api_key=${API_KEY}`;
};

export async function getMovies(typeMovies) {
  return (await fetch(getUrl(typeMovies))).json();
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
