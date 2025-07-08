import { useState } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaBook,
  FaServicestack,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 📞 Contact Info Bar */}
      <div className="bg-gray-500 text-white px-4 py-2 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-4 flex-wrap text-sm text-white">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>infonextin721@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+92 305 9272375</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+92 307 7875533</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-lg mt-2 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><FaWhatsapp /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
        </div>
      </div>

      {/* 🧭 Main Navigation Bar */}
      <nav className="bg-gray-700 px-4 md:px-8 text-white w-full">
        <div className="flex justify-between items-center py-3">
          {/* Logo - Hidden on mobile, visible on desktop */}
          <Link to="/" className="z-10 hidden md:block  p-0">
            <div className="logo-container">
              <img 
                src={Logo} 
                alt="Logo" 
                className="logo-img object-contain transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-xl" 
              />
              <div className="absolute inset-0 rounded-lg shadow-lg opacity-20 hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Nav Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 text-sm lg:text-lg font-semibold">
            <li className="flex items-center space-x-1 hover:text-blue-500">
              <FaHome />
              <Link to="/">Home</Link>
            </li>
            <li className="flex items-center space-x-1 hover:text-blue-500">
              <FaInfoCircle />
              <Link to="/about">About</Link>
            </li>
            <li className="flex items-center space-x-1 hover:text-blue-500">
              <FaBook />
              <Link to="/course">Courses</Link>
            </li>
            <li className="flex items-center space-x-1 hover:text-blue-500">
              <FaServicestack />
              <Link to="/services">Services</Link>
            </li>
            <li className="flex items-center space-x-1 hover:text-blue-500">
              <FaEnvelope />
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Enroll Now Button (Visible on all devices) */}
          <div className="hidden md:flex">
            <Link
              to="/enroll"
              className="bg-[#016fbe] hover:bg-blue-700 px-4 py-2 rounded-lg text-sm lg:text-base font-semibold"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        {isOpen && (
          <div className="mt-2 md:hidden flex flex-col items-center space-y-5 pb-4">
            <ul className="flex flex-col space-y-4 text-white text-base font-medium text-center w-full">
              {/* Logo in Mobile Menu */}
              <li className="flex justify-center py-2">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <div className="relative mobile-logo-container">
                    <img 
                      src={Logo} 
                      alt="Logo" 
                      className="mobile-logo-img object-contain" 
                    />
                  </div>
                </Link>
              </li>
              
              <li className="hover:text-blue-500 flex items-center gap-2 justify-center py-2">
                <FaHome />
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="hover:text-blue-500 flex items-center gap-2 justify-center py-2">
                <FaInfoCircle />
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              </li>
              <li className="hover:text-blue-500 flex items-center gap-2 justify-center py-2">
                <FaBook />
                <Link to="/course" onClick={() => setIsOpen(false)}>Courses</Link>
              </li>
              <li className="hover:text-blue-500 flex items-center gap-2 justify-center py-2">
                <FaServicestack />
                <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
              </li>
              <li className="hover:text-blue-500 flex items-center gap-2 justify-center py-2">
                <FaEnvelope />
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </ul>

            <Link
              to="/pages/EnrollForm"
              onClick={() => setIsOpen(false)}
              className="bg-[#016fbe] hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;