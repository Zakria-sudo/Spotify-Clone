import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="sidebar max-w-[28%] h-[80%] p-2 bg-[#121212] rounded">
    <div className='flex  items-center justify-between p-4'>
      <h1 className='font-bold'>Your Library</h1>
      <img src={assets.plus_icon} className='w-[20px]' alt="" />
    </div>
    <div className='flex flex-col gap-3'>
    <div className=' flex flex-col w-full gap-3 mt-5 rounded bg-[#1f1f1f] p-4'>
      <h1 className='font-bold text-sm'>Create your first playlist</h1>
      <p className='text-xs '>Its easy, we'll help you</p>
      <div>
      <button className='bg-white text-black text-sm px-5 py-2 rounded-full font-bold hover:scale-101 transition-all duration-200'>Create Playlist</button>
      </div>
      </div>
    <div className=' flex flex-col w-full gap-3 mt-5 rounded bg-[#1f1f1f] p-4'>
      <h1 className='font-bold text-sm'>Lets find some podcast to follow</h1>
      <p className='text-xs '>We'll keep you updated on new episodes</p>
      <div>
      <button className='bg-white text-black px-5 py-2 text-sm rounded-full font-bold hover:scale-101 transition-all duration-200'>Create Broswe podcasts</button>
      </div>
      </div>
    </div>
    <div className="footer">
      <ul className='grid grid-cols-3 gap-3 p-4'>
        <li className='text-xs '><a href="">Legal</a></li>
        <li className='text-xs '><a href="">Safety and Privacy center</a></li>
        <li className='text-xs '><a href="">Privacy Policy</a></li>
        <li className='text-xs '><a href="">Cookies</a></li>
        <li className='text-xs '><a href="">About Ads</a></li>
        <li className='text-xs '><a href="">Accessibility</a></li>
        <li className='text-xs underline'><a href="">Cookies</a></li>
      </ul>
    </div>
    <div className='p-3'>
      <button className='font-bold py-1 px-5 border border-gray-400 rounded-full text-sm'>English</button>
    </div>
    </div>
    
  )
}

export default Sidebar
