import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { useLocation } from "react-router";
import { ClipLoader } from "react-spinners";
import { getMovies } from "../../services/movies";
import { useQuery } from "react-query";
import Title from "../Title";

const Movies = () => {
  const [typeMovie, setTypeMovie] = useState("now_playing");

  let location = useLocation();

  const { data, isLoading, error } = useQuery(["movies", { typeMovie }], () =>
    getMovies(typeMovie)
  );

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

  if (isLoading)
    return (
      <div className="w-full mt-2 flex justify-center sweet-loading">
        <ClipLoader
          className=""
          size={100}
          color={"#242424"}
          loading={isLoading}
        />
      </div>
    );
  return (
    <div className="w-full">
      <Title text={getTitleMovie(typeMovie) + " Movies"} />

      <div className="flex flex-wrap">
        {data ? data.items.map((m, i) => <Movie movie={m} key={i} />) : ""}
      </div>
    </div>
  );
};

export default Movies;
