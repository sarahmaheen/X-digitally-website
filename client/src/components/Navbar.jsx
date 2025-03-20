
import React, { useState } from 'react';
import { Menu } from 'lucide-react'; // Import Lucide's Menu icon
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>

      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger menu icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <Menu color="#000" size={30} /> {/* Lucide React Menu Icon */}
      </div>
    </nav>
  );
};

export default Navbar;
