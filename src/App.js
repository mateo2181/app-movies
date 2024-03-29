import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "./styles.css";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie/Index";
import Movies from "./components/List/Movies";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route key="2" index path="/" element={<Movies />} />
          <Route key="3" path="/popular" element={<Movies />} />
          <Route key="3" path="/upcoming" element={<Movies />} />
          <Route key="4" path="/top_rated" element={<Movies />} />
          <Route key="1" path="/movie/:id" element={<Movie />} />

            {/* Using path="*"" means "match anything", so this route acts like a catch-all for URLs that we don't have explicit routes for. */}
            <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

function Layout() {
  return (
      <div className="min-h-screen w-full lg:w-1/2 mx-auto px-2">
        <Navbar />
        <div>
          <Outlet />
        </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
