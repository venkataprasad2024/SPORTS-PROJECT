import React, { useEffect, useRef, useState } from 'react';
import { FaTrophy } from 'react-icons/fa';

const CricketIntro = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/cricket-8444899_1280.jpg')", // Replace with high-res if needed
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 backdrop-blur-sm" />

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white px-6 py-10 transition-all duration-1000 ease-out max-w-4xl mx-auto ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* <div className="flex justify-center mb-6">
          <FaTrophy className="text-yellow-400 text-5xl drop-shadow-xl animate-pulse" />
        </div> */}

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          ICC Inter-College Cricket Championship 2025
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 font-medium mb-8 leading-relaxed drop-shadow-sm">
          Unleash your passion, showcase your skills, and rise through the ranks to claim the ultimate glory. 
          Experience cricket like never before in this battle of champions.
        </p>

        <button className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-300 hover:to-red-400 text-black font-bold px-8 py-3 rounded-full shadow-2xl transition duration-300">
          🏏 Register Your Squad
        </button>
      </div>
    </section>
  );
};

export default CricketIntro;
