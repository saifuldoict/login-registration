import React from 'react'
import './button.css'
const Button = ({onClick,type,children}) => {
  return (
    <button onClick={onClick} type={type}
    className="ui_button"
    >
        {children}
        </button>
  )
}

export default Button