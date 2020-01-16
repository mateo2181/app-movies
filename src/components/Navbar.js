import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";

const Navbar = () => {
  return (
    <nav className="fixed w-full flex shadow-md items-center justify-between flex-wrap bg-yellow-400 py-4 px-6">
      <div className="flex items-end self-end text-black mr-6">
        <img
          className="w-8 mr-4"
          src="http://cdn.onlinewebfonts.com/svg/img_129492.png"
          alt="Logo"
        />
        <div className="font-semibold text-xl tracking-tight"> MOVIES</div>
      </div>
      <div className="mt-2 sm:mt-0 w-full self-end block flex sm:items-center sm:w-auto">
        <div className="flex flex-wrap items-center lg:flex-grow">
          <Link
            to="/popular"
            className="block sm:inline-block lg:mt-0 text-gray-900 mr-4"
          >
            {" "}
            Popular{" "}
          </Link>
          <Link
            to="/upcoming"
            className="block sm:inline-block lg:mt-0 text-gray-900 mr-4"
          >
            {" "}
            Upcoming{" "}
          </Link>
          <Link
            to="/top_rated"
            className="block sm:inline-block lg:mt-0 text-gray-900 mr-4"
          >
            {" "}
            Top rated{" "}
          </Link>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
