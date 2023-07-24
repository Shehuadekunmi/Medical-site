import React from 'react'
import'../styles/homesec5.css'
import { Link } from 'react-router-dom'
import heart from '../assets/heartbeat.png'

const Homesec5 = () => {
  return (
    <div>

<section className="five">
        <center><h2>Patients  Say</h2></center>
        <div className='d-flex justify-content-evenly me-5 s5'>
          <div className='mt-3 med'><p>“I had a wonderful experience with Medkit. They ensured my health  was greatly taken <br /> care of. I highly recommend Medkit.”</p>
            <h3>Aliya Roll</h3></div>
          <div className='mt-3 med'><p>“My treatment was second to none and the staffs  of Medkit were polite and caring”</p>
            <h3>Elo Zona</h3></div>
        </div>
        <center className='mt-3'><img src={heart} alt="hearbeat" /></center>
        <center className='my-5 day'>
          <h1>We Operate 24h a day  - 7 days a week!</h1>
         <div className="link"> <Link className="btn mt-1 rounded-top-2">REPORT A PROBLEM</Link> </div>
        </center>
      </section> 

    </div>
  )
}

export default Homesec5