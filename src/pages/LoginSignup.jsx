import React, { useState } from 'react';

const LoginSignupModal = ({ closeModal, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple logic to simulate login/signup
    if (email && password) {
      setIsLoggedIn(true);
      closeModal();
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"></div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow-sm">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                {isSignUp ? 'Sign Up to our platform' : 'Sign In to our platform'}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                  />
                </div>

                {isSignUp && (
                  <div className="flex justify-between items-center">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ms-2 text-sm font-medium text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline"
                    >
                      Lost Password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
                >
                  {isSignUp ? 'Sign Up' : 'Login to your account'}
                </button>

                <div className="text-sm text-center">
                  {isSignUp ? (
                    <>
                      Already have an account?{' '}
                      <a
                        href="#"
                        className="text-blue-700 hover:underline"
                        onClick={() => setIsSignUp(false)}
                      >
                        Login
                      </a>
                    </>
                  ) : (
                    <>
                      Not registered?{' '}
                      <a
                        href="#"
                        className="text-blue-700 hover:underline"
                        onClick={() => setIsSignUp(true)}
                      >
                        Create account
                      </a>
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
