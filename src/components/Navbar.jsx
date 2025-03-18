import React from 'react';
import { assets } from '../assets/assets.js';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-2 bg-black ">
      {/* Left Section */}
      <div className="left flex items-center gap-5">
        <img src={assets.spotify_logo} alt="Spotify Logo" className="w-[38px]" />
        <button className="p-2 bg-[#1F1F1F] rounded-full">
          <img src={assets.home_icon} className="w-[25px]" alt="Home Icon" />
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-[#1F1F1F] text-white rounded-full px-4 py-2 w-[500px] border border-gray-700">
          {/* Left Search Icon */}
          <img src={assets.search_icon} alt="Search" className="w-5 h-5 text-gray-400" />

          {/* Input Field */}
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent text-white placeholder-gray-400 outline-none px-4 flex-grow w-full"
          />

          {/* Right Icon */}
          <img src={assets.stack_icon} alt="Stack Icon" className="w-5 h-5 text-gray-400 ml-3" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-x-6 text-white pr-30">
        {/* Left Side Buttons */}
        <div className="flex gap-x-4 font-bold text-gray-400 text-sm">
          <button className="hover:text-white hover:scale-105 transition-all duration-200">Premium</button>
          <button className="hover:text-white hover:scale-105 transition-all duration-200">Support</button>
          <button className="hover:text-white hover:scale-105 transition-all duration-200">Download</button>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600"></div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-x-4 font-bold text-gray-400 text-sm">
          <button className="hover:text-white hover:scale-105 transition-all duration-200 flex items-center gap-1">
            <img src={assets.arrow_icon} alt="Install" className="w-4 h-4" />
            Install App
          </button>
          <button className="hover:text-white hover:scale-105 transition-all duration-200">Sign up</button>

          {/* Login Button */}
          <button className="px-6 py-2 text-black bg-white rounded-full hover:text-white hover:bg-gray-800 transition-all duration-200">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
