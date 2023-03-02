/* import/no-extraneous-dependencies */
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import url from '../../Constans/Url';

// Action types
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Action creator
export const fetchBooks = createAsyncThunk('bookstore/books/fetchBooks', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const postBooks = createAsyncThunk('bookstore/books/postBooks', async (book) => {
  const params = {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(url, params);
  const message = await response.text();
  return message;
});

// Reducer
const initialState = {
  books: [],
  isLoading: false,
  error: null,
  message: null,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(fetchBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(fetchBooks.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      books: action.payload,
    }))
    .addCase(fetchBooks.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }))
    .addCase(postBooks.pending, (state) => ({
      ...state,
      isLoading: true,
      error: null,
      message: null,
    }))
    .addCase(postBooks.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      message: action.payload,
    }))
    .addCase(postBooks.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }))
    .addCase(REMOVE_BOOK, (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.id),
    }));
});

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
