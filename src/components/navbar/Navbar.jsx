import React from 'react'
import {RiMenu3Lin, RiCloseLin} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assests/logo.svg';

//BEM --> Block Element Modifier

function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Navbar