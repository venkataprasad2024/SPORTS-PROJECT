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
  const [players, setPlayers] = useState([]);
  const [showTeam, setShowTeam] = useState(false); // Flag to show registered team
  const [teamRegistered, setTeamRegistered] = useState(false); // Flag to manage registration flow

  // Handle team registration submission
  const handleRegisterTeam = () => {
    setIsModalOpen(false);  // Close the modal after team registration
    setShowTeam(true);      // Show registered team details
    setTeamRegistered(true); // Update flag to prevent multiple team registrations
  };

  // Handle adding players to the team
  const handleAddPlayer = (playerName) => {
    if (players.length < 12 && playerName) {
      setPlayers([...players, playerName]);
    }
  };

  // Handle final player submission and reset for next team registration
  const handleSubmitPlayers = () => {
    if (players.length === 12) {
      alert('✅ Players Registered Successfully!');
      setShowTeam(false);  // Hide the registered team section to reset
      setTeamRegistered(false); // Reset team registration flow
      setPlayers([]);  // Clear players list
      setTeamName('');  // Clear team name
      setEmail('');  // Clear email
    }
  };

  return (
    <>
      <CricketIntro />

      {/* Show Registered Team and Players */}
      {showTeam && (
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-center my-6">
          <h2 className="text-2xl font-bold">Registered Team: {teamName}</h2>
          <div>
            <h3 className="text-xl font-semibold mt-4">Players:</h3>
            <ul className="list-disc ml-6">
              {players.map((player, index) => (
                <li key={index} className="text-lg">{player}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Section for Cricket Matches */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <img
              src="cricket-8444899_1280.jpg"
              alt="Cricket"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Cricket Championship</h2>
            <p className="text-blue-700 text-lg mb-6">
              Step into the world of fierce battles, bold boundaries, and electrifying overs.
              Rally your team and make your mark in the ultimate cricket arena.
            </p>
            {!teamRegistered ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded transition shadow-lg"
              >
                Register for Cricket
              </button>
            ) : (
              <button
                onClick={() => {
                  setTeamName('');
                  setPlayers([]);
                  setShowTeam(false);
                  setTeamRegistered(false);
                }}
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded transition shadow-lg"
              >
                Register New Team
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Modal for Team Registration */}
      <RegisterModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handleSubmit={handleRegisterTeam}
        teamName={teamName}
        setTeamName={setTeamName}
        email={email}
        setEmail={setEmail}
      />

      {/* Player Registration */}
      {showTeam && !teamRegistered && (
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Add Players to Your Team</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddPlayer(e.target.player.value);
              e.target.reset();
            }}
          >
            <input
              type="text"
              name="player"
              placeholder="Enter Player Name"
              className="border p-2 rounded-md mb-4 w-full"
              required
            />
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded transition">
              Add Player
            </button>
          </form>

          {players.length === 12 && (
            <button
              onClick={handleSubmitPlayers}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded mt-4"
            >
              Submit All Players
            </button>
          )}
        </div>
      )}

      {/* Matches Section */}
      <OngoingMatchesInfo sport="Cricket" matches={cricketMatches} />
    </>
  );
};

export default Cricket;
