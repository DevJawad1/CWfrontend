import React, { useState, useEffect } from 'react'
import Bluebackground from '../component/Bluebackground'
import GreetingLabel from '../component/GreetingLabel'
import axios from 'axios'
import Miniloading from '../component/Miniloading'
import { toast } from 'react-toastify'
const Plan = () => {
    const [miniloading, setminiloading] = useState(false)
    const [userDetails, setuserDetails] = useState('')
    const [planStatus, setplanStatus] = useState('')

    const [bank, setbank] = useState('')
    const getUserDetails = async () => {
        let result = await axios.post("https://cw-backend-five.vercel.app/member/userDetails", { id: localStorage.cwUser })
        // console.log(result);
        setuserDetails(result.data.user)
    }
    useEffect(() => {
        getUserDetails()
    }, [])

    const [loadingtype, setloadingtype] = useState('')
    const generateAccount = (price) => {
        setminiloading(true)
        setplanStatus(price)
        setloadingtype("Generating account")
        axios.post("https://cw-backend-five.vercel.app/member/virtualaccount", { userid: localStorage.cwUser, collectAmount: price, planType: "Get membership" }).then((response) => {
            console.log(response);
            if(response.data.status){
                setbank(response.data.bank)
            }else{
                setbank("No account")
                setloadingtype(response.data.msg)
                toast.error(response.data.msg)
            }
            setminiloading(false)
        })
    }

    const verifyPayment = (tx_ref) => {
        setminiloading(true)
        setloadingtype("Verifying Payment")
        setTimeout(() => {
            axios.post("https://cw-backend-five.vercel.app/member/verifyPayment", { tx_ref: tx_ref, userid: localStorage.cwUser }).then(response => {
                setminiloading(false)
                if (response.data.status) {
                    toast.success(response.data.msg)
                } else {
                    toast.error(response.data.msg)
                }

            }).catch((err) => {
                console.log(err);

            });
        }, 75000)
    }


    const [stopFunction, setStopFunction]= useState(false)
    const verifyPayment2=(tx_ref)=>{
        axios.post("https://cw-backend-five.vercel.app/member/verifyPayment",{tx_ref:tx_ref, userid:localStorage.cwUser}).then(response=>{
            if(response.data.status){
                toast.success(response.data.msg)
                setStopFunction(true)
            }

        }).catch((err)=>{
            console.log(err);
        })    
    }
    return (

        <div>
            // ae 93
            <Bluebackground />
            <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
                <GreetingLabel msg={"Choose your plan"} />
                {
                    !planStatus ?
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
                                            <h3>₦100</h3>
                                            <div className="d-flex">
                                                <h6 className='text-success' onClick={() => { generateAccount(100) }}>Get plan </h6>
                                                <i class="bi bi-arrow-right-short text-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* https://www.addic7ed.com/movie/177395 */}

                                    <div className="w-100 mt-2 mt-md-0 px-1">
                                        <div className="bg-light h-100 rounded p-2 shadow">
                                            <div className="d-flex justify-content-between w-100">
                                                <h6>1 special feature</h6>
                                                <div className="border col-1 d-flex justify-content-center align-items-center bg-success text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                                                    <span class="bi bi-arrow-right-short"></span>
                                                </div>
                                            </div>
                                            <h3>₦500</h3>
                                            <div className="d-flex">
                                                <h6 className='text-success' onClick={() => { generateAccount(500) }}>Get plan</h6>
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
                                            <h3>₦1,000</h3>
                                            <div className="d-flex">
                                                <h6 className='text-success' onClick={() => { generateAccount(1000) }}>Get plan </h6>
                                                <i class="bi bi-arrow-right-short text-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 col-md-12 px-3">
                                    <div className="d-md-flex" style={{ gap: "10px" }}>
                                        <div className="shadow p-2 bg-white w-100 rounded">
                                            <div className="d-flex align-items-center justify-content-between" style={{ gap: "5px" }}>
                                                <h3 className='pt-2'>Request for a VIP member</h3>
                                                <button className='btn text-white' style={{ backgroundColor: "#0E47A1" }}>Go </button>
                                            </div>
                                        </div>
                                        <div className="shadow mt-2 mt-md-0 p-2 bg-white w-100 rounded">
                                            <div className="d-flex align-items-center justify-content-between" style={{ gap: "5px" }}>
                                                <h3 className='pt-2'>Get a discout</h3>
                                                <button className='btn text-white' style={{ backgroundColor: "#0E47A1" }}>Go </button>
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
                                    <h1 class="bi bi-person-circle text-center" style={{ fontSize: "150px", color: "#0E47A1" }}></h1>
                                    <div className="d-flex">
                                        <h6 className='text-success text-center'>Upload profile pic </h6>
                                        <i class="bi bi-arrow-right-short text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="d-flex text-white gap-1 px-1 px-md-4" onClick={() => { setplanStatus('') }}>
                                <i class="bi bi-arrow-left-short"></i>
                                <h6 className='text-white'>Go back</h6>
                            </div>
                            <div className='d-md-flex p-0 mx-md-3 mt-1'>
                                <div className='col-12 col-md-6 px-2'>
                                    {
                                        !miniloading ?
                                            bank!=="No account"?
                                            <div className="bg-white p-4 shadow w-100">
                                                <h5>Payment </h5>
                                                <div>
                                                    <h6> <span className='text-danger'>Note: </span> You are to pay this amount <span className='text-primary fw-semibold'>₦{planStatus}</span> to the account below </h6>
                                                    <div className="d-flex align-items-center" style={{ gap: "5px" }}>
                                                        <h4>{bank.accountNumber || "loading"}</h4>
                                                        <h6>{bank.bankName || "loading"}</h6>
                                                    </div>
                                                    <h6>Expired in next one hour time : {bank.expire_date}</h6>
                                                    <h6>Click the button after you have make payment</h6>

                                                    <div className="d-flex justify-content-between">
                                                        <button className='btn btn-success' onClick={() => { verifyPayment(bank.tx_ref) }}>I have paid</button>
                                                        <button className='btn btn-success ' style={{ visibility: "hidden" }} onClick={!stopFunction ? verifyPayment2(bank.tx_ref) : null}>I have paid</button>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className='bg-white  p-4 shadow w-100'>
                                                <h6 className='text-danger'>{loadingtype}</h6>
                                                <button className='btn btn-success'>View plan</button>
                                            </div>
                                            :
                                            <div className='bg-white p-4 shadow w-100 ' style={{ height: "210px" }}>
                                                <Miniloading msg={loadingtype} />
                                            </div>
                                    }
                                </div>
                                <div className='col-12 col-md-6 px-2'>

                                    <div className="bg-white p-4 shadow w-100 mt-3 mt-md-0 ">
                                        <h5>I want to link my card </h5>
                                        <div>
                                            <h6> <span className='text-danger'>Select: </span>Choose the card you are using </h6>
                                            <h4>9152280668</h4>
                                            <h6>Click the button after you have make payment</h6>
                                            <button className='btn btn-success'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>

    )
}

export default Plan
