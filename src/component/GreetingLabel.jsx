import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
const GreetingLabel = ({ name, msg }) => {
  const [userDetails, setuserDetails] = useState('')
  const getUserDetails = async () => {
    let result = await axios.post("https://cw-backend-five.vercel.app/member/userDetails", { id: localStorage.cwUser })
    console.log(result);
    setuserDetails(result.data.user)
  }

  useEffect(() => {
    getUserDetails()
    // alert(userDetails.firstName)
  }, [])
  return (
    <div className="">
      <div className="d-flex justify-content-between position-fixed w-100" style={{top:"0", backgroundColor:"#0E47A1", zIndex:"1"}}>
        <div className="col-2 col-md-1 pt-2">
          <Sidebar />
        </div>
        <div className="text-white d-flex pt-2 px-3" style={{ gap: "20px", fontSize:"18px" }}>
          <i class="bi bi-bell-fill"></i>
          <i class="bi bi-gear-fill"></i>
        </div>
      </div>
      <div className="p-0 col-md-5 mt-4 pt-2">
        <div className='col-12'>
          <h3 className='greeting text-white pt-3'>{userDetails.firstName || "Loading..."}, <br />{msg}</h3>
        </div>
      </div>

    </div>
  )
}

export default GreetingLabel