import React, { useState } from 'react';
import Navbar from '../../component/Navbar';
import Loading from '../../component/Loading';
import carouselimg1 from '../../img/carousel-1.jpg';
import { toast } from 'react-toastify';
import PinInput from 'react-pin-input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Resetpassword = () => {
    const [loading, setloading] = useState(false);
    const [email, setemail] = useState('');
    const [box, setbox] = useState('email');
    const [otp, setOtp] = useState('');

    const navigate = useNavigate()
    // Function to send OTP code to the email
    const sendCode = () => {
        if (!email) {
            toast.error("Email cannot be empty");
        } else {
            axios.post('https://cw-backend-five.vercel.app/member/sendcode', { email }).then((res) => {
                if (!res.data.status) {
                    toast.error(res.data.msg);
                } else {
                    toast.success(res.data.msg);
                    setbox('code');
                }
            }).catch((error) => {
                console.error("Error sending code:", error);
                toast.error("Something went wrong.");
            });
        }
    };

    // Function to handle OTP submission
    const submitOTP = () => {
        if (otp.length !== 6) {
            toast.error("Please enter a valid 6-digit code.");
        } else {
            axios.post('https://cw-backend-five.vercel.app/member/verifycode', { email, otp, type:"Reset password" }).then((res) => {
                if (res.data.status) {
                    toast.success("OTP verified successfully");
                    setbox("reset")
                } else {
                    toast.error(res.data.msg);
                }
            }).catch((error) => {
                console.error("Error verifying OTP:", error);
                toast.error("Failed to verify OTP.");
            });
        }
    };

    const handleOtpChange = (otp) => {
        setOtp(otp);
    };


    const [ps1, setps1] = useState('')
    const [ps2, setps2] = useState('')
    const [psMode, setpsMode] = useState('Show')

    const psChanger=()=>{
        if(psMode=='Show'){
            setpsMode("Hide")
        }else{
            setpsMode("Show")
        }
    }

    const setNewPassword=()=>{

        if(ps1!==ps2){
            toast.error('Password mismatch')
        }else{
            axios.post("https://cw-backend-five.vercel.app/member/resetpassword", {email, ps1}).then((res)=>{
            if(res.data.status){
                toast.success(res.data.msg)
                navigate('/login')
            }else{
                toast.error(res.data.msg)
            }
        })   
        }
       
    }
    return (
        <div>
            {loading ? <Loading msg={"Loading..."} /> : null}
            <Navbar />
            <div className="d-md-flex register-box">
                <div className='card col-md-6 p-0 border-0 '>
                    <div className="cover d-flex justify-content-center align-items-center">
                        <h2 className='text-white'>Forgotten password!</h2>
                    </div>
                    <img src={carouselimg1} alt="" />
                </div>
                <div className='shadow card col-12 col-md-6 border-0 p-1 p-md-4 inp-holder'>
                    {/* Email Input Box */}
                    <div className={box === "email" ? "d-block" : "d-none"}>
                        <h4 className='fw-bold text-secondary text-cener text-md-end'>Reset password</h4>
                        <div className='px-md-2 mt-md-5 mt-3'>
                            <span htmlFor="email">Enter your Email</span><br />
                            <input type="email" name="email" placeholder='example@gmail.com' className="w-100 bg-light rounded px-2" style={{ height: "50px", border: "2px solid #202C45", outline: "none" }} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="col-12 p-2 text-end">
                            <button className='btn btn-success p-2 col-md-3 col-6' onClick={sendCode} style={{ borderRadius: "30px", height: "50px" }}>
                                Send code <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    {/* OTP Input Box */}
                    <div className={box === "code" ? "d-block" : "d-none"}>
                        <div className="d-flex px-2 justify-content-between">
                            <h6 style={{ cursor: "pointer" }} onClick={() => setbox('email')}>Back</h6>
                            <h4 className='fw-bold text-secondary text-cener text-md-end'>Input code</h4>
                        </div>
                        <div className='text-center mt-md-5 mt-4'>
                            <PinInput
                                length={6}
                                initialValue=""
                                onChange={(value) => setOtp(value)}
                                type="numeric"
                                inputStyle={{ borderColor: '#202C45',border: "2px solid", borderRadius:"5px " }}
                                inputFocusStyle={{ borderColor: 'green' }}
                                onComplete={(value) => console.log(value)}  // Handle the OTP completion
                            />
                        </div>
                        <div className="col-12 p-2 text-center mt-2">
                            <button className='btn btn-success p-2 col-6' onClick={submitOTP} style={{ borderRadius: "25px", height: "50px" }}>
                                Submit code <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>


                    <div className={box=="reset"?"d-block":"d-none"}>
                        <div className="d-flex justify-content-between">
                        <h6 onClick={psChanger} style={{cursor:"pointer"}}>{psMode} password</h6>
                        <h4 className='fw-bold text-secondary text-cener text-md-end'>Reset password</h4>

                        </div>

                    <input type={psMode=='Show'?"password":"text"} placeholder='New password' className="w-100 bg-light rounded px-2" style= {{ height: "50px", border: "2px solid #202C45", outline: "none" }} onChange={(e) => setps1(e.target.value)} />

                    <input type={psMode=='Show'?"password":"text"} placeholder='Confirm password' className="w-100 bg-light rounded px-2 mt-2" style={{ height: "50px", border: "2px solid #202C45", outline: "none" }} onChange={(e) => setps2(e.target.value)} />
                    <div className="col-12 p-2 text-center mt-2">
                            <button className='btn btn-success p-2 col-8' onClick={setNewPassword} style={{ borderRadius: "25px", height: "50px" }}>
                                Set password
                            </button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Resetpassword;
