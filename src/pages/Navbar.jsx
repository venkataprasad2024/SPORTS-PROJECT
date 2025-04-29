import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import RegisterModal from './RegisterModal'; // ✅ Corrected import

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAnyModalOpen = isModalOpen || isAuthModalOpen;

  return (
    <>
      <div className={`${isAnyModalOpen ? 'backdrop-blur-sm' : ''} transition-all duration-300`}>
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                className="h-10 w-10 object-contain"
                src="public/ logo.jpeg"
                alt="logo"
              />
              <span className="text-2xl font-bold text-blue-600 -ml-2">Sportify</span>
            </div>

            {/* Desktop Navigation */}
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

              {/* Sports Dropdown with smooth transition */}
              <div className="relative group">
                <button className="flex items-center text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">
                  Sports
                  <svg
                    className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>
                <div className="absolute top-10 left-0 w-40 bg-white shadow-lg rounded-md py-2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 z-50">
                  {['Cricket', 'Football', 'Volleyball', 'Tennis'].map((sport) => (
                    <Link
                      key={sport}
                      to={`/${sport.toLowerCase()}`}
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                    >
                      {sport}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Auth and Registration Buttons */}
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-lg font-semibold"
                  >
                    Register Team
                  </button>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsAuthModalOpen(true);
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition text-lg font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-lg font-semibold"
                >
                  Login / Signup
                </button>
              )}
            </div>

            {/* Mobile Hamburger */}
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
                  className="block text-lg font-semibold text-gray-700 hover:text-blue-600 hover:underline"
                >
                  {item}
                </Link>
              ))}
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
        <RegisterModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          handleSubmit={() => {
            alert('✅ Registration Successful!');
            setIsModalOpen(false);
          }}
          teamName=""
          setTeamName={() => {}}
          email=""
          setEmail={() => {}}
          selectedSport="Cricket"
          setSelectedSport={() => {}}
        />
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
