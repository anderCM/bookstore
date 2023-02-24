import React from 'react';

import ActionsBook from './ActionsBook';
import AddBook from './AddBook';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      genre: 'Action',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      genre: 'Science Fiction',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      genre: 'Economy',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <>
      <div className="container border rounded my-3 p-5">
        {books.map((book) => (
          <div className="card mb-3" key={book.id}>
            <div className="card-body">
              <h6 className="card-title">{book.genre}</h6>
              <h4 className="card-text">{book.title}</h4>
              <p className="text-muted">{book.author}</p>
              <ActionsBook />
            </div>
          </div>
        ))}
        <AddBook />
      </div>
    </>
  );
};

export default Books;
