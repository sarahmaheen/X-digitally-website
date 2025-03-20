import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, ChevronRight } from 'lucide-react'; // Importing icons from lucide-react
import './Footer.css'

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* First Section */}
      <div className="footer-section first-section">
        <div className="about-company">
          <h2>Our Company</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, id eveniet similique enim repellendus sint magni consectetur iure! Cumque et quidem odio totam ipsum, velit facere aut optio atque odit!</p>
        </div>
        <div className="contact-info">
          <p><Mail size={16} /> info@company.com</p>
          <p><Phone size={16} />948894 23378</p>
          <div className="social-icons">
            <a href="#" className="icon"><Facebook size={20} /></a>
            <a href="#" className="icon"><Twitter size={20} /></a>
            <a href="#" className="icon"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="footer-section quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#">Home <ChevronRight size={16} className="arrow" /></a></li>
          <li><a href="#">About <ChevronRight size={16} className="arrow" /></a></li>
          <li><a href="#">Services <ChevronRight size={16} className="arrow" /></a></li>
          <li><a href="#">Team <ChevronRight size={16} className="arrow" /></a></li>
          <li><a href="#">Contact Us <ChevronRight size={16} className="arrow" /></a></li>
        </ul>
      </div>

      {/* Third Section: Form */}
      <div className="footer-section contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Contact Number" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
