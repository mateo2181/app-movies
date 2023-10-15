import React, { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { getMoviesFiltered } from "../../services/movies";
import { useQuery } from '@tanstack/react-query';
import { URL_API_IMG } from "../../services/constants";
import { Link } from "react-router-dom";

const MoviesSearched = ({ textSearched }) => {
  const [resultsVisible, setResultsVisible] = useState(false);
  const { data, isPending, error } = useQuery({ queryKey: ['movies', { textSearched }], queryFn: () => getMoviesFiltered(textSearched) });

  useEffect(() => {
    //setTypeMovie(typeMovieAux);
    setResultsVisible(textSearched !== "");
  }, [textSearched]);

  if (error) return <div>{error}</div>;
  return (
    <div>
      {resultsVisible ? (
        <div
          style={{ maxHeight: "70vh" }}
          className="absolute overflow-y-scroll shadow left-0 right-0 bottom-auto bg-gray-100 mt-2 rounded-lg p-2 w-auto"
        >
          {isPending ? (
            <div className="w-full mt-2 flex justify-center sweet-loading">
              <MoonLoader color={"#242424"} />
            </div>
          ) : (
              data.total > 0
                ? 
                ( data.items.map((m, i) => (
                    <div key={m.id} className="w-full flex border-b py-1">
                      <div className="pr-4">
                        <img
                          style={{ minWidth: "4rem" }}
                          className="h-24 w-16 rounded object-cover"
                          alt={m.title}
                          src={URL_API_IMG + m.poster}
                        />
                      </div>
                      <div className="text-left">
                        <Link
                          onClick={() => setResultsVisible(false)}
                          className="text-base"
                          to={"/movie/" + m.id}
                        >
                          {m.title}
                        </Link>
                        <div className="text-sm text-gray-600">
                          {m.release_date}
                        </div>
                      </div>
                    </div>
                  ))
                )
                :
                (
                  <div className="w-full h-60">
                      No results.
                  </div>
                )
            )
            }
        </div>
      ) : ( "" )
      }
    </div>
  );
};

export default MoviesSearched;
