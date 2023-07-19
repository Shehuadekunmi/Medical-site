import React from 'react'
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import'../styles/Contactsec4.css'

const Contactsec4 = () => {
  return (
    <div>
         <section className="C4">
          
          <Row className="g-2">
            <form >
              <div className=" d-flex gap-3 justify-content-center mt-5 ">
                <input className='input ps-3 ' type="text" placeholder='Your Name*' />
                <input className='input ps-3 ' type="number" placeholder='Phone*' />
              </div>
            </form>

            <Form.Floating className="mb-3  my-4 nam">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">Email*</label>
            </Form.Floating>

            <FloatingLabel className=' my-4 nam' controlId="floatingTextarea2" label="Messages*">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '180px' }}
              />
             <center> <button className='btn  text-white'>Send Message</button> </center>
            </FloatingLabel>
            
          </Row>
        </section> 
    </div>
  )
}

export default Contactsec4