import React from 'react'

function Useroutput(props) {
  const paraStyle = {
    color: 'red',
    fontSize: '3rem',
    padding: '10px',
  }; 
  const para2Style = {
    color: 'black',
    fontSize: '2rem',
    padding: '10px',
  };
 
  return (
    <div>
      <p style={paraStyle}>UserName: {props.username}</p>
      <p style={para2Style}>Address: {props.address}</p>
      </div>
  )
}

export default Useroutput
