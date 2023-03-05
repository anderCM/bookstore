import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { postBooks } from '../../redux/books/booksSlice';
import SimpleToast from '../Alerts/Toasts';
import './AddBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const message = useSelector((state) => state.books.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      SimpleToast.fire({
        icon: 'warning',
        title: 'Please enter a Title and Author first',
      });
      return;
    }
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(postBooks(book));
    setTitle('');
    setAuthor('');
    setCategory('');

    if (message) {
      SimpleToast.fire({
        icon: 'success',
        title: message,
      });
    }
  };

  return (
    <div className="container-fluid mt-5 border-top border-2 px-0 pt-5">
      <h4 className="text-muted fw-bold">ADD NEW BOOK</h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 my-2">
            <input type="text" className="form-control py-2" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="col-md-3 my-2">
            <input type="text" className="form-control py-2" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className="col-md-3 my-2">
            <select className="form-select py-2" id="category-book" onChange={(e) => setCategory(e.target.value)}>
              <option>Horror</option>
              <option>Comedy</option>
              <option>Cartoon</option>
              <option>Action</option>
            </select>
          </div>
          <div className="col-md-2 my-2 d-inline-flex">
            <button type="submit" className="add-book btn btn-lg w-100 rounded-0 text-white fw-bold">
              ADD BOOK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
