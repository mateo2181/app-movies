import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Enzyme, { mount, shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import reducerMovie from "../src/reducers/movies";
import { initialState } from "../src/reducers/movies";
import thunk from "redux-thunk";
import MoviesContainer from "../src/containers/MovieListContainer";
import App from "../src/App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Movie from "../src/components/List/Movie";
import expect from "expect";
import store from "../src/store";
import { GET_MOVIES } from "../src/actions/types";

//import Adapter from "enzyme-adapter-react-16";
// Enzyme.configure({ adapter: new Adapter() });

function renderWithRedux(ui, { initialState, store } = {}) {
  const history = createMemoryHistory();
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("Check store state after get movies", () => {
  store.dispatch({
    type: GET_MOVIES,
    data: [
      {
        release_date: "2019-10-04",
        title: "Joker",
        id: 123
      }
    ]
  });
  const actual = store.getState();
  const expected = {
    movies: {
      loading: false,
      movies: [
        {
          release_date: "2019-10-04",
          title: "Joker",
          id: 123
        }
      ]
    }
  };
  expect(actual).toEqual(expected);
});
