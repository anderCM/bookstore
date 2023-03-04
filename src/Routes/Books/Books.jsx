import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Book from './Book';
import AddBook from './AddBook';
import { fetchBooks } from '../../redux/books/booksSlice';
import Loading from '../../Components/Alerts/Loading';
import SimpleAlert from '../../Components/Alerts/Alerts';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const error = useSelector((state) => state.books.error);
  const fetched = useSelector((state) => state.books.fetched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [fetched]);

  if (isLoading) return <Loading />;

  if (error) return SimpleAlert('error', 'Intern error', error);

  return (
    <>
      <div className="container my-3">
        { Object.keys(books).map((key) => (
          <Book key={key} idBook={key} book={books[key][0]} />
        ))}
        <AddBook />
      </div>
    </>
  );
};

export default Books;
