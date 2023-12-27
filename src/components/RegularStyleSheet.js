import React from 'react'
import '../components/myStyles.css'

export default function RegularStyleSheet(props) {
  const className =  props.primary ? 'primary' : 'secondary'
  
  return (
    <div>

      <h1 className={className}>Let's style this!!</h1>

    </div>
  )
}
