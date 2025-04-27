import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from './LoginSignup';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Register Team Modal
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // Login/Signup Modal
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login status
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

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAuthModalOpen(true); // Show the login modal after logging out
  };

  return (
    <>
      {/* Blur when any modal is open */}
      <div className={`${(isModalOpen || isAuthModalOpen) ? 'bg-black bg-opacity-50 backdrop-blur-sm pointer-events-none select-none' : ''} transition-all duration-300`}>
        <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-7xl px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
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
                  to="/"
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
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
                <button className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
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
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:pl-5"
                    >
                      {sport}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Conditionally show Register Team only if logged in */}
              {isLoggedIn && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-lg font-semibold"
                >
                  Register Team
                </button>
              )}

              {/* Login/Signup Button */}
              {!isLoggedIn ? (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-lg font-semibold"
                >
                  Login / Signup
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition text-lg font-semibold"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-4xl text-blue-600"
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
                  to="/"
                  className="block text-lg font-semibold text-gray-700 hover:text-blue-600 hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              ))}
              {/* Sports */}
              <div>
                <details className="group">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-700 hover:text-blue-600">
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

              {/* Conditional Buttons */}
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition text-lg font-semibold"
                >
                  Register Team
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition text-lg font-semibold"
                >
                  Login / Signup
                </button>
              )}
            </div>
          )}
        </nav>
      </div>

      {/* Modals */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Register Your Team</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="teamName" className="block text-gray-700">Team Name</label>
                <input
                  id="teamName"
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sport" className="block text-gray-700">Select Sport</label>
                <select
                  id="sport"
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Sport</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Football">Football</option>
                  <option value="Volleyball">Volleyball</option>
                  <option value="Tennis">Tennis</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isAuthModalOpen && (
        <LoginSignup
          closeModal={() => setIsAuthModalOpen(false)}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded shadow-md animate-slide-up-fade">
          ✅ Enrollment Successful!
        </div>
      )}
    </>
  );
};

export default Navbar;
