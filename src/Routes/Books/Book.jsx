/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Proptypes from 'prop-types';

import ActionsBook from './ActionsBook';

const Book = ({ idBook, book }) => {
  const {
    title, author, category,
  } = book;
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="card-title">{category}</h6>
          <h4 className="card-text">{title}</h4>
          <p className="text-muted">{author}</p>
          <ActionsBook id={idBook} />
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  idBook: Proptypes.oneOfType([Proptypes.string]).isRequired,
  book: Proptypes.shape({
    title: Proptypes.oneOfType([Proptypes.string]).isRequired,
    author: Proptypes.oneOfType([Proptypes.string]).isRequired,
    category: Proptypes.oneOfType([Proptypes.string]).isRequired,
  }).isRequired,
};

export default Book;
