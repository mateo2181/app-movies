import React, { useEffect, useState } from "react";
import { getMovie } from "../../services/movies";
import { useParams } from "react-router";
import { URL_API_IMG } from "../../services/constants";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { ClipLoader } from "react-spinners";

const Movie = ({ match }) => {
  const [movie, setMovie] = useState(null);

  let { id } = useParams();
  useEffect(() => {
    getMovie(id)
      .then(res => {
        const movie = res;
        setMovie(movie);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getGenres = genres => {
    return genres.map((g, j) => (
      <div
        key={j}
        className="bg-gray-300 px-2 py-1 text-sm text-gray-900 rounded-full mx-2"
      >
        {g.name}
      </div>
    ));
  };

  let data = !movie ? (
    <div className="w-full mt-2 flex justify-center sweet-loading">
      <ClipLoader sizeUnit={"px"} size={100} color={"#242424"} />
    </div>
  ) : (
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
            <NumberFormat
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
  );

  return <div className="pt-6 pb-4 max-w-2xl mx-auto">{data}</div>;
};

export default Movie;
