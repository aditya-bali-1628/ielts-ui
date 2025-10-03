import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        {/* Logo Image */}
        <img
          src="/Gemini_Generated_Image_b45izub45izub45i.png"
          alt="IDP IELTS Logo"
          className="w-20 h-15   object-contain"
        />

        {/* Text */}
        <div className="text-2xl font-bold text-red-600">
          IDP IELTS
        </div>
      </div>

      {/* Menu */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/book-test">Book Test</Link>
        <Link to="/preparation">Preparation</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/destinations">Destinations</Link>
      </nav>

      {/* Book Button */}
      <Link
        to="/booknow"
        className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold"
      >
        Book Now
      </Link>
    </header>
  );
};

export default Header;
