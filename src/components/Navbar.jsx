import React from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 bg-black">
      {/* Left Section */}
      <div className="flex items-center gap-3 sm:gap-5 w-full sm:w-auto">
        <img src={assets.spotify_logo} alt="Spotify Logo" className="w-[32px] sm:w-[38px]" />

        {/* Home Button */}
        <button className="p-2 bg-[#1F1F1F] rounded-full">
          <img src={assets.home_icon} className="w-[22px] sm:w-[25px]" alt="Home Icon" />
        </button>

        {/* Search Bar - Hidden on very small screens */}
        <div className="hidden sm:flex items-center bg-[#1F1F1F] text-white rounded-full px-3 sm:px-4 py-2 w-full sm:w-[400px] md:w-[500px] border border-gray-700">
          <img src={assets.search_icon} alt="Search" className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent text-white placeholder-gray-400 outline-none px-3 flex-grow"
          />
          <img src={assets.stack_icon} alt="Stack Icon" className="w-5 h-5 text-gray-400 ml-2" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-white w-full sm:w-auto mt-3 sm:mt-0">
        {/* Left Side Buttons */}
        <div className="hidden sm:flex gap-x-4 font-bold text-gray-400 text-sm">
          <button className="hover:text-white hover:scale-105 transition-all duration-200">Premium</button>
          <button className="hover:text-white hover:scale-105 transition-all duration-200">Support</button>
          <button className="hover:text-white hover:scale-105 transition-all duration-200">Download</button>
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden sm:block w-px h-6 bg-gray-600"></div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-x-3 sm:gap-x-4 font-bold text-gray-400 text-sm">
          <button className="hover:text-white hover:scale-105 transition-all duration-200 flex items-center gap-1">
            <img src={assets.arrow_icon} alt="Install" className="w-4 h-4" />
            Install App
          </button>
          <button className="hover:text-white hover:scale-105 transition-all duration-200">Sign up</button>

          {/* Login Button */}
          <button className="px-5 py-2 text-black bg-white rounded-full hover:text-white hover:bg-gray-800 transition-all duration-200">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
