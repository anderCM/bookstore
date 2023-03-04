/* import/no-extraneous-dependencies */
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import url from '../../Constans/Url';

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

export const deleteBooks = createAsyncThunk('bookstore/books/deleteBooks', async (id) => {
  const params = {
    method: 'DELETE',
  };
  const response = await fetch(`${url}/${id}`, params);
  const message = await response.text();
  return message;
});

// Reducer
const initialState = {
  books: [],
  isLoading: false,
  error: null,
  message: null,
  fetched: false,
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
      fetched: false,
    }))
    .addCase(postBooks.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      message: action.payload,
      fetched: true,
    }))
    .addCase(postBooks.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
      fetched: false,
    }))
    .addCase(deleteBooks.pending, (state) => ({
      ...state,
      isLoading: true,
      error: null,
      message: null,
      fetched: false,
    }))
    .addCase(deleteBooks.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      message: action.payload,
      fetched: true,
    }))
    .addCase(deleteBooks.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
      fetched: false,
    }));
});
