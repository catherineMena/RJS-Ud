import React, {useState} from 'react'

export default function Counter2() {
 
 const[count, setCount]= useState(0);
 const initialCount = 0;

const increment=()=>{
  for(let i=0; i<2; i++)
  setCount(prevCount => prevCount + 1)
}
 

    return (
   <div>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button  onClick={()=>setCount(count - 1)}>Decrement</button>
    <div>

    <button  onClick={()=>setCount(initialCount)}>Reset</button>

    </div>
    
   </div>
    
  )
}
