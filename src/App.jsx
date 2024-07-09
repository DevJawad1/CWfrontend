import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <Routes>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
