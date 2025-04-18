import React, { useEffect, useRef, useState } from 'react';

const Cricket = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = sectionRef.current?.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.85;
      if (top < trigger) setVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 min-h-screen bg-white"
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left Side - Caption */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4 text-blue-800">
            Cricket Championship
          </h2>
          <p className="text-blue-700 text-lg sm:text-xl leading-relaxed font-medium mb-6">
            Step into the world of fierce battles, bold boundaries, and electrifying overs. 
            Rally your team and make your mark in the ultimate cricket arena.
          </p>
          <a href="#register">
            <button className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 transition duration-300 ease-in-out shadow-lg">
              Register for Cricket
            </button>
          </a>
        </div>

        {/* Right Side - Sticker */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/16124d3d-2326-405c-aa7f-cd2183fa75ce.jpeg"
            alt="Batsman Sticker"
            className="w-[300px] sm:w-[400px] md:w-[450px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Cricket;
