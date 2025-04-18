import React from 'react';

const Football = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-100 to-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="public/football-1396740_640.jpg"
            alt="Football"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Football Tournament</h2>
          <p className="text-gray-700 text-lg mb-6">
            Experience the thrill of Football like never before. Tackle, pass, and score your way to glory.
            Join the ultimate showdown on the field!
          </p>
          <a
            href="#"
            onClick={() => document.querySelector('button:contains("Register Team")')?.click()}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Register for Football
          </a>
        </div>
      </div>
    </section>
  );
};

export default Football;
