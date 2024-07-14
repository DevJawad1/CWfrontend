import React from 'react'

const GreetingLabel = ({name , msg}) => {
  return (
    <div className="d-flex justify-content-between px-3">
    <div className="p-0 pt-2 col-md-5">
      <div className="card bg-primary col-2 col-md-1" style={{ height: "50px", borderRadius: "50%" }}></div>
      <div>
        <h3 className='greeting text-white pt-3'>{name|| "Loading..."}, <br />{msg}</h3>
      </div>
    </div>
    <div className="text-white d-flex pt-2" style={{ gap: "10px" }}>
      <i class="bi bi-bell-fill"></i>
      <i class="bi bi-gear-fill"></i>
    </div>
  </div>
  )
}

export default GreetingLabel