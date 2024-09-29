import React from 'react';

const Header = ({ activeSection, onNavClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-10">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Certifications'].map((item) => (
            <li key={item}>
              <button
                onClick={() => onNavClick(item.toLowerCase())}
                className={`text-white hover:text-blue-600 ${
                  activeSection === item.toLowerCase() ? 'font-bold' : ''
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;