import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Bluebackground from '../component/Bluebackground'
import GreetingLabel from '../component/GreetingLabel'
import { useNavigate } from 'react-router-dom'
import NocarFound from '../component/NocarFound'

const Mycar = () => {
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
            <Bluebackground />
            <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
            <GreetingLabel msg={"View your car "} />
                <div className="p-2 c1 mx-auto" style={{ marginTop: "20px" }}>
                    <h5 className='text-white'>You can add a new car, edit and delete</h5>
                    {
                        allCar.length > 0 ?
                            <div className='d-md-flex' style={{ flexWrap: "wrap" }}>
                                {
                                    allCar.slice().reverse().map((car, i) => (
                                        <div className="card20 col-md-3 p-0 p-2">
                                            <div className="p-2 card20two bg-white mt-1 mt-md-0">
                                                <div className="card20-header" style={{ backgroundImage: `url(${car.image})` }}>
                                                    <div className="card20-header-bar">
                                                        <a href="#" className="btn-message">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                id="message"
                                                            >
                                                                <path d="M5.2 22c-.4 0-.9-.1-1.3-.2s-.6-.3-.8-.5l-.1-.1c-.1-.1-.2-.3-.2-.4 0-.2.1-.3.3-.4.8-.4 1.5-1.1 1.9-1.9 0-.1 0-.2.1-.3C2.3 16.5.7 13.8.7 11 .6 6 5.7 2 12 2c6.3 0 11.4 4 11.4 9s-5.1 9.1-11.4 9.1c-.6 0-1.3 0-1.9-.1-1.5 1.3-3.2 2-4.9 2zm-1-1.1c1.7.4 3.7-.3 5.5-1.8 0-.1.2-.2.3-.1.6.1 1.3.1 2 .1 5.7 0 10.4-3.6 10.4-8.1S17.7 3 12 3 1.6 6.6 1.6 11c0 2.6 1.6 5 4.3 6.5.2.1.3.4.2.6 0 .3-.1.6-.3.9-.4.8-1 1.4-1.6 1.9z"></path>
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="btn-menu">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                fill="none"
                                                                id="menu"
                                                            >
                                                                <path
                                                                    fill="#000"
                                                                    d="M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                                                ></path>
                                                            </svg>
                                                        </a>
                                                    </div>

                                                    
                                                    {/* <div className="card20-header-slanted-edge col-10 text-end" style={{float:"center"}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200" >
                                                            <path className="polygon" d="M-20,200,1000,0V200Z" />
                                                        </svg>
                                                    </div> */}
                                                </div>

                                                <div className="card20-body mt-3">
                                                    <h4 className="name" style={{ textTransform: "capitalize" }}>{car.name}</h4>
                                                    <h4 className="job-title" style={{ textTransform: "" }}>Color: {car.white}</h4>
                                                    <div className="bio">
                                                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
                                                    </div>
                                                    <button className="card4-button">More  <i class="bi bi-arrow-right-short text-primary   "></i> </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            : <NocarFound/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Mycar