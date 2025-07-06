import React from 'react'
import './input.css'
const Input = ({placeholder, required,onChange, value, type}) => {
  return (
    <input onChange={onChange} 
    required={required} 
    value={value} 
    placeholder={placeholder}
    type={type}
    className="ui_input" 
    />
  )
}

export default Input