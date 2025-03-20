import React from 'react'
import { Route,Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
const Display = () => {
  return (
    <>
   <div className='w-[100%] h-[82vh]  px-6 pt-4 rounded bg-[#121212] text-white  overflow-auto lg :w-[75%] lg:ml-0]'>
    <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
    </Routes>
   </div>
    </>
  )
}

export default Display
