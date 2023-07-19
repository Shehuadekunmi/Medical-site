import React from 'react'
import logo from '../assets/logo.png'
import fr4 from '../assets/fr4.png'
import '../styles/login.css'

const LogIn = () => {
  return (
    <div className='d-md-flex justify-content-md-around log'>

<center className='fform'>
<img src={logo} alt="logo" />
  <div className='medkit'>
     <h5>Log In to MedKit</h5>
     <img src="" alt="" />
 <p>Or use your email address:</p>
 </div>
 <form className='email' >
  <label htmlFor="Email">Email</label> <br />
  <input type="Email" placeholder='elo@techstudio.com' /> <br />

  <label htmlFor="Password" >Password</label> <br />
  <input type="number" placeholder='Min 8 characters' />

  <p>Forgot your password?</p>

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