import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';
import NextInlogo from '../images/logo.png';

const Footer = () => (
  <footer className="bg-black text-gray-400 py-10 px-6 md:px-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start text-center md:text-left">
      
      {/* Logo and Description */}
      <div className="flex flex-col items-center md:items-start">
        <Link to="/">
          <img src={NextInlogo} alt="NextIn Logo" className="h-20 w-24 mb-4" />
        </Link>
        <p className="text-sm max-w-xs">
          Innovative tech solutions tailored to your business goals. From strategy to execution — we deliver results.
        </p>
      </div>

      {/* Navigation Links */}
      <div>
        <h5 className="font-semibold text-white mb-3">Explore</h5>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="hover:text-[#016fbe] transition">Home</Link></li>
          <li><Link to="/courses" className="hover:text-[#016fbe] transition">Courses</Link></li>
          <li><Link to="/services" className="hover:text-[#016fbe] transition">Services</Link></li>
          <li><Link to="/contact" className="hover:text-[#016fbe] transition">Contact</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h5 className="font-semibold text-white mb-3">Services</h5>
        <ul className="space-y-2 text-sm">
          <li>Web Development</li>
          <li>App Development</li>
          <li>Game Development</li>
          <li>SEO & Google Ads</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm-items-center  text-left md:items-start">
        <h5 className="font-semibold sm-items-start text-white mb-3">Contact Us</h5>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-[#016fbe]" />
            <span>infonextin721@gmail.com</span>
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2">
            <FaPhoneAlt className="text-[#016fbe]" />
            <span>+92 (3059272375)</span>
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt className="text-[#016fbe]" />
            <span>Lahore, Pakistan</span>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 justify-center md:justify-start text-white">
          <a href="#" className="hover:text-[#016fbe]"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#016fbe]"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-[#016fbe]"><FaInstagram /></a>
          <a href="#" className="hover:text-[#016fbe]"><FaWhatsapp /></a>
        </div>
      </div>
    </div>

    {/* Footer bottom */}
    <p className="text-center text-gray-600 text-xs mt-10">
      © {new Date().getFullYear()} NextIn. All rights reserved.
    </p>
  </footer>
);

export default Footer;
