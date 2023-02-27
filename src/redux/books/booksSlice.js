import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const booksSlice = createSlice({
  name: 'storeBooks',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { id, title, author } = action.payload;
      state.push({ id, title, author });
    },
    removeBook: (state, action) => {
      const bookToRemove = action.payload;
      return state.filter((book) => book.id !== bookToRemove);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
