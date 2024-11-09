import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="newsletter">
          <p className="newsletter-title">→ stay <strong>IN THE KNOW</strong></p>
          <div className="email-input">
            <input type="email" placeholder="Your Email" />
            <button type="submit">→</button>
          </div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTiktok} />
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>BRAND</h3>
            <ul>
              <li>Our Story</li>
              <li>Store Locator</li>
              <li>Careers</li>
              <li>E-Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3>SUPPORT</h3>
            <ul>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Size, Fit, + Care</li>
              <li>Order Status</li>
              <li>Returns + Exchanges</li>
              <li>International Ordering</li>
            </ul>
          </div>
          <div>
            <h3>CONNECT</h3>
            <ul>
              <li>Brand Influencers</li>
              <li>Wholesale Inquiry</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024  BN.</p>
        <p>Privacy Policy</p>
        <p>Terms + Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;