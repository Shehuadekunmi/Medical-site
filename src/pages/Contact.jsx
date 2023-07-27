import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import bg3 from '../assets/bg3.png'
import map from '../assets/map.png'
import '../styles/contact.css'
import Contactsec4 from '../components/Contactsec4';
import group55 from '../assets/Group 55.png'
import group56 from '../assets/Group 56.png'
import group57 from '../assets/Group 57.png'
import group58 from '../assets/Group 58.png'

const Contact = () => {
  return (
 <div className='contact'>
   <Header/>

      <section className="C1">
        <center className='ade'><h3 > Contact Us</h3></center>
      </section>


      <div className="cont">
        <section className="C2 d-flex justify-content-evenly pt-5">
         <Card style={{ }} className='car rounded-4 sho '>
            <Card.Subtitle className=" my-2 text-center "><img src={group55} alt="" /></Card.Subtitle>
            <Card.Text className=" dark text-center "> 1, Ogunlesi str, <br /> onipanu, Lagos.</Card.Text>
          </Card>
          <Card  className='car rounded-4 sho '>
            <Card.Subtitle className=" my-2 text-center "><img src={group56} alt="" /></Card.Subtitle>
            <Card.Text className=" dark text-center "> (233) 768-0202 <br />
              (234) 799-1020</Card.Text>
          </Card>
          <Card  className='car rounded-4 sho'>
            <Card.Subtitle className=" my-2 text-center "><img src={group57} alt="" /></Card.Subtitle>
            <Card.Text className=" dark text-center "> www.medkit.com
              info@medkit.com</Card.Text>
          </Card>
            <div className="remove">
              <Card  className='car rounded-4 '>
                  <Card.Subtitle className=" my-2 text-center "><img src={group58} alt="" /></Card.Subtitle>
                  <Card.Text className=" dark text-center "> 24 Hours a Day <br />
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

      <Footer/>
    </div>
  )
}

export default Contact