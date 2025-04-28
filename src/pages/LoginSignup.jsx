import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSignupModal = ({ closeModal, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Saving signup details to localStorage
      const userData = { email, password };
      localStorage.setItem('user', JSON.stringify(userData));
      toast.success('Signup successful! You can now log in.');
      setIsSignUp(false); // Switch to login after signup
      setEmail('');
      setPassword('');
    } else {
      // Login logic
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        toast.success('Login successful!');
        setTimeout(() => {
          setIsLoggedIn(true);
          closeModal();
        }, 1000); // small delay to show the toast
      } else {
        toast.error('Invalid credentials. Please try again or Sign Up first.');
      }
    }
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"></div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                {isSignUp ? 'Sign Up to our platform' : 'Sign In to our platform'}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              >
                ✖
              </button>
            </div>

            <div className="p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
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
