import React, { useState } from 'react'
import logo from '../assets/logo.png'
import fr4 from '../assets/fr4.png'
import '../styles/login.css'
import facebk from'../assets/facebk.png'
import gmail from '../assets/gmail.png'
import insta from '../assets/insta.png'
import { Link } from 'react-router-dom';

const LogIn = () => {
const [values, setValues] = useState({
  Email: '',
  Password: '',
})

const [error, setError] = useState('')


function handleInput(event) {
  setValues({ ...values, [event.target.name]: event.target.value })
}


function handleValidation(event) {
  event.preventDefault();
  let validationerror = {}

  if (values.Email === '') {
      validationerror.Email = 'email required'
  } else if (!values.Email.includes('@')) {
      validationerror.Email = 'invalid email'
  }

  if (values.Password === '') {
      validationerror.Password = 'password required'
  } else if (values.Password.length < 8) {
      validationerror.Password = 'the minimum password lenght is 8'
  }

  setError({ ...validationerror })
  console.log(error);

  setTimeout(() => {
      setError({ validationerror: {} })
  }, 5000)

  setValues({
      Email: '',
      Password: '',
  })
}
  return (
    <div className='d-md-flex justify-content-center log'>

      <center className='fform'>
        
        <img src={logo} alt="logo" />
        <div className='medkit'>
          <h5>Log In to MedKit</h5>
          <img src={facebk} alt="" /> <img src={gmail} alt="" /> <img src={insta} alt="" />
          <p>Or use your email address:</p>
        </div>

        <form className='email' onSubmit={handleValidation} >

      <label htmlFor="Email">Email</label> <br />
         <div className='error'> {error.Email} </div>
          <input type="text" placeholder='elo@techstudio.com'  value={values.Email} 
          name='Email' className='form-control' onChange={handleInput} />
               
           

          <label htmlFor="Password" >Password</label> <br />
          <div className='error'> {error.Password} </div>
          <input type="password" placeholder='Min 8 characters ' name='Password' className='form-control'
           onChange={handleInput} value={values.Password}/>
                 

          <Link to='/SignUp' className='your' ><p>Forgot your password?</p></Link>

          <button className='btn'>Log In</button>

          <div className="spa">
            <p>Don’t have an account? <Link to='/SignUp' ><span> Sign Up </span></Link> </p>  
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