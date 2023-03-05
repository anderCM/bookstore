import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h2 className="navbar-brand-name fw-bold">Bookstore CMS</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#book-store-navbar" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="book-store-navbar">
          <ul className="navbar-nav gap-4 me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link text-dark active" to="/">
                BOOKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted opacity-50" to="/categories">
                CATEGORIES
              </Link>
            </li>
          </ul>
          <Link className="nav-link me-5 border rounded-circle p-2" to="/account">
            <PersonIcon color="primary" />
          </Link>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
