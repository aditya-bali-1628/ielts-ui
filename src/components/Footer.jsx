import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div className="flex flex-col space-y-4">
          <img
            src="/Gemini_Generated_Image_b45izub45izub45i.png"
            alt="IDP IELTS Logo"
            className="w-24 h-auto"
          />
          <p className="text-gray-600">
            IDP IELTS helps students achieve their dreams of studying, working, or migrating abroad.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-600 transition">Home</a></li>
            <li><a href="/booknow" className="hover:text-red-600 transition">Book Test</a></li>
            <li><a href="/preparation" className="hover:text-red-600 transition">Preparation</a></li>
            <li><a href="/resources" className="hover:text-red-600 transition">Resources</a></li>
            <li><a href="/destinations" className="hover:text-red-600 transition">Destinations</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Email: support@idp.com</li>
            <li>Phone: +91 123 456 7890</li>
            <li>Address: Mumbai, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-red-600">
            <a href="#" className="hover:text-red-800 transition">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-red-800 transition">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-red-800 transition">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-gray-200 py-4 mt-8 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} IDP IELTS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
