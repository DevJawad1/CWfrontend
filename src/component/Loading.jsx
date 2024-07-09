import React from 'react'
import './loading.css'
const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div>
                <div className="d-flex align-items-center">
                    <div className="d-flex rounded" style={{ fontSize: "23px", fontWeight: "500", backgroundColor: "gold", color: "navy",padding:"2px" }}>
                        <div>GOLD</div>
                    </div>
                    <div className="bounce">
                        <div>W</div>
                        <div>A</div>
                        <div></div>
                        <div></div>
                        <div>S</div>
                        <div>H</div>
                    </div>
                </div>
                <p className='text-center'>Loading...</p>
            </div>
        </div>
    )
}

export default Loading