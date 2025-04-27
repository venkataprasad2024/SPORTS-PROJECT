import React, { useEffect, useRef, useState } from 'react';
import {
  FaFutbol,
  FaVolleyballBall,
  FaTableTennis,
  FaBaseballBall,
} from 'react-icons/fa';
import SportsCards from './SportsCards';
import MatchesCountUp from './MatchesCountUp';
import TournamentIntro from './TournamentIntro';
import RegisterModal from './RegisterModal';

const HomeData = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSport, setSelectedSport] = useState('Cricket');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert('✅ Registration Successful!');
      setIsModalOpen(false);
      setTeamName('');
      setEmail('');
      setSelectedSport('Cricket');
    }, 500);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsTextVisible(entry.isIntersecting);
      });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsImageVisible(entry.isIntersecting);
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
    <div>
      <TournamentIntro />
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition cursor-pointer"
            >
              Register Your Team
            </button>
          </div>

          {/* Image or Illustration */}
          <div
            ref={imageRef}
            className={`md:w-1/2 flex justify-center transform transition-all duration-1000 ease-out ${
              isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src="/athletes-1867185_1280.jpg"
              alt="Sports Illustration"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      <RegisterModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handleSubmit={handleSubmit}
        teamName={teamName}
        setTeamName={setTeamName}
        email={email}
        setEmail={setEmail}
        selectedSport={selectedSport}
        setSelectedSport={setSelectedSport}
      />

      <SportsCards />
      <MatchesCountUp />
    </div>
  );
};

export default HomeData;
