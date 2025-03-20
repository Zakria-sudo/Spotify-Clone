import React from 'react'
import { albumsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Album_items = ({id,image,name,desc,bgColor}) => {
  
  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition duration-200'>
      <img src={image} className='rounded' alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default Album_items
