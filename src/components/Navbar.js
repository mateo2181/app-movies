import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search/Search";

const Navbar = () => {
  return (
    <nav className="w-full text-center py-4 px-6">
      <div className="flex justify-center items-center text-black">
        <img
          className="w-16 mr-4"
          src="http://cdn.onlinewebfonts.com/svg/img_129492.png"
          alt="Logo"
        />
        <div className="font-semibold text-3xl tracking-tight"> MOVIES</div>
      </div>
      <div className="text-center mx-auto max-w-2xl w-full">
        <Search />
      </div>
      <div className="mt-6 w-full block flex items-center justify-center">
        <NavLink
          to="/popular"
          activeClassName="px-4 py-2 rounded-full font-semibold bg-blue-300"
          className="text-gray-900 mx-4"
        >
          {" "}
          Popular
        </NavLink>
        <NavLink
          to="/upcoming"
          activeClassName="px-4 py-2 rounded-full font-semibold bg-blue-300"
          className="text-gray-900 mx-4"
        >
          {" "}
          Upcoming{" "}
        </NavLink>
        <NavLink
          to="/top_rated"
          activeClassName="px-4 py-2 rounded-full font-semibold bg-blue-300"
          className="text-gray-900 mx-4"
        >
          {" "}
          Top rated
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
