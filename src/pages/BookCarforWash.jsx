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
    const selectCar = (carId) =>{
        if (!selectedCars.includes(carId)) {
            setselectedCars([...selectedCars, carId]);
        } else {
            setselectedCars(selectedCars.filter(id => id !== carId)); 
        }
        console.log(selectedCars);
    }


    const checkSelectedCar = (i) => {
        // console.log(selectedCars);
        return selectedCars.some((item) => item === i);
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
                        <div className="col-4 col-md-2 px-md-2 px-1 pt-0 p-0 mt-2 shadow" onClick={()=>{selectCar(car._id)}}>
                            <div className='p-1 p-2 bg-white rounded'>
                                <div className="d-flex justify-content-end">
                                <i class={`bi ${checkSelectedCar(car._id)?"bi-check-circle-fill":"bi-circle"} text-primary`}></i>
                                </div>
                                <div className="mt-1 car-img col-12 shadow-sm bg-white rounded " style={{backgroundImage:`url(${car.image})`}}></div>
                                <h6 className='text-center mt-2 d-none d-md-block' style={{fontSize:"14px"}}> {car.name}</h6>

                                <input type="text" name="" id="" placeholder='input car location' className={`border rounded border-bottom ${}`} style={{outline:"none"}}/>
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