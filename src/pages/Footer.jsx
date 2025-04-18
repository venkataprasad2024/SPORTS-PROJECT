import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 text-blue-900 pt-16 pb-10 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
     
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-extrabold mb-4 text-blue-800 tracking-tight">Sportify</h3>
          <p className="text-base leading-relaxed text-blue-700">
            Unite, Compete, Conquer. Experience elite tournaments in Cricket, Football, Volleyball, and Tennis.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-base">
            <li><a href="#home" className="hover:text-blue-600 transition duration-300">🏠 Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition duration-300">ℹ️ About</a></li>
            <li><a href="#sports" className="hover:text-blue-600 transition duration-300">🏅 Sports</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition duration-300">✉️ Contact</a></li>
          </ul>
        </div>

        {/* Sports */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Tournaments</h4>
          <ul className="space-y-2 text-base">
            <li><a href="/cricket" className="hover:text-orange-500 transition duration-300">🏏 Cricket</a></li>
            <li><a href="/football" className="hover:text-green-600 transition duration-300">⚽ Football</a></li>
            <li><a href="/volleyball" className="hover:text-pink-500 transition duration-300">🏐 Volleyball</a></li>
            <li><a href="/tennis" className="hover:text-yellow-600 transition duration-300">🎾 Tennis</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-5 text-2xl text-blue-700">
            <a href="#" className="hover:text-blue-800 transition duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-500 transition duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600 transition duration-300"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-md font-medium text-blue-800 border-t border-blue-300 pt-6 tracking-wide">
        © {new Date().getFullYear()} <span className="font-bold">Sportify</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
