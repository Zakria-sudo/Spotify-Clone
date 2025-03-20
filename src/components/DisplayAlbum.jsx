import React from 'react'
import Main_Nav from './Main_Nav'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {
    const {id} = useParams();
    const albumData = albumsData[id]
    console.log(albumData)
  return (
    <>
        <Main_Nav/>
        <div className='flex mt-10 gap-4'>
            <img src={albumData.image} className='w-50' alt="" />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='font-bold text-5xl mb-4'>{albumData.name}</h2>
                <h4 className=''>{albumData.desc}</h4>
                <p className='flex mt-4 gap-3'>
                    <img src={assets.spotify_logo} className='w-5' alt="" />
                    <b>Spotify</b>
                    234,123 likes
                        <b>50 songs,</b>
                    about 1 hr 20 mins
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 my-5 p-2 text-[#a7a7a7]'>
            <p><b className='mr-5'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Data Added</p>
            <img src={assets.clock_icon} className='m-auto w-4' alt="" />
        </div>
        <hr />
        {
            songsData.map ((item,index)=>(
                <div className='grid grid-cols-3 sm:grid-cols-4 my-5 p-2 text-[#a7a7a7]'>
                    <p><b className='mr-5'>{index+1}</b><img src={item.image} className='w-10 inline' alt="" /></p>
                    <p>{item.name}</p>
                    <p className='text-[10px]'>{albumData.name}</p>
                    <p className='text-[10px]'>5 days ago</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayAlbum
