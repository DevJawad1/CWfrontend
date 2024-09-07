import React from 'react'
import Sidebar from './component/Sidebar'
import Welcome from './component/Welcome'

const AdminProfile = () => {
    return (
        <div>
            <div className="d-flex admindash">
                <Sidebar />
                <div className='admin-view '>
                    <Welcome page={'Profile'} />
                    <div className='mt-5 pt-5 px-2'>
                        <div className="shadow p-2 bg-white col-6 rounded">
                            
                            {/* <div class="form-floating">
                                <input type="password" class="form-control border" id="floatingPasswor" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile