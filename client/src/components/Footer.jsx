// src/components/Footer.jsx
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main-container">
      {/* Left Form Container */}
      <div className="footer-form-container">
        {/* Wrap the form with an additional div */}
        <div className="form-wrapper">
          <h3 className="form-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae molestias quos.</h3>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Right Grid Footer */}
      <div className="footer-grid-container">
        <div className="footer-grid">
          {/* First Column: Address */}
          <div className="footer-cell">
            <h4>Address</h4>
            <p>1234 Main Street<br />City, Country</p>
          </div>

          {/* Second Column: Contact Info */}
          <div className="footer-cell">
            <h4>Contact Us</h4>
            <p>Email: contact@domain.com</p>
            <p>Phone: +123-456-7890</p>
          </div>

          {/* Third Column: Social Media */}
          <div className="footer-cell">
            <h4>Connect with Us</h4>
            <p>Follow us on social media for updates.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook color="#fff" size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter color="#fff" size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram color="#fff" size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin color="#fff" size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* End Footer */}
        <div className="end-footer">
          <p>All rights reserved © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
