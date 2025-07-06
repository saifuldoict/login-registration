import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'


const Contact = () => {
const userInfo=  useContext(AuthContext)
console.log(userInfo)
  return (
    <div>
      <h1>contact</h1>
    </div>
  )
}

export default Contact