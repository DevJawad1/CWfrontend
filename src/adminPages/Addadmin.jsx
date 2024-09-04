import React from 'react'

const Addadmin = () => {
    return (
        <div className="d-flex mt-5 pt-5 align-items-center">
            <div className="add-admin col-4 px-2">
                <div className="shadow rounded p-4 bg-white">
                    <h6 className='px-'>Action for admin</h6>
                    <div className="d-flex gap-2">
                        <button className='theme1 btn '>Add admin</button>
                        <button className='btn btn-danger '>Delete admin</button>
                    </div>
                </div>
            </div>
            <div className="all-admin col-8 px-2">
                <div className="shadow rounded p-2 bg-white">
                    <h6>Total admin: 6</h6>
                    <h6>You are the only admin</h6>
                </div>
            </div>
        </div>

    )
}

export default Addadmin