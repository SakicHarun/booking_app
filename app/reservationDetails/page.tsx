import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import ReservationDetails from '../components/ReservationDetails'
function page() {
  return (
    <div>
        <Navbar></Navbar>
        <ReservationDetails></ReservationDetails>
        <Footer></Footer>
      
    </div>
  )
}

export default page
