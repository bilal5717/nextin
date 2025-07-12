import { useState, useEffect } from 'react';
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
import EnrollmentModal from './models/EnrollmentModel';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Adjusted to hide on tablets too
const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) { // Reduced scroll threshold for mobile
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* 📞 Contact Info Bar - Hidden on mobile when sticky */}
      {(!isMobile || !isSticky) && (
        <div 
          className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 flex flex-col md:flex-row justify-between items-center text-sm transition-all duration-300 ${isSticky && isMobile ? 'hidden' : 'block'}`}
          style={{
            boxShadow: 'inset 0 8px 15px rgba(0, 0, 0, 0.2)',
            textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start text-sm text-white">
            <div className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <FaEnvelope className="text-blue-200" />
              <span className="text-xs sm:text-sm">infonextin721@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <FaPhoneAlt className="text-blue-200" />
              <span className="text-xs sm:text-sm">+92 305 9272375</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <FaPhoneAlt className="text-blue-200" />
              <span className="text-xs sm:text-sm">+92 3077875533</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-lg mt-2 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61571698353597" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-bilal-7bb1b3278/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/923077875533" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors transform hover:scale-110">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors transform hover:scale-110">
              <FaInstagram />
            </a>
          </div>
        </div>
      )}

      {/* 🧭 Main Navigation Bar - Always sticky on mobile */}
      <nav 
        className={`bg-gradient-to-r from-gray-800 to-gray-900 px-4 md:px-8 text-white w-full transition-all duration-300 ${isSticky || isMobile ? 'fixed top-0 z-50 shadow-lg' : 'relative'}`}
        style={{
          boxShadow: (isSticky || isMobile) ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none'
        }}
      >
        <div className="flex justify-between items-center py-3 max-w-7xl mx-auto">
          {/* Logo - Hidden on mobile, visible on desktop */}
          <Link to="/" className="z-10 hidden md:block p-0">
            <div className="logo-container relative group">
              <img 
                src={Logo} 
                alt="Logo" 
                className="logo-img object-contain h-12 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1" 
              />
              <div className="absolute inset-0 rounded-lg bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Nav Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 text-sm lg:text-lg font-medium">
            <li className="group">
              <Link to="/" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <FaHome className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </Link>
            </li>
            <li className="group">
              <Link to="/about" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <FaInfoCircle className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>About</span>
              </Link>
            </li>
            <li className="group">
              <Link to="/course" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <FaBook className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Courses</span>
              </Link>
            </li>
            <li className="group">
              <Link to="/services" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <FaServicestack className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Services</span>
              </Link>
            </li>
            <li className="group">
              <Link to="/contact" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <FaEnvelope className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>

          {/* Enroll Now Button (Visible on all devices) */}
          <div className="hidden md:flex">
             <button
  onClick={() => setIsEnrollModalOpen(true)}
  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
>
  Enroll Now
</button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden z-20">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none transition-transform hover:scale-110"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-10 flex flex-col items-center justify-center md:hidden pt-20">
            <ul className="flex flex-col space-y-8 text-white text-xl font-medium text-center w-full px-4">
              {/* Logo in Mobile Menu */}
              <li className="flex justify-center py-4">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <div className="relative mobile-logo-container">
                    <img 
                      src={Logo} 
                      alt="Logo" 
                      className="mobile-logo-img object-contain h-16" 
                    />
                  </div>
                </Link>
              </li>
              
              <li className="group">
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 py-3 hover:text-blue-400 transition-colors"
                >
                  <FaHome className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="group">
                <Link 
                  to="/about" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 py-3 hover:text-blue-400 transition-colors"
                >
                  <FaInfoCircle className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>About</span>
                </Link>
              </li>
              <li className="group">
                <Link 
                  to="/course" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 py-3 hover:text-blue-400 transition-colors"
                >
                  <FaBook className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Courses</span>
                </Link>
              </li>
              <li className="group">
                <Link 
                  to="/services" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 py-3 hover:text-blue-400 transition-colors"
                >
                  <FaServicestack className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Services</span>
                </Link>
              </li>
              <li className="group">
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 py-3 hover:text-blue-400 transition-colors"
                >
                  <FaEnvelope className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>

            <button
  onClick={() => setIsEnrollModalOpen(true)}
  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
>
  Enroll Now
</button>
          </div>
        )}
      </nav>
      <EnrollmentModal 
  isOpen={isEnrollModalOpen} 
  onClose={() => setIsEnrollModalOpen(false)} 
/>
      {/* Spacer to prevent content jump when nav becomes fixed */}
      {(isSticky || isMobile) && <div className="h-16 md:h-20"></div>}
    </>
  );
};

export default Navbar;