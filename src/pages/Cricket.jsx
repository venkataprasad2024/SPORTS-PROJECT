import React, { useEffect, useRef, useState } from 'react';
import RegisterModal from './RegisterModal';
import OngoingMatchesInfo from './OngoingMatchesInfo';

const cricketMatches = [
  { team1: 'India', team2: 'Australia', date: 'April 21, 2025', time: '3:00 PM' },
  { team1: 'England', team2: 'Pakistan', date: 'April 21, 2025', time: '7:00 PM' },
];



const Cricket = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSport, setSelectedSport] = useState('Cricket'); // Default to Cricket

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
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 transition duration-300 ease-in-out shadow-lg"
            >
              Register for Cricket
            </button>
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
      <OngoingMatchesInfo sport="Cricket" matches={cricketMatches} />
    </>
  );
};

export default Cricket;
