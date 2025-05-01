import React, { useEffect, useState } from 'react';
import {
  FaBaseballBall,
  FaFutbol,
  FaTableTennis,
  FaVolleyballBall,
} from 'react-icons/fa';

const slides = [
  {
    title: 'Cricket',
    desc: 'The Gentleman’s Game – A battle of skill, strategy, and endurance.',
    icon: <FaBaseballBall className="text-yellow-400 text-7xl" />,
    image: '/ball-3381339_1280.jpg',
  },
  {
    title: 'Football',
    desc: 'Where passion meets the pitch — every kick writes history.',
    icon: <FaFutbol className="text-green-400 text-7xl" />,
    image: '/football-1396740_640.jpg',
  },
  {
    title: 'Tennis',
    desc: 'Elegance meets intensity in every rally across the court.',
    icon: <FaTableTennis className="text-pink-400 text-7xl" />,
    image: '/racket-6308994_1280.jpg',
  },
  {
    title: 'Volleyball',
    desc: 'Airborne battles and lightning spikes ignite this team sport.',
    icon: <FaVolleyballBall className="text-blue-400 text-7xl" />,
    image: '/ball-1930191_1280.jpg',
  },
];

const TournamentIntro = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${slides[index].image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-2xl bg-black/40 backdrop-blur-md rounded-3xl px-10 py-12 shadow-lg text-white">
          <div className="flex justify-center mb-4">
            {slides[index].icon}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{slides[index].title}</h1>
          <p className="text-lg text-gray-200">{slides[index].desc}</p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 flex space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all ${
                i === index ? 'bg-white scale-125' : 'bg-gray-400/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentIntro;
