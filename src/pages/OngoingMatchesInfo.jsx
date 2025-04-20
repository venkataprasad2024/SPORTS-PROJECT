import React, { useState } from 'react';
import { FaFutbol, FaVolleyballBall, FaTableTennis, FaBaseballBall } from 'react-icons/fa';

const OngoingMatchesInfo = ({ sport }) => {
  const [showMatches, setShowMatches] = useState(false);

  const matchesData = {
    Football: [
      { teams: 'Lions FC vs Hawks FC', time: '10:00 AM' },
      { teams: 'Stormers vs Titans', time: '12:00 PM' },
      { teams: 'Falcons vs Panthers', time: '2:00 PM' },
      { teams: 'Kings United vs Warriors', time: '4:00 PM' },
    ],
    Cricket: [
      { teams: 'Strikers vs Blasters', time: '9:30 AM' },
      { teams: 'Hitters vs Warriors', time: '1:30 PM' },
      { teams: 'Tigers vs Kings', time: '4:00 PM' },
      { teams: 'Legends vs Panthers', time: '6:30 PM' },
    ],
    Tennis: [
      { teams: 'A. Smith vs B. John', time: '10:30 AM' },
      { teams: 'C. Wang vs D. Patel', time: '12:30 PM' },
      { teams: 'E. Novak vs F. Rafa', time: '2:30 PM' },
      { teams: 'G. Federer vs H. Alcaraz', time: '4:30 PM' },
    ],
    Volleyball: [
      { teams: 'Spikers vs Blockers', time: '11:00 AM' },
      { teams: 'Jumpers vs Smashers', time: '1:00 PM' },
      { teams: 'Diggers vs Setters', time: '3:00 PM' },
      { teams: 'Rally Kings vs Net Ninjas', time: '5:00 PM' },
    ],
  };

  const iconMap = {
    Football: <FaFutbol size={20} />,
    Cricket: <FaBaseballBall size={20} />,
    Tennis: <FaTableTennis size={20} />,
    Volleyball: <FaVolleyballBall size={20} />,
  };

  const matches = matchesData[sport] || [];
  const icon = iconMap[sport] || <FaFutbol size={20} />;

  return (
    <div className="w-full px-6 py-10 bg-gray-100 mt-8 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <button
          onClick={() => setShowMatches(!showMatches)}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-full flex items-center gap-2 mx-auto transition duration-300 shadow-md"
        >
          {icon}
          <span>{showMatches ? 'Hide' : 'Show'} Ongoing Matches</span>
        </button>
      </div>

      {showMatches && (
        <div className="grid md:grid-cols-2 gap-6">
          {matches.map((match, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-700">{match.teams}</h3>
              <p className="text-gray-600 mt-2">{match.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OngoingMatchesInfo;
