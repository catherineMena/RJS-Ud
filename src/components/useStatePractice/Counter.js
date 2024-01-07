//Hook sintax
import React, {useState} from 'react'

export default function Counter() {
//array destructuring
    //variable   function
    const [count,setCount] = useState (0)


    //useState hook is to give an initial value to a variable

  return (
    //Topic:useStateHooks
    <div >

        <h1>counter is: {count}</h1>
    <button onClick={()=>setCount(count + 1)}>Counter Button</button>
    </div>
  )
}

