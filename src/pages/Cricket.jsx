import React from 'react';

const Cricket = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white min-h-[90vh]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/cricket-8444899_1280.jpg"
            alt="Cricket"
            className="rounded-xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Cricket Championship</h2>
          <p className="text-gray-700 mb-6">
            Step onto the pitch and lead your team to victory! Experience the thrill of intense overs,
            smart bowling strategies, and epic sixes.
          </p>
          <a href="#register">
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
              Register for Cricket
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cricket;
