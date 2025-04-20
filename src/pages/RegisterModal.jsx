import React from 'react';

const RegisterModal = ({
  isOpen,
  setIsOpen,
  handleSubmit,
  teamName,
  setTeamName,
  email,
  setEmail,
  selectedSport,
  setSelectedSport,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300">
        <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-md p-6 animate-fade-in-up relative z-50">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Team Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Team Name</label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your team name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="team@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Sport</label>
              <select
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="" disabled>Select sport</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Tennis">Tennis</option>
              </select>
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
