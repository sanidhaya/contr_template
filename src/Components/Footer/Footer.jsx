import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a href="/" className="flex items-center mb-4 md:mb-0">
            <img src=" " className="h-8 mr-3" alt="Company Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Company</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 md:mb-0 dark:text-gray-400">
            <li>
              <a href="/About" className="mr-4 hover:underline md:mr-6">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
              <a href="/ContactUs" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p className="text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Company</a>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
