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
