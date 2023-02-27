export const STATUS_CATEGORY = 'bookstore/categories/STATUS_CATEGORY';

export default (state = { categories: [] }, action) => {
  switch (action.type) {
    case STATUS_CATEGORY:
      return 'Under Construction';
    default:
      return state;
  }
};

export const statusCategory = () => ({ type: STATUS_CATEGORY });
/* import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({ ...state, status: 'Under Construction' })
    ,
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer; */
