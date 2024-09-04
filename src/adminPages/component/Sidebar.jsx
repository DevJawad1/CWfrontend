import React from 'react'
import './side.css'
const Sidebar = () => {
    return (
        <div>
            <div className="shadow p-3 rounded position-absolute h-100 sidebar-box">
                <div className="rounded " style={{ height: "56px" }}>
                    <div className="d-flex h-100 gap-2 align-items-center">
                        <div className="p-2 d-flex theme1 h-100 rounded col-12 h-100">
                            <div className="bg-white rounded" style={{ height: "40px", width: "40px", }}></div>
                            <div className="name-box px-2">
                                <h6 className='text-white name-value'>Ademola Oluwasegun <br /><span>Verified <i class="bi bi-check-circle"></i></span></h6>
                            </div>
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar