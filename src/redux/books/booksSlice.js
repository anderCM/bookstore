/* import/no-extraneous-dependencies */
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import url from '../../Constans/Url';

// Action types
export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Action creator
export const fetchBooks = createAsyncThunk('bookstore/books/fetchBooks', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

// Reducer
const initialState = {
  books: [],
  isLoading: false,
  error: null,
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
    .addCase(ADD_BOOK, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(REMOVE_BOOK, (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.id),
    }));
});

export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
