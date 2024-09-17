import React, { useEffect, useState } from 'react'
import Bluebackground from '../component/Bluebackground'
import './dashboard.css'
import axios from 'axios'
import Loading from '../component/Loading'
import GreetingLabel from '../component/GreetingLabel'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Dashboard = () => {
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2000);
  }, [])
  const [userDetails, setuserDetails] = useState('')
  const getUserDetails = async () => {
    let result = await axios.post("https://cw-backend-five.vercel.app/member/userDetails", { id: localStorage.cwUser })
    console.log(result);
    setuserDetails(result.data.user)
  }

  const [allCar, setallCar] = useState([])
  const getAllcar = async () => {
    const myCar = await axios.post("https://cw-backend-five.vercel.app/member/myCar", { user: localStorage.cwUser })
    if (myCar.data.status) {
      setallCar(myCar.data.myCar)
    }

  }

  const [paymentHistory, setpaymentHistory] = useState([])
  const getUserPayment = () => {
    axios.post("https://cw-backend-five.vercel.app/member/userPayment", { userId: localStorage.cwUser }).then((res => {
      setpaymentHistory(res.data.paymentHistory)
      console.log(res.data.paymentHistory);
    })).catch((err) => {
      console.log("f", err);
    })
  }

  useEffect(() => {
    getUserDetails()
    getAllcar()
    getUserPayment()
  }, [])

  const dueDate = (realDate) => {
    let date = new Date(realDate);
    date.setDate(date.getDate() + 30);
    let formattedDate = date.toISOString().split('T')[0];
    return formattedDate
  }

  const [miniloading, setminiloading] = useState(false)
  const [loadingtype, setloadingtype] = useState('')
  const verifyPayment = (tx_ref) => {
    setminiloading(true)
    setloadingtype("Resolving")
    setTimeout(() => {
        axios.post("https://cw-backend-five.vercel.app/member/verifyPayment", { tx_ref: tx_ref, userid: localStorage.cwUser }).then(response => {
            setminiloading(false)
            if (response.data.status) {
                toast.success("Resolved "+response.data.msg)
                setloadingtype("Resoved")
            } else {
                toast.error(response.data.msg)
            }

        }).catch((err) => {
            console.log(err);

        });
    }, 5000)
}
  return (
    <div className='c'>
      {/* {loading?<Loading/>:null} */}
      <Bluebackground />
      <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
        <GreetingLabel msg={"Welcome to Auto Wash"} />
        <div className="d-md-flex w-100 px-2 px-md-3 mt-3 xlabel">
          <div className="col-md-3 mt-2 mt-md-0 px-1">
            <div className="bg-light h-100 rounded p-2 shadow">
              <div className="d-flex justify-content-between w-100">
                <h6>Membeship plan</h6>
                <div className="border col-1 d-flex justify-content-center align-items-center bg-primary text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                  <span class="bi bi-person"></span>
                </div>
              </div>
              <h3>{userDetails.type !== "" ? <span style={{ textTransform: "capitalize" }}>{userDetails.type || "Loding"} {userDetails.type !== "none" ? "class" : null}</span> : "No plan"}</h3>
              <div className="d-flex">
                <h6 className='text-success' onClick={() => { navigate('/membershipplan') }}>
                  {
                    userDetails.type == "none" ? "Get plan" : userDetails.type !== "First" ? "Upgrade plan" : "Get plan"
                  }
                </h6>
                <i class="bi bi-arrow-right-short text-success"></i>
              </div>
            </div>
          </div>

          <div className="col-md-3 mt-2 mt-md-0 px-1">
            <div className="bg-light h-100 rounded p-2 shadow">
              <div className="d-flex justify-content-between w-100">
                <h6>Membeship car</h6>
                <div className="border col-1 d-flex justify-content-center align-items-center bg-primary text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                  <span class="bi bi-person"></span>
                </div>
              </div>
              <h3>{allCar.length == 0 ? "No car" : `${allCar.length} ${allCar.length > 1 ? "cars" : "car"}`}</h3>
              <div className="d-flex">
                <h6 className='text-success' onClick={() => { navigate('/uploadcar') }}>Upload car </h6>
                <i class="bi bi-arrow-right-short text-success"></i>
              </div>
            </div>
          </div>

          <div className="col-md-3 mt-2 mt-md-0 px-1">
            <div className="bg-light h-100 rounded p-2 shadow">
              <div className="d-flex justify-content-between w-100">
                <h6>Become VIP</h6>
                <div className="border col-1 d-flex justify-content-center align-items-center bg-primary text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                  <span class="bi bi-person"></span>
                </div>
              </div>
              <h3>Not verified</h3>
              <div className="d-flex">
                <h6 className='text-success'>Verified now </h6>
                <i class="bi bi-arrow-right-short text-success"></i>
              </div>
            </div>
          </div>

          <div className="col-md-3 mt-2 mt-md-0 px-1">
            <div className="bg-light h-100 rounded p-2 shadow">
              <div className="d-flex justify-content-between w-100">
                <h6>Membeship due</h6>
                <div className="border col-1 d-flex justify-content-center align-items-center bg-primary text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                  <span class="bi bi-person"></span>
                </div>
              </div>
              <h3>20-09-2024</h3>
              <div className="d-flex">
                <h6 className='text-success'>Renew plan </h6>
                <i class="bi bi-arrow-right-short text-success"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow p-md-2 pt-2 bg-white mt-4 mx-md-4 rounded m-3">
          <h5 className='px-2'>Just for you</h5>
          <div className="d-md-flex mt-2">
            <div className="car col-md-6">
              <div className="">
                <div className="d-flex justify-content-between border-bottom">
                  <h5>Your car</h5>
                  <h5 class="bi bi-plus-circle"></h5>
                </div>
                <div className="car-list">
                  {/* <p>You have no car</p> */}

                  {
                    allCar.length > 1 ?
                      allCar.map((car, i) => (
                        i < 3 ?
                          <div className="d-flex justify-content-between border-bottom mt-2 bg-ligh p-1 pt-2">
                            <h6>{car.name}</h6>
                            <i class="bi bi-pencil-square"></i>
                          </div>
                          : null
                      ))
                      : null
                  }
                  {allCar.length > 3 ?
                    <div className="d-flex mt-2">
                      <h6 className='text-success'>View all </h6>
                      <i class="bi bi-arrow-right-short text-success"></i>
                    </div> : null}
                </div>
              </div>
            </div>
            <div className="col-md-6 px-2">
              <div className="px-2 p-2 p-md-0">
                <div className="d-flex justify-content-between mt-4 mt-md-0">
                  <h5>Quick links</h5>
                  <h5 class="bi bi-link"></h5>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }} onClick={() => { navigate('/mycar') }}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-car-front-fill"></h5>
                  </div>
                  <h6 className='pt-2'>My cars</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }} onClick={() => { navigate('/chooseManagement') }}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-person-add"></h5>
                  </div>
                  <h6 className='pt-2'>Choose management</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-person"></h5>
                  </div>
                  <h6 className='pt-2'>Membership status</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-journal-text"></h5>
                  </div>
                  <h6 className='pt-2'>View all history</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth-section">
          <div className={`mx-2 mx-md-4 m-3 shadow bg-white`}>
            <div className="mt-3 mt-md-0 p-0 px-md-2 pt-md-3">
              <div className=" rounded p-2 ">
                <h5>Payment history</h5>
                <div className={` ${paymentHistory.length>0?"sm-scroll":null}`}>
                  {
                    paymentHistory.length > 0 ?
                      <table class="table table-striped border text-center">
                        <tr>
                          <th>#</th>
                          <th>Amount</th>
                          <th>Type</th>
                          <th>Resolved</th>
                          <th>Payment date</th>
                          <th>Expired date</th>
                        </tr>
                        {
                          paymentHistory.slice().reverse().map((item, i) => (
                            i<5?
                            <tr className={i % 2 == 0 ? "bg-light" : null}>
                              
                              <td  className=''>
                                {item.currently?<h6 className='position-relative mx-auto bg-success p-0 text-white' style={{height:"18px", borderRadius:"20px", width:"60px", marginTop:"-20px", fontSize:"12px"}}>current</h6>:null}
                                {i + 1}
                              </td>
                              <td>₦ {item.transactionDetails.data.amount}.00</td>
                              <td>{item.paymentType}</td>
                              <td className={`text-${item.resolve?"success":"danger"} fw-semibold`}>
                                {item.resolve ? "True" : 
                                <>False, <button className='btn btn-success ' onClick={()=>{verifyPayment(item.transactionDetails.data.tx_ref)}}>{loadingtype || 'Resolve now'}</button></>
                                }
                              </td>
                              <td>{item.transactionDetails.data.created_at.slice(0, 10)}</td>
                              <td className='text-danger fw-semibold'>{dueDate(item.transactionDetails.data.created_at.slice(0, 10))}</td>
                            </tr>
                            :null
                          ))
                        }
                      </table>
                      :
                      <h6>No history </h6>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard