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
  return (
    <div>
        <Bluebackground/> 
        <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
            <GreetingLabel msg={"Book car"}/>

            <div className="p-2 px-3">
            <h5 className='text-white'>Select the car you are washing, you can select more than one car for wash   </h5>
            <div className="car-display bookcar d-flex flex-wrap">
                {
                    allCar.map((car, i)=>(
                        <div className="col-4 col-md-2 px-md-2 px-1 pt-0 mt-2">
                            <div className='p-2 bg-white rounded'>
                                <div className="car-img col-12 shadow bg-white rounded " style={{backgroundImage:`url(${car.image})`}}>

                                </div>
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