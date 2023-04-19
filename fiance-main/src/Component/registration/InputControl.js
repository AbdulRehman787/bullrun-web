import React from 'react'
import './style.css'
function InputControl  (props) {
  return (
    <>
    <div className='containe'>
    {props.label &&  <label>{props.label}</label>} <br />
    <input className='input' type="text" {...props} required  />
  </div>
    </>
  )
}

export default InputControl
