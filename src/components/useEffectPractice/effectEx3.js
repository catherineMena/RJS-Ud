import React, {useState, useEffect} from 'react'

export default function EffectEx3() {
const [x, setX] = useState(0)
const [y, setY] = useState (0)


const logMousePosition =(e)=>{
    console.log('this is mouse event')
    setX(e.clientX)
    setY(e.clientY)
}

 
useEffect(()=>{
  

    console.log('useEffect is called')
    window.addEventListener('mousemove', logMousePosition)


    //cleanup function
return()=>{
window.removeEventListener('mousemove', logMousePosition)
console.log('component is unmountes, the code is clean')
}
},[])

  return (

    <div>

        <p>
mouse position
        </p>
            coordinate X, Y - {x}, {y}
    </div>
  )
}
