import React from 'react'
import heart from '../assets/heartbeat.png'
import amb from '../assets/amb.png'
import doct from '../assets/doct.png'
import clock from '../assets/clock.png'
import '../styles/homesec3.css'

const Homesec3 = () => {
  return (
    <div>
        <section className="three">
        <center><h3 className='fw-bold'>MEDKIT SPECIALITIES</h3>
          <img src={heart} alt="heartbeat" /></center>

        <div className="container d-block d-md-flex justify-content-evenly my-4  ">
          <div className="amb text-center ">
            <img src={amb} alt="Ambulance" className='mt-1' />
            <h5 className='mt-3 '>FASTEST AMBULANCE</h5>
            <p className='mt-3 '>We provide you with experienced <br /> and highly professional doctors <br /> with the aim of providing <br /> exceptional care.</p>
          </div>
          <div className="test"></div>
          <div className="doc text-center">
            <img src={doct} alt="PROFESSIONAL DOCTORS" className='mt-1' />
            <h5 className='mt-3 '>PROFESSIONAL DOCTORS</h5>
            <p className='mt-3 '>We provide you with experienced <br /> and highly professional doctors <br /> with the aim of providing <br /> exceptional care.</p>
          </div> 
          <div className="test"></div>
          <div className="clock text-center">
            <img src={clock} alt="clock" className='mt-1' />
            <h5 className='mt-3 '>BEST SERVICES</h5>
            <p className='mt-3 '>We are committed to providing <br /> healthcare services with the <br /> consideration of patients satisfaction. <br /> Our patients come first!</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Homesec3