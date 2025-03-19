import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Player from './components/Player'
const App = () => {
  return (
    <>
    <div className='h-screen bg-black text-white'>
    <Navbar />
    <Sidebar />
    <Player />
    </div>
    </>
  )
}

export default App
