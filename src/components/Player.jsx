import React, { useContext } from "react";
import { assets} from "../assets/assets";
import {Playercontext} from './context/Playercontext.jsx'
const Player = () => {
  const {seekBg, seekBar, playStatus, Play, Pause, track, time} = useContext(Playercontext)
  return (
    <div className="h-[10%] fixed bottom-0 w-full text-white bg-[#181818] p-2">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 gap-4">
        {/* Song Info */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <img src={track.image} className="w-[45px] sm:w-[55px]" alt="" />
          <div className="flex flex-col text-xs sm:text-sm">
            <p className="font-bold">{track.name}</p>
            <p className="text-gray-400">{track.desc.slice(0, 12)}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
          {/* Control Icons */}
          <div className="flex gap-3">
            <img src={assets.shuffle_icon} className="w-[15px] sm:w-[20px] cursor-pointer" alt="" />
            <img src={assets.prev_icon} className="w-[15px] sm:w-[20px] cursor-pointer" alt="" />

            {playStatus? <img src={assets.pause_icon} onClick={Pause} className="w-[20px] sm:w-[25px] cursor-pointer" alt="" />
            :<img src={assets.play_icon} onClick={Play} className="w-[20px] sm:w-[25px] cursor-pointer" alt="" />}


            <img src={assets.next_icon} className="w-[15px] sm:w-[20px] cursor-pointer" alt="" />
            <img src={assets.loop_icon} className="w-[15px] sm:w-[20px] cursor-pointer" alt="" />
          </div>

          {/* Progress Bar */}
          <div className="flex gap-2 items-center w-full justify-center">
            <p className="text-xs sm:text-sm">{time.currentTime.minutes}:{time.currentTime.seconds}</p>
            <div ref={seekBg} className="bg-white w-[40vw] max-[995px]:w-[30vw] sm:w-[60vw] max-w-[300px] sm:max-w-[500px] cursor-pointer relative">
              <div ref={seekBar} className="h-1 w-0 bg-green-700 rounded-full"></div>
            </div>
            <p className="text-xs sm:text-sm">{time.totalTime.minutes}:{time.totalTime.seconds}</p>
          </div>
        </div>

        {/* Volume & Extra Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <img src={assets.mic_icon} className="w-[15px] opacity-[75%] cursor-pointer" alt="" />
          <img src={assets.queue_icon} className="w-[15px] opacity-[75%] cursor-pointer" alt="" />
          <img src={assets.speaker_icon} className="w-[15px] opacity-[75%] cursor-pointer" alt="" />
          <div className="w-20 bg-slate-300 h-1 rounded"></div>
          <img src={assets.mini_player_icon} className="w-[15px] opacity-[75%] cursor-pointer" alt="" />
          <img src={assets.zoom_icon} className="w-[15px] opacity-[75%] cursor-pointer" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Player;
