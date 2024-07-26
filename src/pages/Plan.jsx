import React, { useState, useEffect } from 'react'
import Bluebackground from '../component/Bluebackground'
import GreetingLabel from '../component/GreetingLabel'
import axios from 'axios'
const Plan = () => {

    const [userDetails, setuserDetails] = useState('')
    const getUserDetails = async () => {
        let result = await axios.post("http://https://cw-backend-five.vercel.app/member/userDetails", { id: localStorage.cwUser })
        console.log(result);
        setuserDetails(result.data.user)
    }
    useEffect(() => {
        getUserDetails()
    }, [])
    return (

        <div>
            <Bluebackground />
            <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
                <GreetingLabel msg={"Choose your plan"} />
                <div className="">
                    <div className='col-md-10 p-0 mx-auto'>
                        <div className="d-md-flex w-100 px-2 mt-3 label">
                            <div className="w-100 mt-2 mt-md-0 px-1">
                                <div className="bg-light h-100 rounded p-2 shadow">
                                    <div className="d-flex justify-content-between w-100">
                                        <h6>No special feature</h6>
                                        <div className="border col-1 d-flex justify-content-center align-items-center bg-primary text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                                            <span class="bi bi-person"></span>
                                        </div>
                                    </div>
                                    <h3>$7.00</h3>
                                    <div className="d-flex">
                                        <h6 className='text-success'>Get plan </h6>
                                        <i class="bi bi-arrow-right-short text-success"></i>
                                    </div>
                                </div>
                            </div>


                            <div className="w-100 mt-2 mt-md-0 px-1">
                                <div className="bg-light h-100 rounded p-2 shadow">
                                    <div className="d-flex justify-content-between w-100">
                                        <h6>1 special feature</h6>
                                        <div className="border col-1 d-flex justify-content-center align-items-center bg-success text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                                            <span class="bi bi-arrow-right-short"></span>
                                        </div>
                                    </div>
                                    <h3>$12.00</h3>
                                    <div className="d-flex">
                                        <h6 className='text-success' onClick={() => { navigate('/uploadcar') }}>Get plan</h6>
                                        <i class="bi bi-arrow-right-short text-success"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="w-100 mt-2 mt-md-0 px-1">
                                <div className="bg-light h-100 rounded p-2 shadow">
                                    <div className="d-flex justify-content-between w-100">
                                        <h6>2 special feature</h6>
                                        <div className="border col-1 d-flex justify-content-center align-items-center bg-primary text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                                            <span class="bi bi-arrow-right-short"></span>
                                        </div>
                                    </div>
                                    <h3>$15.00</h3>
                                    <div className="d-flex">
                                        <h6 className='text-success'>Get plan </h6>
                                        <i class="bi bi-arrow-right-short text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 col-md-12 px-3">
                            <div className="d-md-flex" style={{gap:"10px"}}>
                            <div className="shadow p-2 bg-white w-100 rounded">
                                <div className="d-flex align-items-center justify-content-between" style={{gap:"5px"}}>
                                <h3 className='pt-2'>Request for a VIP member</h3>
                                <button className='btn text-white' style={{backgroundColor:"#0E47A1"}}>Go </button>
                                </div>
                            </div>
                            <div className="shadow mt-2 mt-md-0 p-2 bg-white w-100 rounded">
                                <div className="d-flex align-items-center justify-content-between" style={{gap:"5px"}}>
                                <h3 className='pt-2'>Request for a VIP member</h3>
                                <button className='btn text-white' style={{backgroundColor:"#0E47A1"}}>Go </button>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                       <div className="col-md-4 px-0 mx-auto mt-3">
                        <div className="bg-light col-md-11 h-100 rounded p-2 shadow">
                            <div className="d-flex justify-content-between w-100">
                                <h6>Profile image </h6>
                                <div className="border col-1 d-flex justify-content-center align-items-center bg-primary text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                                    <span class="bi bi-person"></span>
                                </div>
                            </div>
                            <h1 class="bi bi-person-circle text-center" style={{fontSize:"150px", color:"#0E47A1"}}></h1>
                            <div className="d-flex">
                                <h6 className='text-success text-center'>Upload profile pic </h6>
                                <i class="bi bi-arrow-right-short text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Plan
