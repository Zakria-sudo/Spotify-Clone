import React from "react";
import Main_Nav from "./Main_Nav";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);
  
  return (
    <>
      <Main_Nav />
      
      {/* Album Header */}
      <div className="flex flex-col sm:flex-row mt-10 gap-4 px-4">
        <img src={albumData.image} className="w-40 sm:w-52 rounded-lg" alt="" />
        
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Playlist</p>
          <h2 className="font-bold text-3xl sm:text-5xl mb-4">{albumData.name}</h2>
          <h4 className="text-sm sm:text-base">{albumData.desc}</h4>
          <p className="flex mt-4 gap-3 items-center text-sm sm:text-base">
            <img src={assets.spotify_logo} className="w-5" alt="" />
            <b>Spotify</b>
            <span>234,123 likes</span>
            <b>50 songs,</b>
            <span>about 1 hr 20 mins</span>
          </p>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 sm:grid-cols-4 my-5 p-2 px-4 text-[#a7a7a7] text-sm sm:text-base">
        <p className="flex items-center">
          <b className="mr-5">#</b> Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" alt="" />
      </div>
      <hr />

      {/* Songs List */}
      {songsData.map((item, index) => (
        <div
          className="grid grid-cols-3 sm:grid-cols-4 items-center my-5 p-2 px-4 text-[#a7a7a7] text-sm sm:text-base"
          key={index}
        >
          {/* Song index, image, and title */}
          <div className="flex items-center gap-3">
            <b>{index + 1}</b>
            <img src={item.image} className="w-10 h-10 rounded-md" alt="" />
            <span className="truncate w-32 sm:w-auto">{item.name}</span> {/* Truncate for small screens */}
          </div>

          {/* Album Name */}
          <p className="truncate">{albumData.name}</p>

          {/* Date Added (hidden on small screens) */}
          <p className="hidden sm:block">5 days ago</p>

          {/* Duration (always visible, center-aligned) */}
          <p className="text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
