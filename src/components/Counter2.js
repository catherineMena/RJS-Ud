import React, {useState} from 'react'

export default function Counter2() {
 
 const[count,setCount]= useState(0);
 const initialCount = 0;
 
    return (
   <div>
    <h1>{count}</h1>
    <button oncClick={()=>setCount(count + 1)}>Increment</button>
    <button  oncClick={()=>setCount(count - 1)}>Decrement</button>
    <div>

    <button  oncClick={()=>setCount(initialCount)}>Reset</button>

    </div>
    
   </div>
    
  )
}
