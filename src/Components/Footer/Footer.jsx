import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import image1 from '../../assets/asset-images/componylogo/companylogo3.jpg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-black rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between text-white">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={image1} className="h-8 mr-3" alt="Company Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Company</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
            <li>
              <a href="/About" className="mr-4 hover:underline md:mr-6">About</a>
            </li>
            <li>
              <a href="/About" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="/Services/1" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
              <a href="/ContactUs" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center mb-4">
          <a href="https://www.youtube.com" className="social-link"><FaYoutube /></a>
          <a href="https://www.facebook.com" className="social-link"><FaFacebook /></a>
          <a href="https://www.instagram.com" className="social-link"><FaInstagram /></a>
          <a href="https://www.linkedin.com" className="social-link"><FaLinkedin /></a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="/" className="hover:underline">Company</a>. All Rights Reserved.
        </span>
      </div>
      <div className="fixed bottom-4 right-4">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
