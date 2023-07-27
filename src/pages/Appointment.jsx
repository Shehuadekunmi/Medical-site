import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Appoint from '../assets/Appointment.png'
import line from '../assets/Line4.png'
import '../styles/login.css'
import { Link } from 'react-router-dom';
import '../styles/Appointment.css'
import Footer from '../components/Footer'

const Appointment = () => {
  const[values, setValues] = useState ({
    FirstName: '',
    LastName: '',
    Phone: '',
    Appointment: ''
  });

  // const [showAppointmentModal, setShowAppointmentModal] = useState(false)
  // if(showAppointmentModal && )
const [error, setError] = useState({})

function handleInput(event) {
  setValues({ ...values, [event.target.name]: event.target.value })
};

const handleSubmit = (e) =>{
e.preventDefault();
let submiterror = {}

if(values.FirstName === ''){
  submiterror.FirstName = 'Please fill this field'
}

if(values.LastName === ''){
  submiterror.LastName = 'Please fill this field'
}

if(values.Phone === ''){
  submiterror.Phone = 'Phone number require'
}
if(values.Appointment === ''){
  submiterror.Appointment = 'Please choose date for your appointment'
};

setError({...submiterror})
console.log(error);

setTimeout(() =>{
setError({submiterror: {}})
}, 5000)
  

setValues({
  FirstName: '',
  LastName: '',
  Phone:'',
  Appointment: ''
})
};

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

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='First Name*' value={values.FirstName} name='FirstName' onChange={handleInput} /> <br />
            <p className="error">{error.FirstName}</p>

            <input type="text" placeholder='Last Name*' value={values.LastName} name='LastName' onChange={handleInput} /> <br />
            <p className="error">{error.LastName}</p>

            <input type="number" placeholder='Phone no*' value={values.Phone} name='Phone' onChange={handleInput} /> <br />
            <p className="error">{error.Phone}</p>

            <input type="number" placeholder='Appointment Date*' value={values.Appointment} name='Appointment' onChange={handleInput} /> <br />
            <p className="error">{error.Appointment}</p>

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