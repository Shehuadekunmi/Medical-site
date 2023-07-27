import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../styles/Contactsec4.css'

const Contactsec4 = () => {
  const [values, setValues] = useState({
    Name: '',
    Phone: '',
    Email: ''
  })

  const [error, setError] = useState({})

  const handleinput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleValidation = (event) => {
    event.preventDefault()
    let validationerror = {}
    console.log(values);
    if (values.Name.length < 5) {
      validationerror.Name = 'Min length is 5 '
    }
    if (values.Phone === '') {
      validationerror.Phone = 'Please provide your mobile number'
    }
    if (values.Email === '') {
      validationerror.Email = 'Email  requuire'
    } else if (!values.Email('@')) {
      validationerror.Email = 'Invalide Email'
    }

    setError({ ...validationerror })
    console.log(error);

    setTimeout(() =>{
      setError ({validationerror: {} })
    },  5000)

    setValues({
      Name: '',
      Phone:'',
      Email:''
    })

  }

  return (
    <div>
      <section className="C4">

        <Row className="g-2">
          <form onSubmit={handleValidation} >
            <div className=" d-flex justify-content-center mt-5 ">
              <div className='input ps-3 '>
                <input className='input ps-3 ' type="text" placeholder='Your Name*' value={values.Name}
                  name='Name' onChange={handleinput} />
                <div className="error">{error.Name}</div>
              </div>
              <div className='input ps-3 '>
                <input className='input ps-3 ' type="tel" placeholder='Phone*' value={values.Phone}
                  name='Phone' onChange={handleinput} />
                <div className="error">{error.Phone}</div>
              </div>
            </div>
      
            <Form.Floating className="mb-3  my-4 nam">
              <Form.Control
                id="floatingInputCustom" onChange={handleinput} name='Email' value={values.Email}
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">Email*</label>
              <div className="error">{error.Email}</div>
            </Form.Floating>

            <FloatingLabel className=' my-4 nam' controlId="floatingTextarea2" label="Messages*">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '180px' }}
              />
              <center> <button className='btn  text-white'>Send Message</button> </center>
            </FloatingLabel>

          </form>


        </Row>
      </section>
    </div>
  )
}

export default Contactsec4