import React from 'react'
import { assets, songsData } from '../assets/assets'
const Player = () => {
  return (
    <div className='h-[10%] border border-amber-500 text-white'>
      <div className='flex items-center p-3 gap-4'>
        <img src={songsData[0].image} width={55} alt="" />
        <div className='flex flex-col '>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
            </div>
      
      <div className='flex flex-col items-center mx-auto gap-2'>
        <div className='flex gap-3'>
            <img src={assets.shuffle_icon} className='w-[20px] cursor-pointer' alt="" />
            <img src={assets.prev_icon} className='w-[20px] cursor-pointer' alt="" />
            <img src={assets.play_icon} className='w-[20px] cursor-pointer' alt="" />
            <img src={assets.next_icon} className='w-[20px] cursor-pointer' alt="" />
            <img src={assets.loop_icon} className='w-[20px] cursor-pointer' alt="" />
        </div>
        <div className='flex gap-2 items-center'>
            <p>1:23</p>
            <div className='bg-white w-[60vw] max-w-[500px] cursor-pointer'><hr className=' h-1 border-none w-0 bg-green-700 rounded-full'/></div>
            <p>3:23</p>
            </div>
      
      </div>
      <div className='flex items-center gap-3 '>
                <img src={assets.play_icon} className='w-[20px] opacity-[75%]' alt="" />
                <img src={assets.mic_icon} className='w-[20px] opacity-[75%]' alt="" />
                <img src={assets.queue_icon} className='w-[20px] opacity-[75%]' alt="" />
                <img src={assets.speaker_icon} className='w-[20px] opacity-[75%]' alt="" />
                <img src={assets.volume_icon}  className='w-[20px] opacity-[75%]'alt="" />
                <div className='w-20 bg-slate-300 h-1 rounded'>

                </div>
                <img src={assets.mini_player_icon} className='w-[20px] opacity-[75%]' alt="" />
                <img src={assets.zoom_icon} className='w-[20px] opacity-[75%]' alt="" />
            </div>
      </div>
    </div>
  )
}

export default Player
