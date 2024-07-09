import React, { useState } from 'react'
import Navbar from '../../component/Navbar'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import carouselimg1 from '../../img/carousel-1.jpg'
import './auth.css'
import Toplabel from '../../component/Toplabel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {   
    const navigate= useNavigate()
    const SignUpSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    });

    const [loading, setloading] = useState(false)
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
        setloading(true)
        const response = await axios.post('http://localhost:5000/member/loginMember', values);
        console.log('Form submitted successfully:', response.data);
        // Handle success (e.g., display a success message, redirect, etc.)
        if(response.data.status){
            toast.success(response.data.message);
            setTimeout(() => {
                navigate("/dashboard")
            }, 1000);
        }else{toast.error(response.data.message);}
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error(error.message)
      } finally {
        setSubmitting(false);
        setloading(false)
      }
    }
    return (
        <div>
            {/* <Toplabel/> */}
            <Navbar />
            <div className="d-md-flex register-box">
            <div className='card col-md-6 p-0 border-0 '>
                <div className="cover d-flex justify-content-center align-items-center">
                    <h2 className='text-white'>Welcome Back !</h2>
                </div>
                <img src={carouselimg1} alt=""/>
            </div>
            <div className='shadow card col-12 col-md-6 border-0 p-1 p-md-4 inp-holder'>
                <h3 className=' fw-bold text-secondary text-cener text-md-end'>Login now</h3>
                <Formik
                    initialValues={{ email: '', fullName: '', password: '' }}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form >
                            <div className='px-md-2 mt-2'>
                                <span htmlFor="email">Email</span><br />
                                <Field type="email" name="email" className="w-100 bg-light rounded" style={{height:"50px", border:"2px solid #202C45", outline:"none"}}/>
                                <ErrorMessage name="email" component="div" />
                            </div>
                            <div className='w-100 px-md-2 mt-2'>
                                <span htmlFor="password">Password</span><br />
                                <Field type="password" name="password" className="w-100 bg-light rounded" style={{height:"50px", border:"2px solid #202C45", outline:"none"}}/>
                            </div>
                            <h5 className='px-md-2 mt-3'><Link>forgot password ?</Link></h5>
                            <div className="px-0 px-md-2 p-md-0 mt-4 w-100 text-center">
                            <button className='col-6 col-md-3 btn btn-custom pt-2 text-white' type="submit" disabled={isSubmitting} style={{backgroundColor:"#C81C2E", height:"50px", borderRadius:"30px"}}>
                                Login
                            </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            
            </div>
        </div>
    )
}

export default Login