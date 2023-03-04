import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h2 className="text-primary">Bookstore CMS</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#book-store-navbar" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="book-store-navbar">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                BOOKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                CATEGORIES
              </Link>
            </li>
          </ul>
          <Link className="nav-link me-5" to="/account">
            <PersonIcon color="primary" />
          </Link>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
