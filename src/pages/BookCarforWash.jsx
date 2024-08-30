import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import GreetingLabel from '../component/GreetingLabel'
import Bluebackground from '../component/Bluebackground'
import './bookcar.css'
const BookCarforWash = () => {
    const [allCar, setallCar] = useState([])
    const navigate = useNavigate()
    const getAllcar = async () => {
        const myCar = await axios.post("https://cw-backend-five.vercel.app/member/myCar", { user: localStorage.cwUser })
        console.log(myCar.data);
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
    const selectCar = (carId, carLocation) =>{
        let id= carId
        // console.log(carLocation[id])
        let carObj = {
            carId:carId, 
            location:carLocation[id]
        }
        console.log(carObj);
        if (!selectedCars.includes(carId)) {
            setselectedCars([...selectedCars, carObj]);
        } else {
            setselectedCars(selectedCars.filter(id => id.carId !== carId)); 
        }
        setcarLocationValue(prevValues => ({
            ...prevValues,
            [carId]: ''
        }));

        console.log(selectedCars)
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
  return (
      <div>
        <Bluebackground/> 
        <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
            <GreetingLabel msg={"Book car"}/>

            <div className="p-2 px-3">
            <h5 className='text-white'>Select the car you are washing, you can select more than one car for wash   </h5>
            <div className="d-flex align-items-center gap-2">
                <h6 className='text-white'>Are your car in same location ? </h6>
                <h6 className='shadow p-1 bg-white rounded' onClick={()=>{setoneLocation(true)}}>Yes</h6>
                <h6 className='shadow p-1 bg-white rounded' onClick={()=>{setoneLocation(false)}}>No</h6>
            </div>

            <input type="text" className={`border-0 shadow rounded px-2 ${oneLocation?"":"d-none"}`} placeholder='Enter all car location' style={{outline:"none", height:"40px"}}/>
            <div className="car-display bookcar d-flex flex-wrap">
                {
                    allCar.map((car, i)=>(
                        <div className="col-6 col-md-3 px-md-2 px-1 pt-0 p-0 mt-2 " >
                            <div className='p-1 p-2 bg-white rounded shadow'>
                                <div className="d-flex justify-content-end">
                                <i class={`bi ${checkSelectedCar(car._id)?"bi-check-circle-fill":"bi-circle"} text-primary`}></i>
                                </div>
                                <div className="mt-1 car-img col-12 shadow-sm bg-white rounded " style={{backgroundImage:`url(${car.image})`}}></div>
                                <h6 className='text-center mt-2 d-none d-md-block' style={{fontSize:"14px"}}> {car.name}</h6>

                                {
                                !checkSelectedCar(car._id)?
                                <div className={`${oneLocation?"d-none":"d-flex"} shadow rounded align-items-cnter p-1`}>
                                    <input type="text" name="" id="" placeholder='input car location' className={`col-10  p-0 px-2 border-0`} style={{outline:"none"}} value={carLocationValue[car._id] || ''}
                                    onChange={(e) => handleLocationChange(car._id, e.target.value)}/>
                                    <div className='col-2 border bi bi-check bg-primary text-white d-flex justify-content-center align-items-center' onClick={()=>{selectCar(car._id, carLocationValue)}}></div>
                                </div>
                                :
                                <div>
                                    <div className={`shadow-sm p-1 ${oneLocation?"d-none":"d-flex"} justify-content-between`}>
                                        <h6>Selected <i className='bi bi-check-circle-fill text-primary'></i> <br /> Location: {selectedCars.map(eachcar => eachcar.carId === car._id ? eachcar.location:"") || 'N/A'}</h6>
                                        <h6 className='text-danger' 
                                        onClick={()=>{setselectedCars(selectedCars.filter(id => id.carId !== car._id)); }}
                                        style={{cursor:"pointer"}}><i class="bi bi-trash"></i> Remove</h6>
                                    </div>

                                </div>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            </div>
        </div>
    </div>
  )
}

export default BookCarforWash