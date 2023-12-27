import React from 'react'

export default function Inline() {

    //heading object
    const heading ={
        fontSize: '100px',
        color:'tomato'
    }
    const heading2 ={
        fontSize: '50px',
        color:'blue'
    }

    //when inline , create a diff object for the style attrbute

    
  return (
    <div>

        <h1 style={heading}>My name is Catherine</h1>
        <h2 style={heading2}>My name is Catherine</h2>
   
    </div>
  )
}
