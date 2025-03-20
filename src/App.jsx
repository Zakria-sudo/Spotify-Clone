import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
const App = () => {
  return (
    <>
    <div className='h-screen bg-black text-white'>
    <Navbar />
    <div className='flex w-full h-[90vh] gap-2'>
    <Sidebar />
    <Display />
    </div>
    <Player />
    </div>
    </>
  )
}

export default App
