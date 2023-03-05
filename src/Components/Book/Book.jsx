/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Proptypes from 'prop-types';

import Chapter from './Chapter';
import Progress from './Progress';
import ActionsBook from './ActionsBook';
import './Book.css';

const Book = ({ idBook, book, index }) => {
  const {
    title, author, category,
  } = book;
  return (
    <>
      <div className="card mb-3 rounded-0 border">
        <div className="card-body p-4">
          <div className="row">
            <div className="col-12 col-md-6">
              <h6 className="card-title text-muted fw-bold opacity-75">{category}</h6>
              <h5 className="card-text fw-bold mb-0">{title}</h5>
              <p className="card-author text-muted">{author}</p>
              <ActionsBook id={idBook} />
            </div>
            <div className="col-4 col-md-2 mt-3">
              <Progress index={index} />
            </div>
            <div className="divider bg-body-secondary m-auto p-0" />
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
  index: Proptypes.oneOfType([Proptypes.number]).isRequired,
  book: Proptypes.shape({
    title: Proptypes.oneOfType([Proptypes.string]).isRequired,
    author: Proptypes.oneOfType([Proptypes.string]).isRequired,
    category: Proptypes.oneOfType([Proptypes.string]).isRequired,
  }).isRequired,
};

export default Book;
