import React from 'react';
import './Footer.css'
import image1 from '../../assets/asset-images/componylogo/companylogo3.jpg'

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={image1} alt="Company Logo" />
                </div>
                <div className="footer-info">
                    <h4>Heera Properties</h4>
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
