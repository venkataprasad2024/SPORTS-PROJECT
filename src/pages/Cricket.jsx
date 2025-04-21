import React, { useState } from 'react';
import RegisterModal from './RegisterModal';
import OngoingMatchesInfo from './OngoingMatchesInfo';
import CricketIntro from './CricketIntro';
const cricketMatches = [
  { team1: 'India', team2: 'Australia', date: 'April 21, 2025', time: '3:00 PM' },
  { team1: 'England', team2: 'Pakistan', date: 'April 21, 2025', time: '7:00 PM' },
];

const Cricket = () => {
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

  return (
    <>
    <CricketIntro/>
      <section className="py-20 bg-gradient-to-r from-blue-100 to-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
          {/* Image Left Side */}
          <div className="md:w-1/2">
            <img
              src="cricket-8444899_1280.jpg" // 🔁 Replace this with your real cricket image path
              alt="Cricket"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content Right Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Cricket Championship</h2>
            <p className="text-blue-700 text-lg mb-6">
              Step into the world of fierce battles, bold boundaries, and electrifying overs.
              Rally your team and make your mark in the ultimate cricket arena.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded transition shadow-lg"
            >
              Register for Cricket
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

      {/* Matches Section */}
      <OngoingMatchesInfo sport="Cricket" matches={cricketMatches} />
    </>
  );
};

export default Cricket;
