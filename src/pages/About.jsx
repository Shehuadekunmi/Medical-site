import React from 'react'

import {AiOutlineRight} from 'react-icons/ai'

import face from '../assets/face.png'
import Card from 'react-bootstrap/Card'
import'../styles/about.css'
import Aboutsec2 from '../components/Aboutsec2'

const About = () => {
  return (
    <div className='about'>
      <section className="Aone">
        <center>
          <h5 className='text-white text-center '>Health is Wealth</h5>
          <p className='text-white text-center '>Health is most important in your daily life. We strive to offer nothing but quality healthcare. You are rest assured your wellbeing and health are in safe hands.</p>
          <button className='btn rounded-4 bg-white find '>Find a Doctor <AiOutlineRight/></button>
        </center>
      </section>


<Aboutsec2/>



      <scetion className="Athree  d-block d-md-flex justify-content-evenly align-items-center">
        <div className='disappear'>
          <div className=" my-5  d-flex gap-5  toyo">
            <Card style={{ width: '9rem', height: '10rem' }} className='car rounded-4 '>
              <Card.Subtitle className="mb-2 my-4  text-center fs-5">98%</Card.Subtitle>
              <Card.Text className="mt-3 text-white text-center fs-6"> Satisfied Patients</Card.Text>
            </Card>
            <Card style={{ width: '9rem', height: '10rem' }} className='car rounded-4' >
              <Card.Subtitle className="mb-2 my-4 text-white text-center fs-5">20 +</Card.Subtitle>
              <Card.Text className="mt-3 text-white text-center fs-5"> Team Members </Card.Text>
            </Card>
          </div>
          <div className=" my-5 d-flex gap-5  toyo">
            <Card style={{ width: '9rem', height: '10rem' }} className='car rounded-4'>
              <Card.Subtitle className="mb-2 my-4 text-white text-center fs-5">15 +</Card.Subtitle>
              <Card.Text className="mt-3 text-white text-center fs-5"> Merit Awards </Card.Text>
            </Card>
            <Card style={{ width: '9rem', height: '10rem' }}className='car rounded-4' >
              <Card.Subtitle className="mb-2 my-4 text-white text-center fs-5">10 +</Card.Subtitle>
              <Card.Text className="mt-3 text-white text-center fs-5"> Experience </Card.Text>
            </Card>
          </div>
        </div>
        <div className="face mb-2"><img src={face} alt="" className='mask img-fluid' /></div>
      </scetion>
    </div>
  )
}

export default About