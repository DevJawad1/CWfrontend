import React, {useEffect, useState} from 'react'
import Sidebar from './component/Sidebar'
import './dash.css'
import axios from 'axios'
import Welcome from './component/Welcome'
const Admindashboard = () => {

    const [allBooker, setallBooker] = useState('')
    const [allBooking, setallBooking] = useState([])
    const getBookedCar=()=>{
        axios.post('http://localhost:5000/admin/allbookedCar').then(res=>{
            console.log(res.data);
            setallBooker(res.data.allBooker)
            setallBooking(res.data.allBooking)
            countCarByOwner(res.data.allBooking)
        }).catch(err=>{
            console.log(err);
        })
    }


    const [carOwned, setcarOwned] = useState([])
    const countCarByOwner=(cars)=>{
        const carCounts={}
        cars.forEach(car => {
            const key = `${car.owner}_${car.type}`;
            carCounts[key] = (carCounts[key] || 0) + 1;
        });
        const ownerEntries = Object.entries(carCounts).map(([key, count]) => {
            const [owner, type] = key.split('_');
            return [ owner, type, count ];
        });
        setcarOwned(ownerEntries)
    }

    useEffect(()=>{
        getBookedCar()
    }, [])
    const flip=()=>{
        document.getElementById('flip1').style.transform = "scaleX(-1)"
        document.getElementById('flip2').style.display = "none"
        setTimeout(() => {
            document.getElementById('flip2').style.display = "block"
            document.getElementById('flip2').style.zIndex = "2"
            
        }, 150);
    }
    const flip2= ()=>{
        document.getElementById('flip2').style.display = "none"
        document.getElementById('flip1').style.transform = "scaleX(1)"
        
    }
    return (

        <div>
            <div className="d-flex admindash">
                <Sidebar />
                <div className='admin-view '>
                   <Welcome page={'Dashboard'}/>
                    <div className='mt-5 pt-5'>
                        <div className="d-flex mt-2">
                            <div className="col-4 px-2">
                                <div className="shadow bg-white rounded p-2">
                                    <h6>Booked car</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Booking from {allBooker || '0'} user</h5>
                                        {allBooker>2?<h6 className='theme1-line rounded pt-0'>view all</h6>:null}
                                    </div>

                                    <div className="d-flex gap-1 w-100">
                                        {carOwned.map(([owner, type, count]) => (
                                            <div className="shadow-sm rounded col-6 p-2" key={owner}>
                                                    <h6>{owner}</h6>
                                                    <h6>Booked {count} cars</h6>
                                                    {type} class
                                                </div>
                                        ))}
                                        {/* <li key={owner}>{owner} has {count} cars.</li> */}
                                        {/* <div className="shadow-sm rounded col-6 p-2">
                                            <h6>Adex logistic</h6>
                                            <h6>Booked 1 cars</h6>
                                            First class
                                        </div> */}
                                    </div>
                                    <div className="d-flex mt-2">
                                        <h6 className='text-success'>Assign staff </h6>
                                        <i class="bi bi-arrow-right-short text-success"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 px-2">
                                <div className="shadow bg-white p-2 rounded">
                                    <h6>Payment</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>Payment from 3 user</h5>
                                        <h6 className='theme1-line p-1 rounded pt-0'>view all</h6>
                                    </div>
                                    <div className="d-flex gap-1 w-100">
                                        <div className="shadow-sm rounded col-6 p-2">
                                            <h6>Jawad Adekanbi</h6>
                                            <h6>Paid ₦10,000</h6>
                                            Type: Renew me...
                                        </div>
                                        <div className="shadow-sm rounded col-6 p-2">
                                            <h6>Adex logistic</h6>
                                            <h6>Paid ₦10,000</h6>
                                            Type: Get mem...
                                        </div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <h6 className='text-success'>Assign staff </h6>
                                        <i class="bi bi-arrow-rixght-short text-success"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 px-2 flip-box">
                                <div className="shadow bg-white p-2 rounded position-absolute flip1" id='flip1' style={{zIndex:"1"}}>
                                    <div className="d-flex justify-content-between">
                                        <h6>Organization summary</h6>
                                        <h6 className='theme1-line rounded' onClick={flip}>More</h6>
                                    </div>
                                    <div className="d-flex bg-light shadow-sm p-2 w-100 justify-content-between align-items-center pt-3" style={{height:"50px"}}>
                                        <h6 className=''>Total staff: 15</h6>
                                        <h6 className='theme1 p-1 rounded'>view</h6>
                                    </div>

                                    <div className="d-flex mt-2 bg-light shadow-sm p-2 w-100 justify-content-between align-items-center pt-3" style={{height:"50px"}}>
                                        <h6 className=''>Total user: 15</h6>
                                        <h6 className='theme1-line p-1 rounded'>view</h6>
                                    </div>

                                    <div className="d-flex mt-2 bg-light shadow-sm p-2 w-100 justify-content-between align-items-center pt-3" style={{height:"50px"}}>
                                        <h6 className=''>Membership user: 15</h6>
                                        <h6 className='theme1 p-1 rounded'>view</h6>
                                    </div>
                                </div>
                                <div className="shadow bg-white p-2 rounded position-absolute flip2" id='flip2'>
                                    <div className="d-flex justify-content-between">
                                        <h6>Organization summary</h6>
                                        <h6 className='theme1-line rounded' onClick={flip2}>Back</h6>
                                    </div>
                                    <div className="d-flex bg-light shadow-sm p-2 w-100 justify-content-between align-items-center pt-3" style={{height:"50px"}}>
                                        <h6 className=''>Total staff: 15</h6>
                                        <h6 className='theme1 p-1 rounded'>view</h6>
                                    </div>

                                    <div className="d-flex mt-2 bg-light shadow-sm p-2 w-100 justify-content-between align-items-center pt-3" style={{height:"50px"}}>
                                        <h6 className=''>Total user: 15</h6>
                                        <h6 className='theme1-line p-1 rounded'>view</h6>
                                    </div>

                                    <div className="d-flex mt-2 bg-light shadow-sm p-2 w-100 justify-content-between align-items-center pt-3" style={{height:"50px"}}>
                                        <h6 className=''>Membership user: 15</h6>
                                        <h6 className='theme1 p-1 rounded'>view</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-3 p-2 bg-white rounded mx-md-2 shadow' style={{height:"290px"}}>
                        <h6 className='pt-1'>Payment history</h6>
                        <table class="table table-striped text-center">
                            <tr>
                                <th>#</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Approved</th>
                                <th>Action</th>
                            </tr>
                            <tr className='bg-light'>
                                <td>1</td>
                                <td>7,000</td>
                                <td>Get membership</td>
                                <td>False</td>
                                <td>View</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>10,000</td>
                                <td>Upgrade membership</td>
                                <td>True</td>
                                <td>View</td>
                            </tr>

                            <tr className='bg-light'>
                                <td>3</td>
                                <td>7,000</td>
                                <td>Get membership</td>
                                <td>False</td>
                                <td>View</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>10,000</td>
                                <td>Upgrade membership</td>
                                <td>True</td>
                                <td>View</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admindashboard