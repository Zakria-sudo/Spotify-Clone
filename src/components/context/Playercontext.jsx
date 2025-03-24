import React from 'react'
import { createContext } from 'react'
import { useRef } from 'react';

export const Playercontext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();

    const contextValue = {
        audioRef
    }
  return (
    <Playercontext.Provider value = {contextValue}>
        {props.children}
    </Playercontext.Provider>
  )
}

export default PlayerContextProvider
