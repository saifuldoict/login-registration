import React from 'react'
import Spinner from './Spinner'
const LoadingButton = ({loading,title}) => {
  return (
    <div className='auth_inner'>
        <span>
        {loading?'please wait...':title}
        {loading && <Spinner />}
        </span>

    </div>
  )
}

export default LoadingButton