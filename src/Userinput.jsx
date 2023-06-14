import React from 'react'

function Userinput(props) {
    const inputStyle = {
        backgroundColor: '#eee',
        color: 'Black',
        fontSize: '20px',
        padding: '10px',
        borderRadius:"2rem"
      };

    return (
        <div>
           <input type="text" name="" id="" onChange={props.change} value={props.value} style={inputStyle} />
        </div>
    )
}

export default Userinput