import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setIsModalOpen(false);
      setTeamName('');
      setEmail('');
      setSelectedSport('');
    }, 2000);
  };

  return (
    <>
      <div className={`${isModalOpen ? 'blur-sm pointer-events-none select-none' : ''} transition-all duration-300`}>
        <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-7xl  px-4 py-4 flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2 ">
              <img
                className="h-10 w-10 object-contain"
                src="public/Ilustração De Bola De Futebol De Chama Azul Para Designs Esportivos E Com Tema De Futebol PNG , Bola De Futebol De Chama Azul, Bola De Futebol Pegando Fogo, Blue Fire Football PNG Imagem para download gratuito.jpeg"
                alt="logo"
              />
              <span className="text-2xl font-bold text-blue-600 -ml-2">Sportify</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {['Home', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/`}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 hover: transition-all duration-300 ease-in-out hover:scale-105"
                >
                  {item}
                </Link>
              ))}

              {/* Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="text-lg font-semibold text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-300 ease-in-out hover:scale-105">
                  Sports ▾
                </button>
                <div
                  className={`absolute top-8 mt-0 w-40 bg-white shadow-lg rounded-md py-2 transition-all duration-300 transform ${
                    dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  {['Cricket', 'Football', 'Volleyball', 'Tennis'].map((sport) => (
                    <Link
                      key={sport}
                      to={`/${sport.toLowerCase()}`}
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:pl-5 transition-all duration-300 ease-in-out"
                    >
                      {sport}
                    </Link>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-lg font-semibold"
              >
                Register Team
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-4xl text-blue-600 focus:outline-none cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden px-4 pb-4 space-y-3">
              {['Home', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/`}
                  className="block text-lg font-semibold text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 transition-all duration-300 hover:scale-105"
                >
                  {item}
                </Link>
              ))}
              <div>
                <details className="group">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-700 hover:text-blue-600 hover:underline underline-offset-4">
                    Sports
                  </summary>
                  <div className="pl-4 mt-2 space-y-1">
                    {['Cricket', 'Football', 'Volleyball', 'Tennis'].map((sport) => (
                      <Link
                        key={sport}
                        to={`/${sport.toLowerCase()}`}
                        className="block text-base text-gray-700 hover:text-blue-600 hover:pl-3 transition-all duration-300"
                      >
                        {sport}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition text-lg font-semibold cursor-pointer"
              >
                Register Team
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Modal */}
      {isModalOpen && (
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
                    onClick={() => setIsModalOpen(false)}
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
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded shadow-md animate-slide-up-fade transition-all">
          ✅ Enrollment Successful!
        </div>
      )}
    </>
  );
};

export default Navbar;
