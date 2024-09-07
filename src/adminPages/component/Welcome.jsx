import React from 'react'

const Welcome = ({page}) => {
  return (
    <div className='theme1 px-3 pt-4 welcome-box'>
    <h4 className='text-white'>Welcome Back, Ademola</h4>
    <h6>/ {page} /</h6>
</div>
  )
}

export default Welcome