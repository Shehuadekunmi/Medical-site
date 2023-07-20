import React from 'react'
import logo from '../assets/logo.png'
import fr4 from '../assets/fr4.png'
import '../styles/login.css'
import facebk from'../assets/facebk.png'
import gmail from '../assets/gmail.png'
import insta from '../assets/insta.png'
import { Link } from 'react-router-dom';

const LogIn = () => {
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
          <label htmlFor="Email">Email</label> <br />
          <input type="Email" placeholder='elo@techstudio.com' /> <br />

          <label htmlFor="Password" >Password</label> <br />
          <input type="number" placeholder='Min 8 characters' />

          <Link to='/Appointment' className='your' ><p>Forgot your password?</p></Link>

          <button className='btn'>Log In</button>

          <div className="spa">
            <p>Don’t have an account? <span> Sign Up </span> </p>
          </div>

        </form>
      </center>

      <div className='login'>
        <img src={fr4} alt="Doctors" className='img-fluid' />
      </div>



    </div>
  )
}

export default LogIn