import React from "react";
import { URL_API_IMG } from "../../services/constants";
import { Link } from "react-router-dom";

const Movie = ({ children }) => (
  <Movie.Wrap>
    {children}
  </Movie.Wrap>
);

Movie.Wrap = function Wrap({ children }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
      {children}
    </div>
  )
};

Movie.Poster = function Poster({ title, poster }) {
  return (
      <img
        className="h-48 w-full object-cover"
        alt={title}
        src={URL_API_IMG + poster}
      />
  )
};

Movie.Description = function Description({ children }) {
  return (
    <div className="p-2">
      {children}
    </div>
  );
};

export default Movie;
