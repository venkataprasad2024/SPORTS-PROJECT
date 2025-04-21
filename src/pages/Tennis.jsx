import React, { useState } from 'react';
import RegisterModal from './RegisterModal';
import OngoingMatchesInfo from './OngoingMatchesInfo';
import TennisIntro from './TennisIntro';
const Tennis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSport, setSelectedSport] = useState('Tennis'); // Default to Tennis

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert('✅ Registration Successful!');
      setIsModalOpen(false);
      setTeamName('');
      setEmail('');
      setSelectedSport('Tennis');
    }, 500);
  };

  return (
    <><TennisIntro/>
      <section className="py-20 bg-gradient-to-r from-blue-100 to-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/racket-6308994_1280.jpg"
              alt="Tennis"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Tennis Tournament</h2>
            <p className="text-gray-700 text-lg mb-6">
              Rally, serve, and smash your way to victory. Take part in our Tennis tournament and claim your spot among champions!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
            >
              Register for Tennis
            </button>
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

      <OngoingMatchesInfo sport="Tennis" />
    </>
  );
};

export default Tennis;
