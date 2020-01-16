import React from "react";
import { URL_API_IMG } from "../../services/constants";
import { Link } from "react-router-dom";
const Movie = ({ movie }) => (
  <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
    <Link to={"/movie/" + movie.id}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
        <img
          className="h-64 w-full object-cover"
          alt={movie.title}
          src={URL_API_IMG + movie.poster_path}
        />
        <div className="p-2">
          <div className="flex justify-between">
            <div> {movie.title} </div>
            <div>
              <span className="text-sm"> User Score: </span>
              <strong>{movie.vote_average} </strong>
            </div>
          </div>
          <div className="text-gray-700 text-xs"> {movie.release_date} </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Movie;
