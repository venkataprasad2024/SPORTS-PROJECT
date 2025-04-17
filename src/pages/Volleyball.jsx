import React from 'react';

const Volleyball = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-100 to-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="public/ball-1930191_1280.jpg"
            alt="Volleyball"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-yellow-700 mb-4">Volleyball Tournament</h2>
          <p className="text-gray-700 text-lg mb-6">
            Dive into the action with spikes, blocks, and saves! Showcase your team's volleyball skills and aim for the championship.
          </p>
          <a
            href="#"
            onClick={() => document.querySelector('button:contains("Register Team")')?.click()}
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Register for Volleyball
          </a>
        </div>
      </div>
    </section>
  );
};

export default Volleyball;
