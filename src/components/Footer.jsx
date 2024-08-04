import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-white py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-4 md:mb-0">
          
          <p className="text-sm"></p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row text-center md:text-left">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h2 className="text-lg font-semibold mb-2"></h2>
            <ul>
              <li><a href="/home" className="hover:text-gray-400"></a></li>
              <li><a href="/about" className="hover:text-gray-400"></a></li>
              <li><a href="/services" className="hover:text-gray-400"></a></li>
              <li><a href="/contact" className="hover:text-gray-400"></a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2"></h2>
            <ul>
              <li><a href="/blog" className="hover:text-gray-400"></a></li>
              <li><a href="/faq" className="hover:text-gray-400">cvb</a></li>
              <li><a href="/terms" className="hover:text-gray-400">erty</a></li>
              <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
           
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
           
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
           
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
           
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 Travel Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
