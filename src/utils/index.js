function mapMovieData(movie) {
  return {
    id: movie.id,
    title: movie.original_title,
    poster: movie.poster_path,
    overview: movie.overview,
    vote_average: movie.vote_average, 
    release_date: movie.release_date,
    vote_count: movie.vote_count
  }
}

export {
  mapMovieData
}