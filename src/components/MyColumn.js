import React from 'react'

export default function MyColumn() {
  return (

    //td cannit be a child of a div
//     <div>
// <td>Skills</td>
// <td>React js</td>


//     </div>

//solution
//<React.Fragment>


//al;ternative to create a react fragment
<>
<td>Skills</td>
<td>React js</td>
</>
//</React.Fragment>


  )
}
