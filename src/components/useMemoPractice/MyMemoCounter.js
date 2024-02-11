import React, { useState, useMemo } from "react";

export default function MyMemoCounter() {
  const [counterA, SetCounterA] = useState(0);
  const [counterB, SetCounterB] = useState(0);

  const incrementA = () => {
    SetCounterA(counterA + 1);
  };

  const incrementB = () => {
    SetCounterB(counterB + 2);
  };


  const evenNumber = useMemo(
    //1. return fuction whose value need to be calculated
    (result)=>{
    let i = 0
    while(i<2000000000) i++
    result = counterA %  2 === 0
    return result


     },
     //2.dependency array, tp get fire up
     [counterA] )

  //slow function



  return (
    <div>
      <div>
        <p>counter A is : {counterA} and it is {evenNumber ? "even" : "odd"} </p>
        <button onClick={incrementA}>Increment A</button>
      </div>

      <div>
        <p>counter B is : {counterB}</p>
        <button onClick={incrementB}>Increment B</button>
      </div>
    </div>
  );
}
