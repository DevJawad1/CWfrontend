import React from 'react'
import Bluebackground from '../component/Bluebackground'
import './dashboard.css'
const Dashboard = () => {
  return (
    <div>
      <Bluebackground />
      <div className="position-absolute dashboard w-100" style={{ top: "0", zIndex: "2" }}>
        <div className="d-flex justify-content-between px-3">
          <div className="p-0 pt-2 col-md-5">
            <div className="card bg-primary col-2 col-md-1" style={{ height: "50px", borderRadius: "50%" }}></div>
            <div>
              <h3 className='greeting text-white pt-3'>Jawad, <br />Welcome to Auto wash</h3>
            </div>
          </div>
          <div className="text-white d-flex pt-2" style={{ gap: "10px" }}>
            <i class="bi bi-bell-fill"></i>
            <i class="bi bi-gear-fill"></i>
          </div>
        </div>

        <div className="d-md-flex w-100 px-3 mt-3 label">
          <div className="col-md-3 mt-2 mt-md-0 px-1">
            <div className="bg-light h-100 rounded p-2 shadow">
              <div className="d-flex justify-content-between w-100">
                <h6>Membeship plan</h6>
                <div className="border col-1 d-flex justify-content-center align-items-center bg-primary text-white" style={{ borderRadius: "50%", height: "30px", backgroundColor: "#84A2CF" }}>
                  <span class="bi bi-person"></span>
                </div>
              </div>
              <h3>No plan</h3>
              <div className="d-flex">
                <h6 className='text-success'>Get plan </h6>
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
              <h3>No Car</h3>
              <div className="d-flex">
                <h6 className='text-success'>Upload car </h6>
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

        <div className="shadow p-md-2 pt-2 bg-white mt-4 mx-3 mx-md-4 rounded m-4">
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
                  <div className="d-flex justify-content-between border-bottom mt-2 bg-ligh p-1 pt-2">
                    <h6>Toyora camry</h6>
                    <i class="bi bi-pencil-square"></i>
                  </div>
                  <div className="d-flex justify-content-between border-bottom mt- bg-ligh p-1 pt-2">
                    <h6>Lexus 350</h6>
                    <i class="bi bi-pencil-square"></i>
                  </div>
                  <div className="d-flex justify-content-between border-bottom mt- bg-ligh p-1 pt-2">
                    <h6>Lexus 350</h6>
                    <i class="bi bi-pencil-square"></i>
                  </div>
                  <div className="d-flex justify-content-between border-bottom mt- bg-ligh p-1 pt-2">
                    <h6>Lexus 350</h6>
                    <i class="bi bi-pencil-square"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-2">
              <div className="px-2 p-2 p-md-0">
                <div className="d-flex justify-content-between mt-4 mt-md-0">
                  <h5>Quick links</h5>
                  <h5 class="bi bi-link"></h5>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-car-front-fill"></h5>
                  </div>
                  <h6 className='pt-2'>View cars</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }}>
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
          <div className="d-md-flex mx-4 m-4">
            <div className="col-md-6 px-1">
              <div className="shadow p-2 rounded">
                <div className="form1">
                  <form action="" className='p-4'>
                  <h5>Book Appointment</h5>
                    <div className="inputBox mt-3">
                      <input id="form1-name" required type="text" className=''/>
                      <label htmlFor="form1-name">Name</label>
                    </div>
                    <div className="" style={{float:"right"}}>
                    <button type="submit" className='mt-2'>Book now</button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5>Recent history</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard