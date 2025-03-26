import React from 'react'
import { createContext } from 'react'
import { useRef, useState,useEffect } from 'react';
import { songsData } from '../../assets/assets';

export const Playercontext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setplayStatus] = useState(false)
    const [time, setTime] = useState({
      currentTime:{
        minutes:0,
        seconds:0
      },
      totalTime:{
        minutes:0,
        seconds:0
      }
    })
    const Play = ()=>{
      audioRef.current.play();
      setplayStatus(true)
    }
    const Pause = ()=>{
      audioRef.current.pause();
      setplayStatus(false)
    }
    useEffect(() => {
      setTimeout(() => {
        audioRef.current.ontimeupdate = () =>{
          seekBar.current.style.width = `${(audioRef.current.currentTime/audioRef.current.duration)*100}%`;
         setTime({
          currentTime:{
            minutes:Math.floor(audioRef.current.currentTime/60),
            seconds:Math.floor(audioRef.current.currentTime%60)
          },
          totalTime:{
            minutes:Math.floor(audioRef.current.duration/60),
            seconds:Math.floor(audioRef.current.duration%60)
          }
         })
        }
      }, 1000);
    }, [audioRef])
    
    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track, setTrack,
        playStatus, setplayStatus,
        time, setTime,
        Play,Pause
        }


  return (
    <Playercontext.Provider value = {contextValue}>
        {props.children}
    </Playercontext.Provider>
  )
}

export default PlayerContextProvider
