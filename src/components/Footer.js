import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaHackerrank } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <p>&copy; 2024 Praveen Kalavai. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/praveenkalavai" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://github.com/prvnkalavai" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          <a href="https://instagram.com/praveenkalavai" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
          <a href="https://x.com/praveenkalavai" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
          <a href="https://www.hackerrank.com/prvnkalavai" target="_blank" rel="noopener noreferrer"><FaHackerrank size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;