import React from "react";
import {setupServer} from 'msw/node';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Movie from "../components/Movie/Index";
import { moviesHandlers } from "../_mocks_/handlers";


// Mock
const server = setupServer(...moviesHandlers);


const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route key="1" path="/movie/:id" element={<Movie />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
);

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, {wrapper: wrapper}),
  }
}


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Movie Detail page with visible content', () => { 
  it('displays movie detail page and movie title', async () => {
    // Render a React element into the DOM
    const { getByText, getByTestId } = renderWithRouter(<Movie />, { route: '/movie/1' })

    await waitFor(() => getByTestId('movie-detail'));
    // screen.debug();

    expect(getByTestId('movie-detail')).toBeInTheDocument();
    expect(getByText("The fight club")).toBeInTheDocument();
  });
})