import React from 'react'
import logo from '../assets/logo.png'
import Appoint from '../assets/Appointment.png'
import line from '../assets/Line4.png'
import '../styles/login.css'
import { Link } from 'react-router-dom';
import '../styles/Appointment.css'
import Footer from '../components/Footer'

const Appointment = () => {
  return (
    <div >
<div className="headd d-flex justify-content-around ">
  <img src={logo} alt="logo" />
 <div><Link to ='/AppointmentModal1' className='text-decoration-none  fw-light mx-3 hom'>My Appointment</Link>
   <Link to= '/Login' className='text-decoration-none hom2 fw-light mx-3' >Log Out</Link> </div> 
</div>


      <div className='d-md-flex justify-content-center app'>
        <center className='form-app'>
            <h3>MAKE AN APPOINTMENT</h3>
            <img src={line} alt="" />  <img src={line} alt="" />   <img src={line} alt="" />

          <form>
            <input type="text" placeholder='First Name*' /> <br />

            <input type="text" placeholder='Last Name*' /> <br />

            <input type="number" placeholder='Phone no*' /> <br />

            <input type="number" placeholder='Appointment Date*' /> <br />

            <button className='btn'>REQUEST</button>
            <Link to= '/AppointmentModal1' className='text-decoration-none  fw-light mx-3' >REQUEST</Link> 

          </form>
        </center>

        <div className='login'>
          <img src={Appoint} alt="Appointment" className='img-fluid' style={{ height: '590px' }} />
        </div>
      </div>

      <Footer/>
      
    </div>
  )
}

export default Appointment