import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="hidden sm:block w-full sm:max-w-[28%] h-screen sm:h-[82vh] p-2 bg-[#121212] rounded overflow-auto">
      {/* Your Library */}
      <div className="flex items-center justify-between p-4">
        <h1 className="font-bold text-sm sm:text-base">Your Library</h1>
        <img src={assets.plus_icon} className="w-[16px] sm:w-[20px]" alt="Plus Icon" />
      </div>

      {/* Playlist & Podcast Sections */}
      <div className="flex flex-col gap-3">
        {/* Create Playlist */}
        <div className="flex flex-col w-full gap-3 mt-3 sm:mt-5 rounded bg-[#1f1f1f] p-4">
          <h1 className="font-bold text-xs sm:text-base">Create your first playlist</h1>
          <p className="text-[10px] sm:text-sm">It's easy, we'll help you</p>
          <button className="bg-white text-black text-xs sm:text-sm px-3 py-1 sm:px-5 sm:py-2 rounded-full font-bold hover:scale-105 transition-all duration-200">
            Create Playlist
          </button>
        </div>

        {/* Browse Podcasts */}
        <div className="flex flex-col w-full gap-3 mt-3 sm:mt-5 rounded bg-[#1f1f1f] p-4">
          <h1 className="font-bold text-xs sm:text-base">Let's find some podcasts to follow</h1>
          <p className="text-[10px] sm:text-sm">We'll keep you updated on new episodes</p>
          <button className="bg-white text-black text-xs sm:text-sm px-3 py-1 sm:px-5 sm:py-2 rounded-full font-bold hover:scale-105 transition-all duration-200">
            Browse Podcasts
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer mt-3 sm:mt-5">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 p-4 text-center sm:text-left">
          <li className="text-[10px] sm:text-xs"><a href="#">Legal</a></li>
          <li className="text-[10px] sm:text-xs"><a href="#">Privacy Center</a></li>
          <li className="text-[10px] sm:text-xs"><a href="#">Privacy Policy</a></li>
          <li className="text-[10px] sm:text-xs"><a href="#">Cookies</a></li>
          <li className="text-[10px] sm:text-xs"><a href="#">About Ads</a></li>
          <li className="text-[10px] sm:text-xs"><a href="#">Accessibility</a></li>
          <li className="text-[10px] sm:text-xs underline"><a href="#">Cookies</a></li>
        </ul>
      </div>

      {/* Language Selector */}
      <div className="p-3">
        <button className="font-bold text-xs sm:text-sm py-1 px-3 sm:px-5 border border-gray-400 rounded-full">
          English
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
