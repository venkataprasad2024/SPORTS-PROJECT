import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSignupModal = ({ closeModal, setIsLoggedIn }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      const userData = { firstName, lastName, dob, email, password };
      localStorage.setItem('user', JSON.stringify(userData));
      toast.success('Signup successful! You can now log in.');
      setIsSignUp(false);
      setFirstName('');
      setLastName('');
      setDob('');
      setEmail('');
      setPassword('');
    } else {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        toast.success('Login successful!');
        setTimeout(() => {
          setIsLoggedIn(true);
          closeModal();
        }, 1000);
      } else {
        toast.error('Invalid credentials. Please try again or Sign Up first.');
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"></div>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto transition-all duration-300"
      >
        <div className="relative p-4 w-full max-w-md">
          <div className="relative bg-white rounded-lg shadow-lg transition-all duration-300 scale-100">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                {isSignUp ? 'Sign Up to our platform' : 'Sign In to our platform'}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                ✖
              </button>
            </div>

            <div className="p-4 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-4 transition-all duration-300">

                {/* Smooth Signup Fields */}
                <div
                  className={`grid grid-cols-2 gap-3 transition-all duration-500 overflow-hidden ${
                    isSignUp
                      ? 'max-h-[500px] opacity-100 scale-100'
                      : 'max-h-0 opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900">First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required={isSignUp}
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-900">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required={isSignUp}
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-1 text-sm font-medium text-gray-900">Date of Birth</label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required={isSignUp}
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                    />
                  </div>
                </div>

                {/* Common Email Input */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Common Password Input */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-900">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
                >
                  {isSignUp ? 'Sign Up' : 'Login'}
                </button>

                <div className="text-sm text-center">
                  {isSignUp ? (
                    <>
                      Already have an account?{' '}
                      <span
                        className="text-blue-700 hover:underline cursor-pointer"
                        onClick={() => setIsSignUp(false)}
                      >
                        Login
                      </span>
                    </>
                  ) : (
                    <>
                      Not registered?{' '}
                      <span
                        className="text-blue-700 hover:underline cursor-pointer"
                        onClick={() => setIsSignUp(true)}
                      >
                        Create account
                      </span>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupModal;
