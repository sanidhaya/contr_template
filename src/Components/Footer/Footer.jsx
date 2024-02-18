import React from 'react';
import './Footer.css'
import image1 from '../../images/beautiful-sunset-los-angeles-downtown-600nw-1418018357.webp'

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={image1} alt="Company Logo" />
                </div>
                <div className="footer-info">
                    <h4>Company Name</h4>
                    <p>About Us: A brief description of the company.</p>
                    <p>Contact Us: contact@company.com</p>
                </div>
                <div className="additional-info">
                    <p>&copy; 2024 Company. All rights reserved.</p>
                    <p>Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
