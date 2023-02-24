import React from 'react';

import Book from './Book';
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
          <Book key={book.id} title={book.title} genre={book.genre} author={book.author} />
        ))}
        <AddBook />
      </div>
    </>
  );
};

export default Books;
