
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl mb-2 font-serif">EASTERY</h2>
        </div>
        
        <div className="flex justify-center space-x-10 mb-6">
          <Link to="/service" className="hover:text-gray-300 transition-colors">Service</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
          <Link to="/faqs" className="hover:text-gray-300 transition-colors">FAQs</Link>
          <Link to="/login" className="hover:text-gray-300 transition-colors">Sign In</Link>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">
            <Facebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">
            <Twitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">
            <Instagram />
          </a>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>©MyEastery.com | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
