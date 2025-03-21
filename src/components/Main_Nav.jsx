import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Main_Nav = () => {

  const navigate = useNavigate()
  return (
    <div>
        <div className='flex justify-between'>
      <div className="btns flex items-center gap-3 ">
        <img onClick={()=>navigate(-1)} src={assets.arrow_left} width={23} className='cursor-pointer' alt="" />
        <img onClick={()=>navigate(1)}src={assets.arrow_right} width={23} className='cursor-pointer' alt="" />
      </div>
        <div className='flex items-center gap-3'>
            <button className='bg-white px-4 py-2 text-black font-bold rounded-full cursor-pointer'>Explore Premium</button>
            <p className='w-7 h-7  text-center items-center flex justify-center  rounded-full bg-purple-500 text-black '>A</p>
        </div>
        </div>
        <div className='flex items-center gap-2 mt-3'>
            <button className='px-3 py-1 text-sm bg-white text-black rounded-2xl cursor-pointer'>All</button>
            <button className='px-3 py-1 text-sm bg-black rounded-2xl cursor-pointer'>Music</button>
            <button className='px-3 py-1 text-sm bg-black rounded-2xl cursor-pointer'>Podcasts</button>
        </div>
    </div>
  )
}

export default Main_Nav
