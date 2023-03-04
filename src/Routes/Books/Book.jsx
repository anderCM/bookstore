/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Proptypes from 'prop-types';

import Chapter from '../../Components/Book/Chapter';
import Progress from '../../Components/Book/Progress';
import ActionsBook from './ActionsBook';

const Book = ({ idBook, book }) => {
  const {
    title, author, category,
  } = book;
  return (
    <>
      <div className="card mb-3 rounded-0">
        <div className="card-body p-4">
          <div className="row">
            <div className="col-12 col-md-6">
              <h6 className="card-title fw-bold">{category}</h6>
              <h4 className="card-text fw-bold">{title}</h4>
              <p className="text-muted fw-bold">{author}</p>
              <ActionsBook id={idBook} />
            </div>
            <div className="col-4 col-md-3 mt-3">
              <Progress />
            </div>
            <div className="col-8 col-md-3 mt-3">
              <Chapter />
            </div>
          </div>
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
