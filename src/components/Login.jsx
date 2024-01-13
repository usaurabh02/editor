// src/components/Login.js
import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <video src="/video.mp4" autoPlay muted loop className="absolute" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-md w-full p-6 mx-3 bg-white bg-opacity-55 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-900  text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 bg-white bg-opacity-55 rounded-md focus:outline-none focus:border-black"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-900 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 bg-white bg-opacity-50 rounded-md focus:outline-none focus:border-black"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
            type="button"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
