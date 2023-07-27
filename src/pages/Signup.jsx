import React, { useState } from 'react'
import logo from '../assets/logo.png'
import signin from '../assets/signin.png'
import '../styles/login.css'
import facebk from'../assets/facebk.png'
import gmail from '../assets/gmail.png'
import insta from '../assets/insta.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [values, setValues] = useState({
    FullName: '',
    Email: '',
    Password: '',

})
const [error, setError] = useState({})

function handleInput(event) {
    setValues({ ...values, [event.target.name]: event.target.value })
}

function handleValidation(event) {
    event.preventDefault();
    let validationerror = {}


    if(values.FullName === ''){
      validationerror.FullName = 'Name can not be empty'
    } 

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
    }, 3000)

    setValues({
        FirstName: '',
        Email: '',
        Password: '',
    })
}



  return (
    <div className='d-md-flex justify-content-center log'>

<center className='fform'>
        <img src={logo} alt="logo" />
        <div className='medkit'>
          <h5>Create an Account</h5>
          <img src={facebk} alt="" /> <img src={gmail} alt="" /> <img src={insta} alt="" />
          <p>Or use your email address:</p>
        </div>
        <form className='email' onSubmit={handleValidation} >
        <label htmlFor="Email">Full Name</label> <br />
        <div className='error'>{error.FullName}</div>
          <input type="text" placeholder='Aisha Oyelola' name='FullName'  onChange={handleInput}
          value={values.FullName} /> <br />
          

          <label htmlFor="Email">Email</label> <br />
          <div className='error'>{error.Email}</div>
          <input type="Email" placeholder='elo@techstudio.com'  name='Email' onChange={handleInput}
          value={values.Email}/> <br />

          <label htmlFor="Password" >Password</label> <br />
          <div className='error'>{error.Password}</div>
          <input type="password" placeholder='Min 8 characters' name='Password' onChange={handleInput}
          value={values.Password} />

          <button className='btn'>Sign Up</button> 

          <div className="spa">
            <p>Don’t have an account? <span> <Link to='/Login' className='text-decoration-none'>Log In </Link> </span> </p>
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