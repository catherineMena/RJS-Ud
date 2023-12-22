import React from 'react'

export default function Employee(props) {
    const {name,gender,country,age} = props
    return (
      <div>
        {/* <h2>{employees.name}</h2>
<h2>{employees.gender}</h2>
<h2>{employees.country}</h2>
<h2>{employees.age}</h2> */}

        <h2>{`Name:${name} Gender:${gender} Country:${country} Age:${age}`}</h2>
      </div>
    );
}
