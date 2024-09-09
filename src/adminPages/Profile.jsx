import React from 'react'
import Sidebar from './component/Sidebar'
import Welcome from './component/Welcome'

const AdminProfile = () => {
    return (
        <div>
            <div className="d-flex admindash profile-page">
                <Sidebar />
                <div className='admin-view '>
                    <Welcome page={'Profile'} />
                    <div className="mt-2 p-2"></div>
                    <div className='mt-5 pt-5 px-2'>
                        <div className="shadow p-3 pt-5 mt-5 bg-white col-7 rounded">
                            <div className="d-flex gap-0 p-0 px-0">
                            <div className="shadow profile-pic d-flex align-items-center justify-content-center">
                                <i class="bi bi-person-fill text-white "></i>
                            </div>
                            <div className="camera-holder rounded px-1  border">
                                <h6 className='bi bi-camera fs-4 text-white'></h6>

                            </div>
                            </div>
                            <h6 className='mt-4 border-bottom text-center'>Your details</h6>
                            <div className='mt-3'>
                                <span>Firstname</span>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mt-2">
                                <span>Last name</span>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="mt-2">
                                <span>Email</span>
                                <input type="text" className='form-control' />
                            </div>

                            <button className="btn btn-primary mt-2">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile