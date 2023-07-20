import React from 'react'
import logo from '../assets/logo.png'
import signin from '../assets/signin.png'
import '../styles/login.css'
import facebk from'../assets/facebk.png'
import gmail from '../assets/gmail.png'
import insta from '../assets/insta.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='d-md-flex justify-content-center log'>

<center className='fform'>
        <img src={logo} alt="logo" />
        <div className='medkit'>
          <h5>Log In to MedKit</h5>
          <img src={facebk} alt="" /> <img src={gmail} alt="" /> <img src={insta} alt="" />
          <p>Or use your email address:</p>
        </div>
        <form className='email' >
        <label htmlFor="Email">Full Name</label> <br />
          <input type="Email" placeholder='Aisha Oyelola' /> <br />

          <label htmlFor="Email">Email</label> <br />
          <input type="Email" placeholder='elo@techstudio.com' /> <br />

          <label htmlFor="Password" >Password</label> <br />
          <input type="number" placeholder='Min 8 characters' /> <br />

          <Link to='/Appointment' className='btn '> <button className='btn' style={{width:'260px'}}>Sign Up</button> </Link>

          <div className="spa">
            <p>Don’t have an account? <span> <Link to='/Login' className='btn '>Log In </Link> </span> </p>
          </div>

        </form>
      </center>

      <div className='login'>
        <img src={signin} alt="Doctors" className='img-fluid' style={{height:'590px'}} />
      </div>

    </div>
  )
}

export default Signup