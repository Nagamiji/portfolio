import React from 'react';
import { Link } from "react-router-dom"; // If using React Router

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      {/* Left Section: Branding */}
      <div className="footer__brand">
        <h3 className="footer__title">Kana</h3>
        <p className="footer__tagline">Bridging AI & Innovation</p>
      </div>

      {/* Center Section: Quick Links */}
      <div className="footer__links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work-experience">Work Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Right Section: Copyright & Additional Info */}
      <div className="footer__copy">
        <p>&#169; {new Date().getFullYear()} Kana. All rights reserved.</p>
        <small><Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link></small>
      </div>
    </div>
  </footer>
);

export default Footer;
