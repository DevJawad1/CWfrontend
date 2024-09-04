import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GreetingLabel from '../component/GreetingLabel'
import Bluebackground from '../component/Bluebackground'
import { toast } from 'react-toastify'
import './bookcar.css'
import CarLoading from '../component/CarLoading'
import NocarFound from '../component/NocarFound'
const BookCarforWash = () => {
    const [allCar, setallCar] = useState([])
    const [Miniloading, setMiniloading] = useState(false)
    const navigate = useNavigate()
    const getAllcar = async () => {
        setMiniloading(true)
        const myCar = await axios.post("https://cw-backend-five.vercel.app/member/myCar", { user: localStorage.cwUser })
        console.log(myCar.data);
        if (myCar) {
            setMiniloading(false)
        }
        if (myCar.data.status) {
            setallCar(myCar.data.myCar)
        }
    }
    useEffect(() => {
        getAllcar()
    }, [])

    const [oneLocation, setoneLocation] = useState(true)
    const [selectedCars, setselectedCars] = useState([])

    const [carLocationValue, setcarLocationValue] = useState('')
    const selectCar = (carId, carLocation,) => {
        let id = carId
        console.log(carLocation)
        let carObj = {
            carId: carId,
            location: carLocation[id]
        }
        console.log(carObj);
        if (!carLocation[id]) {
            toast.error("Enter the car location")
        } else {
            selectCarPushingHandle(carObj, carId)
        }
        console.log(selectedCars)


        setcarLocationValue(prevValues => ({
            ...prevValues,
            [carId]: ''
        }));

    }
    const selectCar2 = (carId) => {
        let carObj = {
            carId: carId,
            location: carLocationValue
        }

        if (carLocationValue == "") {
            toast.error("Enter the car location")
        } else {
            selectCarPushingHandle(carObj, carId)
        }

    }


    const selectCarPushingHandle = (carObj, carId) => {
        if (selectedCars.length == 0) {
            setselectedCars([...selectedCars, carObj]);
        }
        selectedCars.map((item, i) => {
            if (item.carId !== carId) {
                setselectedCars([...selectedCars, carObj]);
            } else {
                setselectedCars(selectedCars.filter(id => id.carId !== carId));
            }

        })
    }
    const handleLocationChange = (carId, location) => {
        setcarLocationValue(prevValues => ({
            ...prevValues,
            [carId]: location
        }));
    };


    const checkSelectedCar = (i) => {
        // console.log(selectedCars);
        return selectedCars.some((item) => item.carId === i);
    };
    const submitBookedCar=()=>{
        selectedCars.length<1?toast.error("No car selected. Select the car you are washing"):
        axios.post('https://cw-backend-five.vercel.app/member/savebookcar', { user: localStorage.cwUser , allcars:selectedCars})
    }
    return (
        <div>
            <Bluebackground />
            {
                Miniloading ?
                    <CarLoading msg={"Getting your car"} />
                    : null
            }
            <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
                <GreetingLabel msg={"Book car"}  />

                <div className="p-2 px-3">
                    <h5 className='text-white'>Select the car you are washing, you can select more than one car for wash   </h5>
                    <div className="d-flex align-items-center gap-2">
                        <h6 className='text-white'>Are your car in same location ? </h6>
                        <h6 className={`shadow p-1 rounded ${oneLocation ? "bg-primary text-white" : "bg-white"}`} onClick={() => { setoneLocation(true) }}>Yes</h6>
                        <h6 className={`shadow p-1 rounded ${!oneLocation ? "bg-primary text-white" : "bg-white"}`} onClick={() => { setoneLocation(false) }}>No</h6>
                    </div>

                    <input type="text" onChange={(e) => setcarLocationValue(e.target.value)} className={`border-0 shadow rounded px-2 ${oneLocation ? "" : "d-none"}`} placeholder='Enter all car location' style={{ outline: "none", height: "40px" }} />

                </div>

                <div className='position-fixe w-100 text-end submit-car-booked px-3' style={{ zIndex: "1", display:allCar.length>0?"block":"none" }}>
                    <button className='btn btn-primary shadow ' onClick={submitBookedCar}>Submit booked car ({selectedCars.length})</button>
                </div>
                <div className="car-display bookcar p-0 px-md-2 d-flex flex-wrap">
                    {
                        !Miniloading ?
                            allCar.length > 0 ?
                                allCar.slice().reverse().map((car, i) => (
                                    <div className="col-6 col-md-3 px-md-2 px-1 pt-0 p-0 mt-2" >
                                        <div className='p-1 p-md-2 bg-white rounded shadow' onClick={oneLocation ? () => { selectCar2(car._id, carLocationValue) } : null}>
                                            <div className="d-flex justify-content-end">
                                                <i class={`bi ${checkSelectedCar(car._id) ? "bi-check-circle-fill" : "bi-circle"} text-primary`}></i>
                                            </div>
                                            <div className="mt-1 car-img col-12 shadow-sm bg-white rounded " style={{ backgroundImage: `url(${car.image})` }}></div>
                                            <h6 className='text-center mt-2 d-none d-md-block' style={{ fontSize: "14px" }}> {car.name}</h6>

                                            {
                                                !checkSelectedCar(car._id) ?
                                                    <div className={`${oneLocation ? "d-none" : "d-flex"} rounded border border-primary mt-2 justify-content-between`} style={{ height: "30px" }}>
                                                        <input type="text" name="" id="" placeholder='Enter car location' className={`col-10 p-0 px-1 border-0 rounded`} style={{ outline: "none", fontSize: "13px" }} value={carLocationValue[car._id] || ''}
                                                            onChange={(e) => handleLocationChange(car._id, e.target.value)} />

                                                        <div className=' bi bi-check rounded border border-primary bg-primary text-white d-flex justify-content-center align-items-center' onClick={() => { selectCar(car._id, carLocationValue) }} style={{ width: "25px" }}></div>
                                                    </div>
                                                    :
                                                    <div>
                                                        <div className={`shadow-sm p-1 ${oneLocation ? "" : "d-md-flex"} justify-content-between`}>
                                                            <h6>Selected <i className='bi bi-check-circle-fill text-primary'></i> <br /> Location: {selectedCars.map(eachcar => eachcar.carId === car._id ? eachcar.location : "") || 'N/A'}</h6>
                                                            <h6 className='text-danger'
                                                                onClick={() => { setselectedCars(selectedCars.filter(id => id.carId !== car._id)); }}
                                                                style={{ cursor: "pointer" }}><i class="bi bi-trash"></i> Remove</h6>
                                                        </div>

                                                    </div>
                                            }
                                        </div>
                                    </div>
                                ))
                                : <NocarFound />
                            : <NocarFound load={true}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default BookCarforWash