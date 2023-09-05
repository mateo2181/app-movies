function mapMovieData(movie) {
  return {
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster
  }
}

export {
  mapMovieData
}