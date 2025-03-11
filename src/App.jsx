import React from 'react'
import {Route,Routes} from 'react-router-dom'

import Homepage from './Pages/Homepage'
import Aboutpage from './Pages/Aboutpage'
import Contactpage from './Pages/Contactpage'
import Gallarypage from './Pages/Gallarypage'
import Nav from './component/Nav'





function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='/Homepage' element={<Homepage/>} />
      <Route path='/Aboutpage' element={<Aboutpage/>} />
      <Route path='/Contactpage' element={<Contactpage/>} />
      <Route path='/Gallarypage' element={<Gallarypage/>} />



    </Routes>
  )
}

export default App

