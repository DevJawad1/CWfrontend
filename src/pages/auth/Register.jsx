import React, { useState } from 'react'

// install
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// file
import Navbar from '../../component/Navbar'
import carouselimg1 from '../../img/carousel-1.jpg'
import './auth.css'
import axios from 'axios';
import Loading from '../../component/Loading';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate= useNavigate()
    const SignUpSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(25, 'Too Long!')
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(25, 'Too Long!')
            .required('Last name is required'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 11 digits')
            .required('Phone number is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/\d/, 'Password must contain at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
            .required('Password is required'),
    });

    // @Cds52923#
    const [loading, setloading] = useState(false)
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
        setloading(true)
        const response = await axios.post('http://localhost:5000/member/register', values);
        console.log('Form submitted successfully:', response.data);
        // Handle success (e.g., display a success message, redirect, etc.)
        if(response.data.status){
            toast.success(response.data.message);
            setTimeout(() => {
                navigate("/login")
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
            {loading?<Loading/>:null}
            <div className="d-md-flex register-box">
            <div className='card col-md-6 p-0 border-0 '>
                <div className="cover d-flex justify-content-center align-items-center">
                    <h2 className='text-white'>Be part of membership</h2>
                </div>
                <img src={carouselimg1} alt=""/>
            </div>
            <div className='shadow card col-12 col-md-6 border-0 p-1 p-md-4 inp-holder'>
                <h3 className=' fw-bold text-secondary text-cener text-md-end'>Register an account</h3>
                <Formik
                    initialValues={{ email: '', fullName: '', password: '' }}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSubmit}
                    // (values) => {
                    //     // Handle form submission
                    //     console.log(values);
                    // }
                >
                    {({ isSubmitting, touched, errors }) => (
                        <Form >
                            {/* ${touched.firstName && errors.firstName ? 'is-invalid' : ''} */}
                            <div className="d-md-flex">
                                <div className='px-md-2 w-100'>
                                    <span htmlFor="fullName">First Name:</span> <br/>
                                    <Field type="text" name="firstName" className="w-100 bg-light rounded" style={{height:"50px", border:touched.firstName && errors.firstName ? '2px solid #DC3747' : '2px solid #202C45', outline:"none"}}/>
                                    <ErrorMessage name="firstName" component="div" className='text-danger'/>
                                </div>
                                <div className='px-md-2 w-100 mt-2 mt-md-0'>
                                    <span htmlFor="lastName">Last Name:</span><br/>
                                    <Field type="text" name="lastName" className="w-100 bg-light rounded" style={{height:"50px", border:touched.lastName && errors.lastName ? '2px solid #DC3747' : '2px solid #202C45', outline:"none"}}/>
                                    <ErrorMessage name="lastName" component="div" className='text-danger'/>
                                </div>
                            </div>
                            <div className='px-md-2 mt-2'>
                                <span htmlFor="email">Phone number</span><br />
                                <Field type="number" name="phone" className="w-100 bg-light rounded" style={{height:"50px", border:touched.phone && errors.phone ? '2px solid #DC3747' : '2px solid #202C45', outline:"none"}}/>
                                <ErrorMessage name="phone" component="div" className='text-danger'/>
                            </div>
                            <div className='px-md-2 mt-2'>
                                <span htmlFor="email">Email</span><br />
                                <Field type="email" name="email" className="w-100 bg-light rounded" style={{height:"50px", border:touched.email && errors.email ? '2px solid #DC3747' : '2px solid #202C45', outline:"none"}}/>
                                <ErrorMessage name="email" component="div" className='text-danger'/>
                            </div>
                            <div className="d-md-flex mt-2">
                            <div className='w-100 px-md-2'>
                                <span htmlFor="password">Password</span><br />
                                <Field type="password" name="password" className="w-100 bg-light rounded" style={{height:"50px", border:touched.password && errors.password ? '2px solid #DC3747' : '2px solid #202C45', outline:"none"}}/>
                                <ErrorMessage name="password" component="div"className='text-danger' />
                            </div>
                            <div className='w-100 px-md-2 mt-2 mt-md-0'>
                                <span htmlFor="password">Confirm password</span><br />
                                <input type="password" className="w-100 bg-light rounded" style={{height:"50px", border:"2px solid #202C45", outline:"none"}} />
                            </div>

                            </div>
                            <div className="px-0 px-md-2 p-md-0 mt-4 w-100 text-center">
                            <button className='col-6 col-md-3 btn btn-custom pt-2 text-white' type="submit" disabled={isSubmitting} style={{backgroundColor:"#C81C2E", height:"50px", borderRadius:"30px"}}>
                                Sign Up
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

export default Register