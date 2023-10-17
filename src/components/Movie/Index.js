import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { NumericFormat } from 'react-number-format';
import { MoonLoader } from "react-spinners";
import { useQuery } from '@tanstack/react-query';
import { getMovie } from "../../services/movies";
import { URL_API_IMG } from "../../services/constants";

const Movie = ({ match }) => {
  // const [movie, setMovie] = useState(null);

  let { id } = useParams();

  const { data: movie, isPending, error } = useQuery({ queryKey: ['movies', id], queryFn: () => getMovie(id) })

  const getGenres = genres => {
    return genres.map((g, j) => (
      <div key={j} className="bg-gray-300 px-2 py-1 text-sm text-gray-900 rounded-full mx-2">
        {g.name}
      </div>
    ));
  };

  if(error) {
    return <div> {error} </div>;
  }

  if(isPending) {
    return (
      <div className="w-full mt-12 flex justify-center sweet-loading">
        <MoonLoader color={"#242424"} />
      </div>
    )
  }
  
  return (
      <div data-testid="movie-detail" className="pt-6 pb-4 max-w-2xl mx-auto">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="text-3xl"> Movie Detail </div>
            <Link to="/popular"> Back to movies </Link>
          </div>
          <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-full">
            <img
              className="w-1/3 object-cover"
              alt={movie.title}
              src={URL_API_IMG + movie.poster_path}
            />
            <div className="flex flex-col justify-between w-auto px-4 py-2">
              <div className="w-full">
                <h2 className="text-xl"> {movie.title} </h2>
                <div>
                  <span className="text-sm"> User Score: </span>
                  <strong className="text-lg">{movie.vote_average} </strong>
                </div>
              </div>
              <div>
                <div className="text-gray-800">{movie.overview}</div>
                <div className="text-gray-700 text-sm mb-2">
                  {movie.release_date}{" "}
                </div>
              </div>
              <div className="mb-2 text-base">
                Revenue:
                <NumericFormat
                  value={movie.revenue}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={value => <strong>{value}</strong>}
                />
              </div>

              <div className="flex flex-wrap">{getGenres(movie.genres)}</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Movie;
