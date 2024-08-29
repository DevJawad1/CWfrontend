import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import GreetingLabel from '../component/GreetingLabel'
import Bluebackground from '../component/Bluebackground'

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
              
        </div>
    </div>
  )
}

export default BookCarforWash