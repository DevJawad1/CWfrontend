import React, { useState, useEffect } from 'react';
import Bluebackground from '../component/Bluebackground';
import axios from 'axios';
import GreetingLabel from '../component/GreetingLabel';
import carOne from '../assets/carIcon1.avif';
import Loading from '../component/Loading';
import { toast, ToastContainer } from 'react-toastify';

const Uploadcar = () => {
    const [userDetails, setuserDetails] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setloading] = useState(false);
    const [carName, setcarName] = useState('');
    const [plate, setplate] = useState('');
    const [color, setcolor] = useState('');
    const [location, setlocation] = useState('');

    useEffect(()=>{
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 2000);
    },[])

    const getUserDetails = async () => {
        let result = await axios.post("http://localhost:5000/member/userDetails", { id: localStorage.cwUser });
        console.log(result);
        setuserDetails(result.data.user);
    };

 
    useEffect(() => {
        getUserDetails();
    }, []);

    const handleImageChange = (e) => {
        // if (e.target.files && e.target.files[0]) {
        //     setSelectedImage(e.target.files[0]);
        // }

        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
                // setproductImg(event.target.result)
            }
            reader.readAsDataURL(file);
            // if (selectedImage !== "") {
            //     setTimeout(() => {
            //         setimgpg(true)
            //     }, 1000);
            // }
            // setTimeout(() => {
            //     setimgpg(false)
            // }, 1100);
        }
    };
    
    const [imgResponse, setimgResponse] = useState(false)
    useEffect(()=>{
        if (selectedImage){
            const formData = new FormData();
            formData.append('image', selectedImage);
            axios.post("http://localhost:5000/member/saveCarImg", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(response => {
                console.log('Image saved:', response.data.imageUrl);
            }) .catch(error => {
                console.error('Error saving image:', error);
            });
        }
        
    },[selectedImage])
    const submitDetails = async () => {
        setloading(true);
        try {
            if (!selectedImage) {
                toast.error("Car image is required");
                setloading(false);
                return;
            }
            if (carName === "" || plate === "" || color === "" || location === "") {
                toast.error("Fill all details");
                setloading(false);
                return;
            }

            const formData = new FormData();
            // formData.append('image', selectedImage);
            // formData.append('name', carName);
            // formData.append('plateNum', plate);
            // formData.append('color', color);
            // formData.append('location', location);
            // formData.append('owner', localStorage.cwUser);

            // Log formData keys and values

            console.log(selectedImage);

            let carObj={
                image:selectedImage,
                name:carName,
                plateNum:plate,
                location:location,
                owner:localStorage.cwUser
            }
            const saveCar = await axios.post("http://localhost:5000/member/registerCar", carObj, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(saveCar);
            toast.success("Car registered successfully!");
        } catch (error) {
            console.error('Error:', error);
            toast.error("Failed to register car");
        } finally {
            setloading(false);
        }
    };

    return (
        <div onClick={() => { loading ? setloading(false) : null }}>
            {loading && <Loading msg={"Submitting"} />}
            <Bluebackground />
            <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
                <GreetingLabel name={userDetails.firstName} msg={"Start uploading car"} />
                <div className="d-md-flex gap-0 mt-4">
                    <div className="rounded col-md-3 px-4">
                        <input type="file" accept="image/*" onChange={handleImageChange} id='getImage' className='d-none' />
                        <h5 className='pt-2 text-white'>Why car image ?</h5>
                        <div className="carImgUpd shadow bg-white p-2 d-flex align-items-center pt-5 pt-md-0" style={{ height: "40vh" }}>
                            <div>
                                <div className="text-center">
                                    <img src={selectedImage ? selectedImage : carOne} alt="" className='col-7' style={{ border: "1px solid", borderStyle: "dashed" }} />
                                    <br />
                                    <button className='btn mt-2 text-white' onClick={() => { document.getElementById('getImage').click() }} style={{ border: "1px solid #84A2CF", backgroundColor: "#0E47A1" }}>
                                        {selectedImage ? "Change image" : "Upload image"} <i className="bi bi-plus-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded col-md-9 p-0 px-3 px-md-2 mt-2 mt-md-0">
                        <h5 className='text-white d-none d-md-block'>Car information</h5>
                        <h5 className='d-md-none text-center'>Car information</h5>
                        <div className="shadow p-3 bg-white">
                            <div className="form-floating mb-3">
                                <span htmlFor="floatingInput">Car name</span>
                                <input type="text" className="form-control" id="floatingInput" placeholder="example:toyota camry" onChange={(e) => setcarName(e.target.value)} />
                            </div>
                            <div className="d-flex" style={{ gap: "10px" }}>
                                <div className="form-floating mb-3 w-100">
                                    <span htmlFor="floatingInput">Plate number</span>
                                    <input type="text" style={{textTransform:"uppercase"}} className="form-control" id="floatingInput" placeholder="example:toyota camry" onChange={(e) => setplate(e.target.value)} />
                                </div>
                                <div className="form-floating mb-3 w-100">
                                    <span htmlFor="floatingInput">Color</span>
                                    <input type="text" className="form-control" id="floatingInput" placeholder="example:toyota camry" onChange={(e) => setcolor(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <span htmlFor="floatingInput">Location</span>
                                <input type="text" className="form-control" id="floatingInput" placeholder="example:toyota camry" onChange={(e) => setlocation(e.target.value)} />
                            </div>
                            <div className="submit">
                                <button className="btn w-100 text-white" style={{ backgroundColor: "#0E47A1" }} onClick={submitDetails}>Submit details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uploadcar;
