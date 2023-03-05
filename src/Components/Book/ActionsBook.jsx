import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import SimpleAlert from '../Alerts/Alerts';
import SimpleToast from '../Alerts/Toasts';
import { deleteBooks } from '../../redux/books/booksSlice';
import './ActionsBook.css';

const ActionsBook = ({ id }) => {
  const {
    error, message,
  } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBooks(id));
  };

  if (error) {
    SimpleAlert('error', 'Internal Error', error);
    return {};
  }
  if (message) {
    SimpleToast.fire({
      icon: 'success',
      title: message,
    });
  }
  return (
    <div className="d-flex gap-3 justify-content-start">
      <button type="button" className="btn border-0 p-0 opacity-75">Comments</button>
      <span className="border-end" />
      <button type="button" className="btn border-0 p-0 opacity-75" onClick={handleRemoveBook}>Remove</button>
      <span className="border-end" />
      <button type="button" className="btn border-0 p-0 opacity-75">Edit</button>
    </div>
  );
};

ActionsBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ActionsBook;
