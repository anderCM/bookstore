import { createSlice } from '@reduxjs/toolkit';

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
export default booksSlice.reducer;
