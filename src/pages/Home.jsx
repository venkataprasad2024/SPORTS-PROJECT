import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
        } else {
          setIsTextVisible(false);
        }
      });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        } else {
          setIsImageVisible(false);
        }
      });
    }, observerOptions);

    if (textRef.current) textObserver.observe(textRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="home" className="bg-gradient-to-br from-blue-100 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Text Content */}
        <div
          ref={textRef}
          className={`md:w-1/2 text-center md:text-left transform transition-all duration-1000 ease-out ${
            isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 leading-tight mb-4">
            Welcome to Sportify
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Host and compete in top-tier tournaments for Cricket, Football, Volleyball, and Tennis.
            Get your team registered and be part of the action!
          </p>
          <a
            href="#"
            onClick={() => document.querySelector('button:contains("Register Team")')?.click()}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Register Your Team
          </a>
        </div>

        {/* Image or Illustration */}
        <div
          ref={imageRef}
          className={`md:w-1/2 flex justify-center transform transition-all duration-1000 ease-out ${
            isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <img
            src="public/athletes-1867185_1280.jpg"
            alt="Sports Illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
