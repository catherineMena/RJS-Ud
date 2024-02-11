import React, {useState,useEffect} from 'react'

import EffectEx3 from './effectEx3'

export default function MouseContainer() {

const [display, setDisplay] = useState(true)    

  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {display && <EffectEx3/> }
    </div>



  )
}
