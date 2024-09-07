import React from 'react'
import Sidebar from './component/Sidebar'
import Welcome from './component/Welcome'

const Addadmin = () => {
    return (
        <div>
            <div className="d-flex admindash">
                <Sidebar />

                <div className="admin-view ">
                    <Welcome page={"Add admin"} />
                    <div className="d-flex mt-5 pt-5 ">
                        <div className="add-admin col-4 px-2">
                            <div className="shadow rounded p-4 bg-white">
                                <h6 className='px-'>Total admin: 6</h6>
                                <div className="d-flex gap-2">
                                    <button className='theme1 btn col-12'>View all</button>
                                    {/* <button className='btn btn-danger '>Delete admin</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="all-admin col-8 px-2">
                            <div className="shadow rounded p-2 bg-white">
                                <h6>Add admin</h6>

                                <div className="input-field px-2">
                                    <div>
                                        <span>Full name</span>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mt-2">
                                        <span>Email</span>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <h6>Verified:</h6>
                                            <div className="d-flex w-50 gap-2">
                                                <div className="p-2 rounded border col-3">
                                                    <div className="d-flex gap-3 align-items-center">
                                                        <span>Yes</span>
                                                        <i class="bi bi-circle" style={{fontSize:"15px"}}></i>
                                                    </div>
                                                </div>
                                                <div className="p-2 rounded border col-3">
                                                <div className="d-flex gap-3 align-items-center">
                                                        <span>No</span>
                                                        <i class="bi bi-circle" style={{fontSize:"15px"}}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-end">
                                        <button className='border-0 p-2 col-4 rounded text-white' style={{backgroundColor:"#5FACFD"}}>Submit</button>
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

export default Addadmin