import React, { useState, useEffect } from 'react'
import Navbar from '../../component/Navbar'
import Loading from '../../component/Loading'
import carouselimg1 from '../../img/carousel-1.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
const Resetpassword = () => {
    const [loading, setloading] = useState(false)
    const [email, setemail] = useState('')

    const [box, setbox] = useState('email')
    const sendCode = () => {
        if (!email) {
            toast.error("Email cannot be empty")
        } else {
            axios.post('http://localhost:5000/member/sendcode', { email }).then((res) => {
                if (!res.data.status) {
                    toast.error(res.data.msg)
                } else {
                    toast.success(res.data.msg)
                    setbox('code')
                }
            })

        }

    }
    return (
        <div>
            {loading ? <Loading msg={"Login-in"} /> : null}
            {/* <Toplabel/> */}
            <Navbar />
            <div className="d-md-flex register-box">
                <div className='card col-md-6 p-0 border-0 '>
                    <div className="cover d-flex justify-content-center align-items-center">
                        <h2 className='text-white'>Forgoten password !</h2>
                    </div>
                    <img src={carouselimg1} alt="" />
                </div>
                <div className='shadow card col-12 col-md-6 border-0 p-1 p-md-4 inp-holder'>

                    <div className={box=="email"?"d-block":"d-none"}>
                        <h4 className=' fw-bold text-secondary text-cener text-md-end'>Reset password</h4>
                        <div className='px-md-2 mt-2'>
                            <span htmlFor="email">Enter your Email</span><br />
                            <input type="email" name="email" placeholder='example@gmail.com' className="w-100 bg-light rounded px-2" style={{ height: "50px", border: "2px solid #202C45", outline: "none" }} onChange={(e) => { setemail(e.target.value) }} />
                        </div>

                        <div className="col-12 p-2 text-end">
                            <button className='btn btn-success p-2 col-md-3 col-6' onClick={sendCode} style={{ borderRadius: "30px", height: "50px" }}>Send code <i class="bi bi-arrow-right"></i></button>
                        </div>

                    </div>

                    <div className={box=="code"?"d-block":"d-none"}>
                        <div className="d-flex px-2 justify-content-between">
                            <h6 style={{cursor:"pointer"}} onClick={()=>{setbox('email')}}>Back</h6>
                            <h4 className=' fw-bold text-secondary text-cener text-md-end'>Input code</h4>
                        </div>
                        <div className='px-md-2 mt-2'>
                            <span htmlFor="email">Enter code</span><br />
                            <input type="text" placeholder='code in here' className="w-100 bg-light rounded px-2" style={{ height: "50px", border: "2px solid #202C45", outline: "none" }} />
                        </div>

                        <div className="col-12 p-2 text-end">
                            <button className='btn btn-success p-2 col-md-3 col-6' onClick={sendCode} style={{ borderRadius: "30px", height: "50px" }}>Submit code <i class="bi bi-arrow-right"></i></button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resetpassword