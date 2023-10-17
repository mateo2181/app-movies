import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { getMovies } from "../../services/movies";
import { useQuery } from '@tanstack/react-query';
import Title from "../Title";


const MoviesLoading = () => (
    <div className="w-full mt-12 flex justify-center sweet-loading">
      <MoonLoader
        className=""
        color={"#242424"}
      />
    </div>
);

const Movies = () => {
  const [typeMovie, setTypeMovie] = useState("now_playing");

  let location = useLocation();

  const { data, isPending, error } = useQuery({ queryKey: ['movies', { typeMovie }], queryFn: () => getMovies(typeMovie) });

  useEffect(() => {
    let typeMovieAux = location.pathname.substring(1);
    typeMovieAux = !typeMovieAux ? "now_playing" : typeMovieAux;
    setTypeMovie(typeMovieAux);
  }, [location]);

  const getTitleMovie = typeMovie => {
    switch (typeMovie) {
      case "top_rated":
        return "Top Rated";
      case "popular":
        return "Popular";
      case "upcoming":
        return "Upcoming";
      default:
        return "All";
    }
  };

  if (isPending) {
    return <MoviesLoading />;
  }

  if (error) {
    return <div>{error}</div>;
  }
    
  return (
    <div className="w-full">
      <Title text={getTitleMovie(typeMovie) + " Movies"} />
      <div data-testid="movies-list" className="flex flex-wrap">
          {data.items.map((movie) => (
            <div className="w-1/2 md:w-1/4 lg:w-1/4 p-2" key={movie.id}> 
              <Movie>
                <Link to={"/movie/" + movie.id}>
                  <Movie.Poster title={movie.title} poster={movie.poster} />
                  <Movie.Description>
                    <div className="flex justify-between">
                      <div> {movie.title} </div>
                    </div>
                    <div className="text-gray-6 00">
                      <span className="text-sm"> Score: </span>
                      <strong>{movie.vote_average} </strong>
                    </div>
                    <div className="text-gray-700 text-xs"> {movie.release_date} </div>  
                  </Movie.Description> 
                </Link>
              </Movie>
            </div>
            )
          )}
      </div>
    </div>
  );
};

export default Movies;
