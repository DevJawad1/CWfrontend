import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Sidebar from './component/Sidebar';
import Welcome from './component/Welcome';

const Addadmin = () => {

    // Validation schema
    const validationSchema = Yup.object({
        fullName: Yup.string()
            .required('Full name is required'),
        lName: Yup.string()
            .required('Last name is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        verified: Yup.string()
            .required('Please select a verification status')
    });

    // Formik setup
    const formik = useFormik({
        initialValues: {
            fullName: '',
            lName: '',
            email: '',
            verified: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form data', values);
            // Handle form submission here
        },
    });

    return (
        <div>
            <div className="d-flex admindash">
                <Sidebar />

                <div className="admin-view">
                    <Welcome page={"Add admin"} />
                    <div className="d-flex mt-5 pt-5">
                        <div className="add-admin col-4 px-2">
                            <div className="shadow rounded p-4 bg-white">
                                <h6>Total admin: 6</h6>
                                <div className="d-flex gap-2">
                                    <button className='theme1 btn col-12'>View all</button>
                                </div>
                            </div>
                        </div>
                        <div className="all-admin col-8 px-2">
                            <div className="shadow rounded p-2 bg-white">
                                <h6>Add admin</h6>

                                <form onSubmit={formik.handleSubmit} className="input-field px-2">
                                    <div>
                                        <span>First name</span>
                                        <input 
                                            type="text" 
                                            name="fullName"
                                            className="form-control" 
                                            value={formik.values.fullName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.fullName && formik.errors.fullName ? (
                                            <div className="text-danger">{formik.errors.fullName}</div>
                                        ) : null}
                                    </div>
                                    <div className='mt-2'>
                                        <span>Last name</span>
                                        <input 
                                            type="text" 
                                            name="fullName"
                                            className="form-control" 
                                            value={formik.values.lName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.lName && formik.errors.lName ? (
                                            <div className="text-danger">{formik.errors.lName}</div>
                                        ) : null}
                                    </div>
                                    <div className="mt-2">
                                        <span>Email</span>
                                        <input 
                                            type="text" 
                                            name="email"
                                            className="form-control"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="text-danger">{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="mt-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <h6>Verified:</h6>
                                            <div className="d-flex w-50 gap-2">
                                                <label className="p-2 rounded border col-3">
                                                    <input 
                                                        type="radio" 
                                                        name="verified"
                                                        value="Yes"
                                                        checked={formik.values.verified === 'Yes'}
                                                        onChange={formik.handleChange}
                                                    />
                                                    <span className="ms-2">Yes</span>
                                                </label>
                                                <label className="p-2 rounded border col-3">
                                                    <input 
                                                        type="radio" 
                                                        name="verified"
                                                        value="No"
                                                        checked={formik.values.verified === 'No'}
                                                        onChange={formik.handleChange}
                                                    />
                                                    <span className="ms-2">No</span>
                                                </label>
                                            </div>
                                            {formik.touched.verified && formik.errors.verified ? (
                                                <div className="text-danger">{formik.errors.verified}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="mt-3 text-end">
                                        <button 
                                            type="submit" 
                                            className='border-0 p-2 col-4 rounded text-white' 
                                            style={{backgroundColor:"#5FACFD"}}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Addadmin;
