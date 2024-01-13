// src/components/Signup.js
import React, { useState } from 'react';

export const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <video src="/video.mp4" autoPlay muted loop className="absolute" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-md mx-3 w-full p-6 bg-white bg-opacity-55 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Signup</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-900 text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 bg-white bg-opacity-55 rounded-md focus:outline-none focus:border-black"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-900 text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 bg-white bg-opacity-55 rounded-md focus:outline-none focus:border-black"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-900 text-sm font-medium mb-2">
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
          <button
            type="button"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleSignup}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};


