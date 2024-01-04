//useState hook import
import React, { useState } from "react";

export default function FormInput() {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [skill, setSkill] = useState("React js");

  console.log(name)

const handleSubmit = (evt) =>{
evt.preventDefault ()
alert(`${name} ${address} ${skill}`)

}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          {/*to convert control input
                -import hook

                 */}
          <input
            type="text"
            value={name}
            // to update the value when the state changes

            //setName is the function to use to update the initial state
            onChange={(e) => setName(e.target.value)}
            //sintax to grab the value e.target.value
          />
        </label>
        </div>

        <div>
          <label>
            Adress:
            <input
              type="text"
              value={address}
              onChange={(e) => setAdress(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Skill
            <select value={skill} onChange={(e) => setSkill(e.target.value)}>
              <option value="react"> React js </option>
              <option value="angular"> Angular </option>
              <option value={"vue"}>Vue js </option>
              
            </select>
          </label>
        </div>

        <div>
          <button type='submit' value='submit'>Submit Button</button>
        </div>
     
    </form>
  );
}
