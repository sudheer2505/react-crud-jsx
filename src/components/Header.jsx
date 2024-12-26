import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <div className="d-flex flex-wrap py-3 mb-2 border-bottom bg-dark text-light">

        <div className='d-flex justify-content-start me-auto'><img src={logo} className="App-logo" alt="logo" /></div>

        <h2 className='text-center d-flex justify-content-center'>Sample CRUD Example</h2>
        <div className='d-flex justify-content-end align-items-center ms-auto'>
          <div className=''><Link to="/">Home </Link></div>
          <div className='d-flex justify-content-end ps-3'>
            <Link to="/products">Product </Link>
          </div>
          <div className='d-flex justify-content-end ps-3 pe-3'>
            <Link to="/employees">Employee</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header