import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Bluebackground from '../component/Bluebackground'
import GreetingLabel from '../component/GreetingLabel'

const Mycar = () => {
    const [allCar, setallCar] = useState([])

    const getAllcar= async()=>{
        const myCar = await axios.post("http://localhost:5000/member/myCar", {user:localStorage.cwUser})
        console.log(myCar.data);
    }
    useEffect(()=>{

    })
  return (
    <div>
        <Bluebackground/>
        <GreetingLabel msg={"You can add a car delete and edit "}/>
        {/* https://res.cloudinary.com/dog1pqdax/image/upload/v1721897283/iwhjx2wfkplty0zcyok3.png */}
        
    </div>
  )
}

export default Mycar