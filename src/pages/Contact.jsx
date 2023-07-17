import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import bg3 from '../assets/bg3.png'
import map from '../assets/map.png'
import '../styles/contact.css'

const Contact = () => {
  return (

    <div className='contact'>

      <section className="C1">
        <center><h3> Contact Us</h3></center>
      </section>


      <div className="cont">
        <section className="C2 d-flex justify-content-evenly pt-5">
          <Card style={{ width: '10rem', height: '10rem' }} className='car rounded-4 '>
            <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
            <Card.Text className="mt-3 text-dark text-center fs-6"> 1, Ogunlesi str, onipanu, Lagos.</Card.Text>
          </Card>
          <Card style={{ width: '10rem', height: '10rem' }} className='car rounded-4 '>
            <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
            <Card.Text className="mt-3 text-dark text-center fs-6"> (233) 768-0202
              (234) 799-1020</Card.Text>
          </Card>
          <Card style={{ width: '10rem', height: '10rem' }} className='car rounded-4 '>
            <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
            <Card.Text className="mt-3 text-dark text-center fs-6"> www.medkit.com
              info@medkit.com</Card.Text>
          </Card>
          <Card style={{ width: '10rem', height: '10rem' }} className='car rounded-4 '>
            <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
            <Card.Text className="mt-3 text-dark text-center fs-6"> 24 Hours a Day
              7 Days a Week</Card.Text>
          </Card>
        </section>



        <section className="C3"><img src={map} alt="" /></section>



        <section className="C4">
          
          <Row className="g-2">
            <form >
              <div className=" d-flex gap-3 justify-content-center mt-5 ">
                <input className='input ps-3 fs-4' type="text" placeholder='Your Nmae*' />
                <input className='input ps-3 fs-4' type="number" placeholder='Phone*' />
              </div>
            </form>

            <Form.Floating className="mb-3 fs-4 my-4 nam">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">Email*</label>
            </Form.Floating>

            <FloatingLabel className='fs-4 my-4 nam' controlId="floatingTextarea2" label="Messages*">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '180px' }}
              />
             <center> <button className='btn fs-4 text-white'>Send Message</button> </center>
            </FloatingLabel>
            
          </Row>
        </section>

      </div>


      <section className="C5 my-5 py-5 d-flex justify-content-around">
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