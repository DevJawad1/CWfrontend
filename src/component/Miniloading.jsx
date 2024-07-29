import React from 'react'

const Miniloading = ({msg}) => {
  return (
    <div>
    <div className="loader21">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h6 className='text-center mt-3'>{msg}</h6>
    </div>
  )
}

export default Miniloading