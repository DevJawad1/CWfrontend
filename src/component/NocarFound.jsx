import React from 'react'
import noCarImg from '../assets/nocarImg.jpg'
import { useNavigate } from 'react-router-dom'

const NocarFound = ({ load }) => {
    const navigate = useNavigate()
    return (
        <div className='col-12'>
            {
                load ?
                    <div className='bg-white mx-auto m-4 m-md-0 p-2 pt-4 shadow d-flex justify-content-center gap-3'>
                        <h6>Fething your car</h6>
                        <div className="d-flex justify-content-end align-item-center" onClick={() => { navigate('/uploadcar') }}>
                            <h6 className='text-success'>Wait a moment </h6>
                            <i className="bi bi-person-raised-hand text-success"></i>
                        </div>
                    </div>
                    :<div className='bg-white mx-auto m-4 m-md-0 p-4 shadow '>
                            <h6>You have not upload any car</h6>
                            <img src={noCarImg} alt="" className='card col-md-2' />
                            <div className="d-flex pt-2 justify-content-end" onClick={() => { navigate('/uploadcar') }}>
                                <h6 className='text-success'>Start uploading </h6>
                                <i className="bi bi-arrow-right-short text-success"></i>
                            </div>
                    </div>
            }
        </div>
    
  )
}

            export default NocarFound