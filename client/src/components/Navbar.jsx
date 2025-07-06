import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around text-center bg-blue-700 p-3.5 text-white'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to ='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        
       
    </div>
  )
}

export default Navbar