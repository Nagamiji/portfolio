// src/components/Header.jsx
import React from 'react';

const Header = () => (
  <header className="l-header">
    <nav className="nav bd-grid">
      <div>
        <a href="#" className="nav__logo">Kana</a>
      </div>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">Skills</a>
          </li>
          <li className="nav__item">
            <a href="#work_experience" className="nav__link">Work Experience</a>
          </li>
          <li className="nav__item">
            <a href="#achievement" className="nav__link">Achievement</a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">Work</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </div>
      {/*
        Uncomment below for a responsive mobile menu toggle:
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      */}
    </nav>
  </header>
);

export default Header;
