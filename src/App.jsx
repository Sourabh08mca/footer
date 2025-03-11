import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Contactpage from './pages/Contactpage'
import Servicepage from './pages/Servicepage'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Footer/>}/>
      <Route path='/Homepage' element={<Homepage/>}/>
      <Route path='/Aboutpage' element={<Aboutpage/>}/>
      <Route path='/Contactpage' element={<Contactpage/>}/>
      <Route path='/Servicepage' element={<Servicepage/>}/>
      
    </Routes>
  )
}

export default App
