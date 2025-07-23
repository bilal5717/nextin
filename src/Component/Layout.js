// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // Adjust the path if needed
import Navbar from './Navbar'; // Optional if you have a common navbar

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Optional shared Navbar */}
      <Navbar />

      {/* Page content injected here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
