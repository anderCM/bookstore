import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { statusCategory } from '../../redux/categories/categoriesSlice';

import SimpleToast from '../../Components/Alerts/Toasts';

const Categories = () => {
  const categoriesStatus = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(statusCategory());
    if (categoriesStatus.status === 'Under Construction') {
      SimpleToast.fire({
        title: categoriesStatus.status,
        icon: 'error',
      });
    }
  };

  return (
    <>
      <div className="container-fluid my-5">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleCheckStatus}
        >
          Check status
        </button>
      </div>
    </>
  );
};

export default Categories;
