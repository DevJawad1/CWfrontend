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

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <ToastContainer />
     <Routes>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/loading' element={<Loading/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </>
  )
}

export default App
