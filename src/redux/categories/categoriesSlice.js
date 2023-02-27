import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Under construction',
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => state.status,
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
