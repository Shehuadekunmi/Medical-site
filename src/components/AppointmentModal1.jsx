import React from 'react'
import bell from '../assets/bell.png'
import '../styles/AppointmentModal1.css'

const AppointmentModal1 = () => {
  return (
    <div className='appmodal text-center'>
<div>
    <div className="succ"> <h5 className='text-white'>Appointment Successful!</h5> </div>
    <img src={bell} alt="bell" />
    <p>Go back to home page</p>
</div>

 <hr />

 <button className='btn text-white'>Continue</button>

    </div>
  )
}

export default AppointmentModal1