/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Proptypes from 'prop-types';

import ActionsBook from './ActionsBook';

const Book = ({ book }) => {
  const {
    id, title, author, genre,
  } = book;
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="card-title">{genre}</h6>
          <h4 className="card-text">{title}</h4>
          <p className="text-muted">{author}</p>
          <ActionsBook id={id} />
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: Proptypes.shape({
    id: Proptypes.oneOfType([Proptypes.string]).isRequired,
    title: Proptypes.oneOfType([Proptypes.string]).isRequired,
    author: Proptypes.oneOfType([Proptypes.string]).isRequired,
    genre: Proptypes.oneOfType([Proptypes.string]).isRequired,
  }).isRequired,
};

export default Book;
