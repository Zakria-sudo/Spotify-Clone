import React from 'react'
import Main_Nav from './Main_Nav'
import Album_items from './Album_items'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import Song_items from './Song_items'
const DisplayHome = () => {
  return (
    <>
        <Main_Nav />
        <div className='my-4'>
            <h1 className='font-bold text-2xl my-5'>Featured Charts</h1>
            <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<Album_items key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
            </div>
        </div>
        <div className='my-4'>
            <h1 className='font-bold text-2xl my-5'>Today's biggest hits</h1>
            <div className='flex overflow-auto'>
        {songsData.map((item,index)=>(<Song_items key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome
