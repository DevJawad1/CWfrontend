import React, { useState, useEffect } from 'react'
import Bluebackground from '../component/Bluebackground'
import axios from 'axios'
import GreetingLabel from '../component/GreetingLabel'
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
                <div className="d-md-flex gap-0">
                    <div className="rounded col-4 px-2">
                        <div className="shadow p-3"></div>
                    </div>
                    <div className="rounded col-8 px-2">
                        <div className="shadow p-3"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Uploadcar