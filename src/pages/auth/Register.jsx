import React from 'react'
import Navbar from '../../component/Navbar'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import carouselimg1 from '../../img/carousel-1.jpg'
import './auth.css'
import Toplabel from '../../component/Toplabel';
const Register = () => {

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
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/\d/, 'Password must contain at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
            .required('Password is required'),
    });
    return (
        <div>
            {/* <Toplabel/> */}
            <Navbar />
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
                    onSubmit={(values) => {
                        // Handle form submission
                        console.log(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form >

                            <div className="d-md-flex">
                                <div className='px-md-2 w-100'>
                                    <span htmlFor="fullName">First Name:</span> <br/>
                                    <Field type="text" name="firstName" className="w-100 bg-light rounded" style={{height:"50px", border:"2px solid #202C45", outline:"none"}}/>
                                    <ErrorMessage name="firstName" component="div" />
                                </div>
                                <div className='px-md-2 w-100'>
                                    <span htmlFor="lastName">Last Name:</span><br/>
                                    <Field type="text" name="lastName" className="w-100 bg-light rounded" style={{height:"50px", border:"2px solid #202C45", outline:"none"}}/>
                                    <ErrorMessage name="lastName" component="div" />
                                </div>
                            </div>
                            <div className='px-md-2 mt-2'>
                                <span htmlFor="email">Email</span><br />
                                <Field type="email" name="email" className="w-100 bg-light rounded" style={{height:"50px", border:"2px solid #202C45", outline:"none"}}/>
                                <ErrorMessage name="email" component="div" />
                            </div>
                            <div className="d-md-flex mt-2">
                            <div className='w-100 px-md-2'>
                                <span htmlFor="password">Password</span><br />
                                <Field type="password" name="password" className="w-100 bg-light rounded" style={{height:"50px", border:"2px solid #202C45", outline:"none"}}/>
                                <ErrorMessage name="password" component="div" />
                            </div>
                            <div className='w-100 px-md-2 mt-2 mt-md-0'>
                                <span htmlFor="password">Confirm password</span><br />
                                <Field type="password" className="w-100 bg-light rounded" style={{height:"50px", border:"2px solid #202C45", outline:"none"}} />
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