import React, { useState, useEffect } from "react";
import MoviesSearched from "./Movies";

const Search = () => {
  const [searched, setSearched] = useState("");
  return (
    <div className="w-full mt-6 relative">
      <div className="w-full p-2 bg-white rounded-full relative">
        <input
          className="focus:outline-none w-full text-lg px-4 rounded-full"
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          maxLength="512"
          aria-label="Search"
          value={searched}
          onChange={e => setSearched(e.target.value)}
          placeholder="Search movies"
        />
        <button
          type="button"
          title="Search"
          className="absolute right-0 top-0 mt-3 mr-4"
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 40 40"
          >
            <path
              d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
              fillRule="evenodd"
            />
          </svg>
        </button>
        {searched !== "" ? (
          <button
            type="button"
            title="Clear"
            className="absolute right-0 top-0 mt-3 mr-10"
            onClick={() => setSearched("")}
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 20"
            >
              <path
                d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
      </div>

      {/* List Movies */}
      {searched !== "" ? <MoviesSearched textSearched={searched} /> : ""}
    </div>
  );
};

export default Search;
