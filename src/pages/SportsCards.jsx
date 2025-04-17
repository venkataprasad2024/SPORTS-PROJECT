import React, { useEffect, useRef, useState } from 'react';

const sports = [
  {
    name: 'Cricket',
    image: 'public/ball-3381339_1280.jpg',
    link: '/cricket',
  },
  {
    name: 'Football',
    image: 'public/football-1396740_640.jpg',
    link: '/football',
  },
  {
    name: 'Volleyball',
    image: 'public/ball-1930191_1280.jpg',
    link: '/volleyball',
  },
  {
    name: 'Tennis',
    image: 'public/racket-6308994_1280.jpg',
    link: '/tennis',
  },
];

const SportsCards = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = cardRefs.current.map((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.85;
      });
      setVisibleCards(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Explore Sports</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {sports.map((sport, index) => {
            const direction =
              index === 0
                ? 'translate-x-[-100px]'
                : index === 3
                ? 'translate-x-[100px]'
                : 'translate-y-[100px]';

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative bg-white shadow-lg overflow-hidden rounded-xl border border-blue-300 transform transition-all duration-1000 ease-out hover:scale-105 hover:shadow-xl hover:border-blue-500
                ${
                  visibleCards[index]
                    ? 'opacity-100 translate-x-0 translate-y-0'
                    : `opacity-0 ${direction}`
                }`}
              >
                {/* Image with Equal Margin & Rounded Corners */}
                <div className="m-4 rounded-lg overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>

                {/* Text + Button */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">{sport.name}</h3>

                  <a href={sport.link}>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                        Explore More
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SportsCards;
