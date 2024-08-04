import React from 'react';
import { Link } from 'react-router-dom';
import homebutton from "../assets/homebutton.png";
import ticket from "../assets/ticket.png"; 
import heart from "../assets/heart.png"; 

import user from "../assets/user.png"


function Navbar() {
  return (
    <nav
      className='fixed bottom-0 left-0 w-full bg-white shadow-md p-5 z-30 flex justify-between items-center rounded-full'
      style={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Customize shadow here
      }}
    >
      <ul className='flex items-center justify-between w-full max-w-4xl mx-auto'>
        <li className='flex-1 flex justify-start'>
          <Link to="/layout/home">
            <img
              src={homebutton}
              alt="Home"
              className='w-8 h-8 cursor-pointer'
            />
          </Link>
        </li>
        <li className='flex-1 flex justify-center'>
          <Link to="/tickets">
            <img
              src={ticket}
              alt="Tickets"
              className='w-8 h-8 cursor-pointer'
            />
          </Link>
        </li>
        <li className='flex-1 flex justify-center pl-4'>
          <Link to="/favorites">
            <img
              src={heart}
              alt="Favorites"
              className='w-8 h-8 cursor-pointer'
            />
          </Link>
        </li>
        <li className='flex-1 flex justify-end'>
          <Link to="/profile">
            <img
              src={user}
              alt="Profile"
              className='w-8 h-8 cursor-pointer'
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;