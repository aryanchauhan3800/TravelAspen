import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Allesplace from './Allesplace';
import Screen1 from './Screen1';

const Layout = () => {
  const location = useLocation();
  const isAllesplace = location.pathname === '/';

  return (
    <>
      

{isAllesplace ? <Allesplace /> : null}


{!isAllesplace && <Navbar />}
      <Outlet />
    </>
  );
}

export default Layout;
