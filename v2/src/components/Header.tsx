import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HutuLogo from '../HutuLogo.svg';
import { Menu, MessageCircle, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/+1234567890', '_blank');
  };

  return (
    <header className="bg-white fixed w-full z-[100] top-0 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-[110]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/" className="flex flex-col">
              <img src={HutuLogo} alt="HUTU Logo" className="h-10 w-auto md:h-16" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-[#38BDF8] font-medium">Home</Link>
            <Link to="/graphics-arts" className="text-gray-900 hover:text-[#38BDF8] font-medium">Graphics Arts</Link>
            <Link to="/interior-crafts" className="text-gray-900 hover:text-[#38BDF8] font-medium">Interior Crafts</Link>
            <Link to="/technology" className="text-gray-900 hover:text-[#38BDF8] font-medium">Technology</Link>
            <Link to="/about" className="text-gray-900 hover:text-[#38BDF8] font-medium">About</Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={openWhatsApp}
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </button>
              <Link to="/contact" className="bg-[#38BDF8] text-white px-6 py-2 rounded-full hover:bg-[#0EA5E9] transition-colors">Contact</Link>
            </div>
          </nav>
          <div className="flex items-center space-x-3 md:hidden">
            <Link to="/" className="md:hidden flex flex-col">
              <img src={HutuLogo} alt="HUTU Logo" className="h-10 w-auto" />
            </Link>
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center bg-green-500 text-white w-10 h-10 rounded-full hover:bg-green-600 transition-colors relative z-[110]"
              aria-label="Open WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`
            fixed inset-x-0 top-[57px] bg-white border-t border-gray-100 z-[90]
            transform transition-transform duration-300 ease-in-out md:hidden
            ${isMenuOpen ? 'translate-y-0 opacity-100 shadow-lg' : '-translate-y-full opacity-0'}
          `}
        >
          <nav className="flex flex-col p-4 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 hover:text-[#38BDF8] hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors active:bg-blue-100"
            >
              Home
            </Link>
            <Link
              to="/graphics-arts"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 hover:text-[#38BDF8] hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Graphics Arts
            </Link>
            <Link
              to="/interior-crafts"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 hover:text-[#38BDF8] hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Interior Crafts
            </Link>
            <Link
              to="/technology"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 hover:text-[#38BDF8] hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Technology
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 hover:text-[#38BDF8] hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#38BDF8] text-white px-6 py-3 mt-2 rounded-full hover:bg-[#0EA5E9] transition-colors text-center mx-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;