export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default (state = { books: [] }, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state.books, action.book];
    case REMOVE_BOOK:
      return state.books.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });

export const removeBook = (book) => ({ type: REMOVE_BOOK, book });

/* import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'storeBooks',
  initialState,
  reducers: {
    addBook: (state, action) => [...state.books, action.payload],
    removeBook: (state, action) => state.books.filter((book) => book.id !== action.payload),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer; */
