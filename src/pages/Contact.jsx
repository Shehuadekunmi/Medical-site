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
      <div className="cont">
      <section className="C1">
        <center><h3> Contact Us</h3></center>
      </section>



      <section className="C2 d-flex">
        <Card style={{ width: '10rem', height: '10rem' }} className='car rounded-4 '>
          <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
          <Card.Text className="mt-3 text-white text-center fs-6"> 1, Ogunlesi str, onipanu, Lagos.</Card.Text>
        </Card>
        <Card style={{ width: '10rem', height: '10rem' }} className='car rounded-4 '>
          <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
          <Card.Text className="mt-3 text-white text-center fs-6"> (233) 768-0202
            (234) 799-1020</Card.Text>
        </Card>
        <Card style={{ width: '10rem', height: '10rem' }} className='car rounded-4 '>
          <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
          <Card.Text className="mt-3 text-white text-center fs-6"> www.medkit.com
            info@medkit.com</Card.Text>
        </Card>
        <Card style={{ width: '10rem', height: '10rem' }} className='car rounded-4 '>
          <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
          <Card.Text className="mt-3 text-white text-center fs-6"> 24 Hours a Day
            7 Days a Week</Card.Text>
        </Card>
      </section>



      <section className="C3"><img src={map} alt="" /></section>



      <section className="C4">
        <Row className="g-2">
          <Col md>
            <FloatingLabel className="mb-3 fs-4 mt-5" controlId="floatingInputGrid" label="Your Name*">
              <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel className="mb-3 fs-4 pb-5 mt-5">

              <FloatingLabel controlId="floatingInputGrid" label="Phone*">
                <Form.Control type="number" />
              </FloatingLabel>

            </FloatingLabel>
          </Col>

          <Form.Floating className="mb-3 fs-4 my-4">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email*</label>
          </Form.Floating>

          <FloatingLabel className='fs-4 my-4' controlId="floatingTextarea2" label="Messages*">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '150px' }}
            />
          </FloatingLabel>
        </Row>
      </section>

      </div>


      <section className="C5">
<h4>Subscribe</h4>
<p>Get our latest news & update regularly</p>
        
      </section>
    </div>
  )
}

export default Contact