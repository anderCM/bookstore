import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Book from './Book';
import AddBook from './AddBook';
import { fetchBooks } from '../../redux/books/booksSlice';
import Loading from '../../Components/Alerts/Loading';
import SimpleAlert from '../../Components/Alerts/Alerts';

const Books = () => {
  const [bookKeys, setBookKeys] = useState([]);
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const error = useSelector((state) => state.books.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    if (books) {
      setBookKeys(Object.keys(books));
    }
  }, [books]);

  if (isLoading) return <Loading />;

  if (error) return SimpleAlert('error', 'Error interno', error);

  return (
    <>
      <div className="container border rounded my-3 p-3">
        {bookKeys.length > 0 ? (
          bookKeys.map((key) => (
            <Book key={key} idBook={key} book={books[key][0]} />
          ))
        ) : ''}
        <AddBook />
      </div>
    </>
  );
};

export default Books;
