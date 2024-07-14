import React, { useState, useEffect } from 'react'
import Bluebackground from '../component/Bluebackground'
import axios from 'axios'
import GreetingLabel from '../component/GreetingLabel'
import carOne from '../assets/carIcon1.avif'
const Uploadcar = () => {
    const [userDetails, setuserDetails] = useState('')
    const getUserDetails = async () => {
        let result = await axios.post("http://localhost:5000/member/userDetails", { id: localStorage.cwUser })
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
                <GreetingLabel name={userDetails.firstName} msg={"Start uploading car"} />
                <div className="d-md-flex gap-0 mt-4">
                    <div className="rounded col-md-3 px-4">
                        <h5 className='pt-2 text-white'>Why car image ?</h5>
                        <div className="carImgUpd shadow bg-white p-2 d-flex align-items-center pt-5 pt-md-0" style={{ height: "40vh" }}>
                            <div>
                                <div className="text-center">
                                    <img src={carOne} alt="" className='col-7' style={{ border: "1px solid ", borderStyle: "dashed" }} />
                                    <br />
                                    <button className='btn mt-2 text-white' style={{ border: "1px solid #84A2CF", backgroundColor: "#0E47A1" }}>Uplaod image <i class="bi bi-plus-lg"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded col-md-9 p-0 px-3 px-md-2 mt-2 mt-md-0">
                        <h5 className='text-white d-none d-md-block'>Car information</h5>
                        <h5 className='d-md-none text-center'>Car information</h5>
                        <div className="shadow p-3  bg-white">
                            <div class="form-floating mb-3">
                                <span for="floatingInput">Car name</span>
                                <input type="email" class="form-control" id="floatingInput" placeholder="example:toyota camry" />
                            </div>
                            <div className="d-flex" style={{gap:"10px"}}>
                                <div class="form-floating mb-3 w-100">
                                    <span for="floatingInput">Car name</span>
                                    <input type="email" class="form-control" id="floatingInput" placeholder="example:toyota camry" />
                                </div>
                                <div class="form-floating mb-3 w-100">
                                    <span for="floatingInput">Car name</span>
                                    <input type="email" class="form-control" id="floatingInput" placeholder="example:toyota camry" />
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <span for="floatingInput">Car name</span>
                                <input type="email" class="form-control" id="floatingInput" placeholder="example:toyota camry" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Uploadcar