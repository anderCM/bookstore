import React, { useState } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CategoryIcon from '@mui/icons-material/Category';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { postBooks } from '../../redux/books/booksSlice';
import SimpleToast from '../../Components/Alerts/Toasts';

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
    <div className="container-fluid mt-5">
      <h4 className="text-muted fw-bold">ADD NEW BOOK</h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 my-2">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="title-book"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="title-book">
                Title
                {' '}
                <MenuBookIcon fontSize="small" />
              </label>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="author-book"
                placeholder="Author"
                onChange={(e) => setAuthor(e.target.value)}
              />
              <label htmlFor="author-book">
                Author
                {' '}
                <LocalLibraryIcon fontSize="small" />
              </label>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="form-floating">
              <select className="form-select" id="category-book" onChange={(e) => setCategory(e.target.value)}>
                <option>Horror</option>
                <option>Comedy</option>
                <option>Cartoon</option>
                <option>Action</option>
              </select>
              <label htmlFor="category-book">
                Category
                {' '}
                <CategoryIcon fontSize="small" />
              </label>
            </div>
          </div>
          <div className="col-md-2 my-2 d-inline-flex">
            <button type="submit" className="btn btn-lg btn-primary w-100 rounded-0">
              ADD BOOK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
