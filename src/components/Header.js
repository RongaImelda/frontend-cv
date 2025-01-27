import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  function navLink(name, link) {
    return (
      <li class='nav-item'>
        <Link class='nav-link' to={`${link}`}>
          {name}
        </Link>
      </li>
    );
  }

  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-white py-3'>
      <div class='container px-5'>
        <a class='navbar-brand' href='index.html'>
          <span class='fw-bolder text-primary'>Imelda Ronga</span>
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder'>
            {navLink('Home', '/')}
            {/* {navLink('Resume', '/resume')} */}
            {navLink('Contact', '/contact')}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
