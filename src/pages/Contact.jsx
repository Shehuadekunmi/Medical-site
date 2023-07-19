import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import bg3 from '../assets/bg3.png'
import map from '../assets/map.png'
import '../styles/contact.css'
import Contactsec4 from '../components/Contactsec4';

const Contact = () => {
  return (

    <div className='contact'>

      <section className="C1">
        <center className='ade'><h3 > Contact Us</h3></center>
      </section>


      <div className="cont">
        <section className="C2 d-flex justify-content-evenly pt-5">
         <Card style={{ }} className='car rounded-4 sho '>
            <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
            <Card.Text className="mt-3 dark text-center fs-6"> 1, Ogunlesi str, onipanu, Lagos.</Card.Text>
          </Card>
          <Card  className='car rounded-4 sho '>
            <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
            <Card.Text className="mt-3 text-dark text-center fs-6"> (233) 768-0202
              (234) 799-1020</Card.Text>
          </Card>
          <Card  className='car rounded-4 sho'>
            <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
            <Card.Text className="mt-3 text-dark text-center fs-6"> www.medkit.com
              info@medkit.com</Card.Text>
          </Card>
            <div className="remove">
              <Card  className='car rounded-4 '>
                  <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
                  <Card.Text className="mt-3 text-dark text-center fs-6"> 24 Hours a Day
                    7 Days a Week</Card.Text>
                </Card>
            </div> 
        </section>



        <section className="C3"><img src={map} alt="" className='img-fluid' /></section>


          <Contactsec4/>
      
      </div>


      <section className="C5 my-5 py-5 d-block d-md-flex justify-content-around">
        <div><h4>Subscribe</h4>
        <p>Get our latest news & update regularly</p>
        </div>
        <div>
          <form>
            <input type="email" placeholder='Type Email Address' />
           <button>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact