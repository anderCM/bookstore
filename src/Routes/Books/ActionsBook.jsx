import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../../redux/books/booksSlice';

const ActionsBook = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="d-flex gap-4 justify-content-start">
      <button type="button" className="btn btn-outline-primary border-0">Comments</button>
      <span className="border-end" />
      <button type="button" className="btn btn-outline-primary border-0" onClick={handleRemoveBook}>Remove</button>
      <span className="border-end" />
      <button type="button" className="btn btn-outline-primary border-0">Edit</button>
    </div>
  );
};

ActionsBook.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ActionsBook;
