import React from 'react'

import './userOutput.css'

const UserOutput = (props) => {
  return (
    <div className="wrapper" style={{backgroundColor: `${props.location.state.theme}` }}>
      <p>Your Date: {props.location.state.date}</p>
      <h2>Message: {props.location.state.message}</h2>
    </div>
  )
}

export default UserOutput