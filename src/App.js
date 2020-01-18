import React from "react";
import Movie from "./components/Movie/Index";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Movies from "./components/List/Movies";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-200">
        <div className="min-h-screen max-w-4xl mx-auto px-2">
          <Navbar />
          <Switch>
            <Route key={1} path="/movie/:id">
              <Movie />
            </Route>
            <Route key="2" path="/" component={Movies} />
            <Route key="3" path="/upcoming" render={() => <Movies />} />
            <Route key="4" path="/top_rated" component={Movies} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
