import React, { useEffect, useState } from 'react'
import Bluebackground from '../component/Bluebackground'
import GreetingLabel from '../component/GreetingLabel'

import imgteam1 from '../img/team-1.jpg'
import imgteam2 from '../img/team-2.jpg'
import imgteam3 from '../img/team-3.jpg'
import imgteam4 from '../img/team-4.jpg'
import Loading from '../component/Loading'
const Management = () => {
    const [loading, setloading] = useState(false)

    useEffect(()=>{
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 2000);
    }, [])
  return (
    <div>
        {loading?<Loading/>:null}
        <Bluebackground/>
        <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
            <GreetingLabel name={""} msg={"Choose a staff to manage your cars"}/>
            {/* <div className="col-md-6 shadow p-5 bg-white rounded mx-auto">
                <h4 className='text-center'>No staff for now</h4>
            </div> */}
            <div className="team">
                <div className="container">
                    <div className="section-header text-center">
                        {/* <p>Meet Our Sraff</p> */}
                        <h3 className='text-white'>Our Staff & Workers</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={imgteam1} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Donald John</h2>
                                    <p>Engineer</p>
                                    <button className='btn text-white border mt-2'>Choose</button>
                                    <div className="team-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={imgteam2} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Adam Phillips</h2>
                                    <p>Engineer</p>
                                    <button className='btn text-white border mt-2'>Choose</button>
                                    <div className="team-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={imgteam3} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Thomas Olsen</h2>
                                    <p>Worker</p>
                                    <button className='btn text-white border mt-2'>Choose</button>
                                    <div className="team-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src={imgteam4} alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>James Alien</h2>
                                    <p>Worker</p>
                                    <button className='btn text-white border mt-2'>Choose</button>
                                    <div className="team-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Management