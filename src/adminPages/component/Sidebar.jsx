import React from 'react'
import './side.css'
const Sidebar = () => {
    return (
        <div>
            <div className="shadow p-3 rounded sidebar-box">
                <div className="rounded " style={{ height: "56px" }}>
                    <div className="d-flex h-100 gap-2 align-items-center">
                        <div className="p-2 d-flex theme1 h-100 rounded col-12 h-100">
                            <div className="bg-white rounded text-center pt-2" style={{ height: "40px", width: "40px", }}>
                                <h6 className='theme1-line' style={{fontSize:"10px"}}>pick <br /> image</h6>
                            </div>
                            <div className="name-box px-2">
                                <h6 className='text-white name-value'>Ademola Oluwasegun <br /><span>Verified <i class="bi bi-check-circle"></i></span></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 ">
                    <h5 className='theme1-line'>Explore </h5>
                    <div className="mt-3 bg-light rounded p-2 col-11 mx-auto shadow-sm" style={{border:"1px solid #3395fdc8"}}>
                        <div className="d-flex gap-2 align-items-center">
                            <div className="theme1 shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: "35px", width: "35px", }}>
                                <i class="bi bi-house-door-fill text-white"></i>
                            </div>
                            <h6 className='theme1-line pt-2'>Dashboard</h6>
                        </div>
                    </div>
                    <div className="bg-light rounded p-2  mx-auto mt-4 shadow-sm">
                        <div className="d-flex gap-2 align-items-center">
                            <div className="theme1 shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: "35px", width: "35px", }}>
                                <i class="bi bi-person-fill"></i>
                            </div>
                            <h6 className='theme1-line pt-2'>Profile</h6>
                        </div>
                    </div>
                    <div className="bg-light rounded p-2 mx-auto mt-4 shadow-sm" >
                        <div className="d-flex gap-2 align-items-center">
                            <div className="theme1 shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: "35px", width: "35px", }}>
                                <i class="bi bi-people-fill"></i>
                            </div>
                            <h6 className='theme1-line pt-2'>Add admin</h6>
                        </div>
                    </div>
                    <div className="bg-light rounded p-2 mx-auto mt-4 shadow-sm" >
                        <div className="d-flex gap-2 align-items-center">
                            <div className="theme1 shadow-sm rounded d-flex align-items-center justify-content-center" style={{ height: "35px", width: "35px", }}>
                                <i class="bi bi-car-front   "></i>
                            </div>
                            <h6 className='theme1-line pt-2'>Booking</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar