/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Proptypes from 'prop-types';

import ActionsBook from './ActionsBook';

const Book = ({ title, author, genre }) => (
  <>
    <div className="card mb-3">
      <div className="card-body">
        <h6 className="card-title">{genre}</h6>
        <h4 className="card-text">{title}</h4>
        <p className="text-muted">{author}</p>
        <ActionsBook />
      </div>
    </div>
  </>
);

Book.propTypes = {
  title: Proptypes.oneOfType([Proptypes.string]).isRequired,
  author: Proptypes.oneOfType([Proptypes.string]).isRequired,
  genre: Proptypes.oneOfType([Proptypes.string]).isRequired,
};

export default Book;
