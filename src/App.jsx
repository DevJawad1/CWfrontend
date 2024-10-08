import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Loading from './component/Loading'
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard'
import Uploadcar from './pages/Uploadcar'
import Plan from './pages/Plan'
import Management from './pages/Management'
import Mycar from './pages/Mycar'
import Bluebackground from './component/Bluebackground'
import Mailformat from './pages/mailformat/Mailformat'
import BookCarforWash from './pages/BookCarforWash'
import Miniloading from './component/Miniloading'
import CarLoading from './component/CarLoading'
import SidebarTwo from './component/SidebarTwo'
import Admindashboard from './adminPages/Admindashboard'
import AdminProfile from './adminPages/Profile'
import Addadmin from './adminPages/Addadmin'
import Resetpassword from './pages/auth/Resetpassword'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
    <ToastContainer />
     <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resetpassword' element={<Resetpassword/>}/>
        <Route path='/loading' element={<Loading/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/uploadcar' element={<Uploadcar/>}/>
        <Route path='/membershipplan' element={<Plan/>}/>
        <Route path='/chooseManagement' element={<Management/>}/>
        <Route path='/mycar' element={<Mycar />}/>
        <Route path='/blue' element={<Bluebackground/>}/>
        <Route path='/mailformat' element={<Mailformat/>}/>
        <Route path='/bookcar' element={<BookCarforWash/>}/>
        <Route path='/carload' element={<CarLoading/>}/>
        <Route path='/sidebar' element={<SidebarTwo/>}/>
        <Route path='/staff/admin' element={<Admindashboard/>}/>
        <Route path='/staff/profile' element={<AdminProfile/>}/>
        <Route path='/staff/addAdmin' element={<Addadmin/>}/>
     </Routes>

    </>
  )
}

export default App
