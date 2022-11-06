import React from 'react';
function Header() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light py-3'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Products
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Link
              </a>
            </li>
          </ul>
          <div className='buttons'>
            <a href='' className='btn btn-outline-dark'>
              <i className='fa fa-sign-in me-1'></i>
              Login
            </a>
            <a href='' className='btn btn-outline-dark ms-2'>
              <i className='fa fa-user-plus me-1'></i>
              Register
            </a>
            <a href='' className='btn btn-outline-dark ms-2'>
              <i className='fa fa-shopping-cart me-1'></i>
              Cart (0)
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
