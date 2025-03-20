import React from 'react'

const Song_items = ({id,name,image,desc,file,duration}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition duration-200'>
      <img src={image} className='rounded' alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default Song_items
