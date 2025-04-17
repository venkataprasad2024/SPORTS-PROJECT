import React, { useEffect, useRef, useState } from 'react';
import {
  FaFutbol,
  FaVolleyballBall,
  FaTableTennis,
  FaBaseballBall,
} from 'react-icons/fa';

const TournamentIntro = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="sec"
      ref={sectionRef}
      className="relative w-full h-[85vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/cricket-8444899_1280.jpg')",
      }}
    >
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white px-6 py-8 rounded-xl transition-all duration-1000 max-w-3xl mx-auto ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          One Arena Four Sports Infinite Glory
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 drop-shadow-sm">
          Enter a world where champions rise through Cricket, Football, Volleyball & Tennis.
        </p>

        {/* Icon Row */}
        <div className="grid grid-cols-2 sm:flex sm:justify-center gap-8 text-white text-center text-lg">
          <div className="flex flex-col items-center hover:text-blue-300 transition">
            <FaBaseballBall className="text-4xl mb-1" />
            <span className="text-sm">Cricket</span>
          </div>
          <div className="flex flex-col items-center hover:text-yellow-300 transition">
            <FaFutbol className="text-4xl mb-1" />
            <span className="text-sm">Football</span>
          </div>
          <div className="flex flex-col items-center hover:text-pink-300 transition">
            <FaVolleyballBall className="text-4xl mb-1" />
            <span className="text-sm">Volleyball</span>
          </div>
          <div className="flex flex-col items-center hover:text-green-300 transition">
            <FaTableTennis className="text-4xl mb-1" />
            <span className="text-sm">Tennis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentIntro;
