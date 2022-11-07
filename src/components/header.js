import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light py-3'>
        <NavLink className='navbar-brand' to='/'>
          <h1>Logo </h1>
        </NavLink>
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
              <NavLink className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/products'>
                Products
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/cart'>
                Cart
              </NavLink>
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
            <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
              <i className='fa fa-shopping-cart me-1'></i>
              Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
