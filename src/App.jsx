import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { Playercontext } from './components/context/Playercontext'

const App = () => {
  const {audioRef} =useContext(Playercontext);

  return (
    <>
    <div className='h-screen bg-black text-white'>
    <Navbar />
    <div className='flex w-full h-[90vh] gap-2'>
    <Sidebar />
    <Display />
    </div>
    <Player />
    <audio preload='auto'></audio>
    </div>
    </>
  )
}

export default App
