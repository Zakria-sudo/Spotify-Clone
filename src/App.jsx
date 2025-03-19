import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <>
    <div className='h-screen bg-black text-white'>
    <Navbar />
    <Sidebar />
    </div>
    </>
  )
}

export default App
