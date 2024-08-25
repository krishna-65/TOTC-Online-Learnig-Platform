import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }
    setError('');
    alert('Login successful');
    // Handle login logic here
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-5">
      <div className="md:w-1/2 flex items-center p-5">
        <img src="./signup.avif" height="100px" width="350px" alt="Placeholder" className="rounded-lg " />
        
      </div>
        <div className="md:w-1/2 p-5 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-center mb-5">Welcome to TOTC..!</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
          </div>
          <button
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="text-center mt-4">
            <button
              className="text-blue-500 hover:underline"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
