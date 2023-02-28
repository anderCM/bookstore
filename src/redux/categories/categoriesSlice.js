export const STATUS_CATEGORY = 'bookstore/categories/STATUS_CATEGORY';
export const HIDE_ALERT_CATEGORY = 'bookstore/categories/HIDE_ALERT_CATEGORY';

export default (state = { categories: [] }, action) => {
  switch (action.type) {
    case STATUS_CATEGORY:
      return { ...state, status: 'Under Construction', showAlert: true };
    default:
      return state;
  }
};

export const statusCategory = () => ({ type: STATUS_CATEGORY });
