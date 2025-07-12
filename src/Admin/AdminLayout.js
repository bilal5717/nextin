// src/Admin/AdminLayout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaBookOpen, FaUserFriends, FaTools, FaTachometerAlt, FaImage,FaUserGraduate,FaUsers, FaComments, FaEnvelope } from 'react-icons/fa';
import NextIn from './admin-images/NextIn.png';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="flex items-center justify-center p-6 border-b border-blue-400">
          <img src={NextIn} alt="NextIn Logo" className="w-24 h-24 mr-2 rounded-full" />
          <span className="text-xl font-bold">NextIn  </span>
        </div>

        <nav className="flex-grow p-4 space-y-4">
          <Link to="/admin/dashboard" className="flex items-center space-x-3 hover:text-gray-200">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/coursesAdmin" className="flex items-center space-x-3 hover:text-gray-200">
            <FaBookOpen />
            <span>Courses</span>
          </Link>
          <Link to="/admin/servicesAdmin" className="flex items-center space-x-3 hover:text-gray-200">
            <FaTools />
            <span>Services</span>
          </Link>
          <Link to="/admin/usersAdmin" className="flex items-center space-x-3 hover:text-gray-200">
            <FaUserFriends />
            <span>Users</span>
          </Link>
          <Link to="/admin/bannerAdmin" className="flex items-center space-x-3 hover:text-gray-200">
            <FaImage />
            <span>Banners</span>
          </Link>
          <Link to="/admin/enrolledStudent" className="flex items-center space-x-3 hover:text-gray-200">
            <FaUserGraduate />
            <span>EnrolledStudents</span>
          </Link>
           <Link to="/admin/team" className="flex items-center space-x-3 hover:text-gray-200">
            <FaUsers />
            <span>Team</span>
          </Link>
          <Link to="/admin/reviews" className="flex items-center space-x-3 hover:text-gray-200">
          <FaComments />
            <span>Reviews</span>
          </Link>
          <Link to="/admin/msg" className="flex items-center space-x-3 hover:text-gray-200">
            <FaEnvelope />
            <span>Messages</span>
          </Link>
        </nav>
      </aside>

      {/* Main Page Content */}
      <main className="flex-grow p-10 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
