import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../styles/home.css'

const Header = () => {
  return (
    <div className='nave'>
     <Navbar expand="lg" className="bg-body-light nav">
      <Container className='d-flex justify-content-around'>
        <Navbar.Brand className=' fs-4 fw-bold'>
          <img src={logo} alt="logo" className='logo' />

        </Navbar.Brand>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
                <Link to ='/' className='text-decoration-none  fs-5 fw-light mx-3 hom'>Home</Link>
           
                <Link to='/about' className='text-decoration-none  fs-5 fw-light mx-3 abt' >About</Link>
                <Link to ='/Contact' className='text-decoration-none  fs-5 fw-light mx-3 con'>Contact</Link>
           
                <Link to='/Services' className='text-decoration-none  fs-5 fw-light mx-3 ser' >Services</Link>
          </Nav>

          <Nav className="ms-auto">
           
                <Link to ='/LogIn' className='text-decoration-none  fs-5 fw-light mx-3 hom'>Login</Link>
           
                <Link to='/Signup' className='text-decoration-none   fw-light mx-3' >
                <button className="btn sign rounded-3 text-white">SignUP</button>
                </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header