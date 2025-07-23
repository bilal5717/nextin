
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Check if current route starts with "/admin"
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Show Navbar only if not on admin route */}
      {!isAdminRoute && <Navbar />}

      {/* Main content goes here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Show Footer only if not on admin route */}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default Layout;
