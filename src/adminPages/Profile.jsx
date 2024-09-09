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
                    <div className='mt-5 pt-5 px-2'>
                        <div className="shadow p-2 bg-white col-6 rounded">
                            <div className="shadow-sm profile-pic">
                                <i class="bi bi-person-fill"></i>
                            </div>
                            <div>
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