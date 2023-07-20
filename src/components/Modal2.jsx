import React from 'react'
import { Link } from 'react-router-dom';

const Modal2 = () => {
  return (
    <div>



<Link to ='/' className='text-decoration-none  fs-5 fw-light mx-3 hom'>Home</Link>
           
           <Link to='/about' className='text-decoration-none  fs-5 fw-light mx-3 abt' >About</Link>
           <Link to ='/Contact' className='text-decoration-none  fs-5 fw-light mx-3 con'>Contact</Link>
      
           <Link to='/Services' className='text-decoration-none  fs-5 fw-light mx-3 ser' >Services</Link>
           <Link to ='/LogIn' className='text-decoration-none  fs-5 fw-light mx-3 hom'>Login</Link>
           
           <Link to='/Signup' className='text-decoration-none   fw-light mx-3' >
           <button className="btn sign rounded-3 text-white">SignUP</button>
           </Link>



    </div>
  )
}

export default Modal2