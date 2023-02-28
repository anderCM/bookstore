import React from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="container border rounded my-3 p-3">
        {books.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <AddBook />
      </div>
    </>
  );
};

export default Books;
