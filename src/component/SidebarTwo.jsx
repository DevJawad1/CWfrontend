import React from 'react'
import { useNavigate } from 'react-router-dom'

const SidebarTwo = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Explore </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body border-top p-0 px-2">
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }} onClick={()=>{navigate('/dashboard')}}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-house-door-fill"></h5>
                  </div>
                  <h6 className='pt-2'>Home</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }} onClick={()=>{navigate('/membershipplan')}}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-car-front-fill"></h5>
                  </div>
                  <h6 className='pt-2'>Membership plan</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }} onClick={()=>{navigate('/mycar')}}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-car-front-fill"></h5>
                  </div>
                  <h6 className='pt-2'>My cars</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }} onClick={()=>{navigate('/chooseManagement')}}>
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
                  <h6 className='pt-2'>My history</h6>
                </div>

                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }} onClick={()=>{navigate('/uploadcar')}}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-car-front-fill"></h5>
                  </div>
                  <h6 className='pt-2'>Upload car</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }} onClick={()=>{navigate('/bookcar')}}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-car-front-fill"></h5>
                  </div>
                  <h6 className='pt-2'>Book car for wash</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }} onClick={()=>{navigate('/chooseManagement')}}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-person-add"></h5>
                  </div>
                  <h6 className='pt-2'>Book Appointment</h6>
                </div>
                <div className="d-flex align-items-center mt-2" style={{ gap: "10px" }}>
                  <div className="shadow-sm d-flex justify-content-center p-1 px-2" style={{ borderRadius: "50%", height: "35px" }}>
                    <h5 class="bi bi-person"></h5>
                  </div>
                  <h6 className='pt-2'>Membership status</h6>
                </div>
                </div>
            </div>
        </div>
  )
}

export default SidebarTwo