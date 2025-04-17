import React from 'react';

const Tennis = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-100 to-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="public/racket-6308994_1280.jpg"
            alt="Tennis"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-pink-700 mb-4">Tennis Tournament</h2>
          <p className="text-gray-700 text-lg mb-6">
            Rally, serve, and smash your way to victory. Take part in our Tennis tournament and claim your spot among champions!
          </p>
          <a
            href="#"
            onClick={() => document.querySelector('button:contains("Register Team")')?.click()}
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Register for Tennis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tennis;
