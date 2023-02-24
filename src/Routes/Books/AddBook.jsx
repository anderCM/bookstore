import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const AddBook = () => (
  <div className="container-fluid mt-5">
    <h4 className="text-muted">ADD NEW BOOK</h4>
    <form>
      <div className="row">
        <div className="col-md-8">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="title-book"
              placeholder="Title"
            />
            <label htmlFor="title-book">
              Title
              {' '}
              <MenuBookIcon fontSize="small" />
            </label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="author-book"
              placeholder="Author"
            />
            <label htmlFor="author-book">
              Author
              {' '}
              <LocalLibraryIcon fontSize="small" />
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default AddBook;
