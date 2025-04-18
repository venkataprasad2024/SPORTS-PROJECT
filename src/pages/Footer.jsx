import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <h3 className="text-3xl font-bold mb-4 text-white">Sports Tournament</h3>
          <p className="text-blue-200 text-base leading-relaxed">
            Bringing athletes together under one roof to celebrate passion, performance, and perseverance. 
            Play hard, dream big, and win with honor.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3 text-blue-200 text-base">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#register" className="hover:text-white transition">Register</a></li>
            <li><a href="#sports" className="hover:text-white transition">Sports</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-white">Contact Us</h4>
          <p className="text-blue-200 text-base leading-relaxed">
            📍 Sports Complex Road, Arena City<br />
            📧 info@sportstournament.com<br />
            📞 +91 98765 43210
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-700 mt-12 pt-6 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} Sports Tournament. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
