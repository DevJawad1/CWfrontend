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
              <h3 className='greeting text-white pt-3'>Saheed, <br />Welcome to Auto wash</h3>
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
        <div className="shadow p-2 bg-white mt-4 mx-3 mx-md-4 rounded">
          <div className="d-md-flex">
            <div className="car col-md-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard