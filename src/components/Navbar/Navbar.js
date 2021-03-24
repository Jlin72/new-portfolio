import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const Navbar = (props) => {
  let location = useLocation();
  return(
    <nav className='navbar navbar-expand-lg nav navbar-dark'>
      <div className='container-fluid'>
        <Link className="navbar-brand" to="/" style={{color: 'white'}}>Jhonny Lin</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to='/' >Home</Link>
            </li>
            <li className='nav-item'>
              <Link className={location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link' } to='/portfolio' >Portfolio</Link>
            </li>
            <li className='nav-item'>
              <Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} to='/contact' >Contact me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;