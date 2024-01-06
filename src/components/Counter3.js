import React, {useState} from 'react'

export default function Counter3() {

    const [employee, setEmployee] = useState({ name:"",country:""})
    
    
  return (


    <div>
<input
 type="text"
value={employee.name}
                        //spread
onChange={(e)=>setEmployee({...employee, name: e.target.value})}
></input>

<input
 type="text"
value={employee.country}
                            //spread
onChange={(e)=>setEmployee({...employee, country: e.target.value})}
></input>

<div>
    <p>my name is : {employee.name}</p>
    <p>I am from : {employee.country}</p>

</div>

{/* to render how is print */}
<p>{JSON.stringify(employee)}</p>


    </div>
  )
}
