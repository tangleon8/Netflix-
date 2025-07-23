import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          LEONFLIX
        </a>

        {/* Toggler (visible on mobile) */}
        <button
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className={`navbar-toggler${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links */}
        <div
          className={`navbar-links${menuOpen ? ' active' : ''}`}
          onClick={closeMenu}
        >
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#websites-created" className="navbar-link">Websites</a>
          <a href="#experience" className="navbar-link">Experience</a>
          <a href="#publications" className="navbar-link">Publications</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#hobbies" className="navbar-link">Hobbies & More</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
