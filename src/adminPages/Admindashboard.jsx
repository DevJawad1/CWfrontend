import React from 'react'
import Sidebar from './component/Sidebar'
import './dash.css'
import axios from 'axios'
const Admindashboard = () => {
    axios.post('')
    return (

        <div>
            <div className="d-flex admindash">
                <Sidebar />
                <div className='admin-view '>
                    <div className='theme1 px-3 pt-4 welcome-box'>
                        <h4 className='text-white'>Welcome Back, Ademola</h4>
                        <h6>/ Dashboard /</h6>
                    </div>
                    <div className='mt-5 pt-5'>
                        <div className="d-flex mt-2">
                            <div className="col-4 px-2">
                                <div className="shadow bg-white rounded p-2">
                                    <h6>Booked car</h6>
                                    <h5>Booking from 2 user</h5>

                                    <div className="d-flex gap-1 w-100">
                                        <div className="shadow-sm rounded col-6 p-2">
                                            <h6>Jawad Adekanbi</h6>
                                            <div className="rounded theme1" style={{ height: "38px", width: "40px", }}></div>
                                        </div>
                                        <div className="shadow-sm rounded col-6 p-2">
                                            <h6>Adex logistic</h6>
                                            <div className="rounded theme1" style={{ height: "38px", width: "40px", }}></div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <h6 className='text-success'>Assign staff </h6>
                                        <i class="bi bi-arrow-right-short text-success"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div className="shadow bg-white p-2 rounded">
                                    <h6>Payment</h6>
                                    <h5>Payment from 3 user</h5>
                                    <div className="d-flex gap-1 w-100">
                                        <div className="shadow-sm rounded col-6 p-2">
                                            <h6>Jawad Adekanbi</h6>
                                            <h6>Paid ₦100</h6>
                                            Type: Renew mem...
                                        </div>
                                        <div className="shadow-sm rounded col-6 p-2">
                                            <h6>Adex logistic</h6>
                                            <h6>Paid ₦100</h6>
                                            Type: Get mem...
                                        </div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <h6 className='text-success'>Assign staff </h6>
                                        <i class="bi bi-arrow-right-short text-success"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 px-2">
                                <div className="shadow bg-white p-2 rounded">
                                    <h6></h6>
                                    <h6>Do you want to restric booking</h6>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-danger">Yes</button>
                                    </div>
                                    <h6 className='pt-2'>Why ?</h6>

                                    <div className="mt-2 d-flex gap-2">
                                        <h6 className='bg-light shadow-sm p-2 w-100'>No staff available</h6>
                                        <h6 className='bg-light shadow-sm p-2 w-100'>Other</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admindashboard