import React, { useState } from 'react';
import RegisterModal from './RegisterModal';
import OngoingMatchesInfo from './OngoingMatchesInfo';
import FootballIntro from './FootballIntro';
const Football = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSport, setSelectedSport] = useState('Football'); // Default to Football
  const footballMatches = [
    { team1: 'Barcelona', team2: 'Real Madrid', date: 'April 21, 2025', time: '5:30 PM' },
    { team1: 'Man City', team2: 'Liverpool', date: 'April 21, 2025', time: '8:00 PM' },
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert('✅ Registration Successful!');
      setIsModalOpen(false);
      setTeamName('');
      setEmail('');
      setSelectedSport('Football');
    }, 500);
  };

  return (
    <>
    <FootballIntro/>
      <section className="py-20 bg-gradient-to-r from-blue-100 to-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/football-1396740_640.jpg"
              alt="Football"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">Football Tournament</h2>
            <p className="text-gray-700 text-lg mb-6">
              Experience the thrill of Football like never before. Tackle, pass, and score your way to glory.
              Join the ultimate showdown on the field!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition cursor-pointer"
            >
              Register for Football
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
      <OngoingMatchesInfo sport="Football" matches={footballMatches} />

    </>
  );
};

export default Football;
