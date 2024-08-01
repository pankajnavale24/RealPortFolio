import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={28} className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={28} className="hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={28} className="hover:text-pink-500 transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={28} className="hover:text-blue-700 transition duration-300" />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center border-t border-gray-700 pt-8">
          <p className="text-sm mb-1">&copy; 2024 Pankaj Navale. All rights reserved.</p>
          <p className="text-sm">Made with ❤️ by Pankaj</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
