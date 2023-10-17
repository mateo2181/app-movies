import React from "react";
import {setupServer} from 'msw/node';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Movies from "../components/List/Movies";
import { moviesHandlers } from "../_mocks_/handlers";


// Mock
const server = setupServer(...moviesHandlers);


const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      {children}
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

describe('Movies page with visible content', () => { 
  it('displays movies list', async () => {
    // Render a React element into the DOM
    const { getByText, getByTestId } = renderWithRouter(<Movies />)

    await waitFor(() => getByTestId('movies-list'));
    // screen.debug();

    expect(getByTestId('movies-list')).toBeInTheDocument();
    expect(getByText("The fight club")).toBeInTheDocument();
  });
})