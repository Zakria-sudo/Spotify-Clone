import React from 'react'
import { createContext } from 'react'
import { useRef } from 'react';
export const plc = createContext();

const Playercontext = (props) => {
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

export default Playercontext
