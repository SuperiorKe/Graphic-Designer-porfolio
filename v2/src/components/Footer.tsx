import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';
import HutuLogo from '../HutuLogo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={HutuLogo} alt="HUTU Logo" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm">
              Blending creativity with technical expertise to deliver exceptional solutions in graphics design, interior decoration, and technology services.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/graphics-arts" className="hover:text-[#38BDF8] transition-colors">Graphics Arts</Link></li>
              <li><Link to="/interior-crafts" className="hover:text-[#38BDF8] transition-colors">Interior Crafts</Link></li>
              <li><Link to="/technology" className="hover:text-[#38BDF8] transition-colors">Technology</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#38BDF8] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#38BDF8] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDF8] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} HUTU. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-[#38BDF8] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-[#38BDF8] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;