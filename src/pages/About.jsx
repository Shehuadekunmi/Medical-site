import React from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import micro from '../assets/micro.png'
import teles from '../assets/teles.png'
import face from '../assets/face.png'
import Card from 'react-bootstrap/Card'
import'../styles/about.css'

const About = () => {
  return (
    <div className='about'>
      <section className="Aone">
        <center>
          <h5 className='text-white text-center '>Health is Wealth</h5>
          <p className='text-white text-center '>Health is most important in your daily life. We strive to offer nothing but quality healthcare. You are rest assured your wellbeing and health are in safe hands.</p>
          <button className='btn rounded-4 bg-white'>Find a Doctor</button>
        </center>
      </section>



      <section className="Atwo my-5">
        <div className='A d-flex justify-content-evenly'>
          <div className="im"><img src={micro} alt="" /></div>
          <div>
            <p className='fs-4 '>About Us</p>
            <h6>We Are Thoroughly Committed To Making Your Health Our Priority</h6>
            <p>Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae duis leo lacus pellentesque sit. Turpis amet ut tortor scelerisque risus adipiscing et non. Interdum ac integer pretium aliquam auc. Tristique aliquet nisl odio risus diam. Morbi pellentesque ultricis id faucibus aliquam sed sit sed. Proin fermentum mauris mi aliquet sed vel. Quam id sed congue diam tincidunt enim. </p>
            <button className='btn rounded-4'>Learn More</button>
            <hr />
            <div>
              <h6>Why Patients Choose Our Hospital?</h6>
              <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
              <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
            </div>
          </div>

        </div>
        <div className="B d-flex">
          <div className="teles"><img src={teles} alt="" /></div>
        </div>


        <div className="C d-flex justify-content-around">
          <div className="story">
            <h4>Our Story</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus quis penatibus sodales cursus. Velit massa dolor leo fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum in dolor.
              Integer arcu cursus morbi mauris posuere. Risus pulvinar et nulla in dignissim lacus suscipit maecenas luctus. Non orci ornare nulla ut sit gravida dui fermentum sed. Semper pharetra urna pretium massa ut fermentum etiam amet. Elementum a sollicitudin viverra tempus a mi nibh aliquam nisl.</p>
            <button className='btn rounded-4'>Learn More</button>
          </div>
          <div className="vision">
            <h4>Our Vision</h4>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum in.</p>

            <h4>Mission</h4>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum in.</p>
          </div>
        </div>
      </section>



      <scetion className="Athree d-flex justify-content-evenly">
        <div>
          <div className=" my-5 d-flex gap-5 ms-5">
            <Card style={{ width: '10rem', height: '8rem' }} >
              <Card.Subtitle className="mb-2 my-4 text-muted text-center fs-5">98%</Card.Subtitle>
              <Card.Text className="mt-3 text-muted text-center fs-6"> Satisfied Patients</Card.Text>
            </Card>
            <Card style={{ width: '10rem', height: '8rem' }} >
              <Card.Subtitle className="mb-2 my-4 text-muted text-center fs-5">20 +</Card.Subtitle>
              <Card.Text className="mt-3 text-muted text-center fs-5"> Team Members </Card.Text>
            </Card>
          </div>
          <div className=" my-5 d-flex gap-5 ms-5">
            <Card style={{ width: '10rem', height: '8rem' }} >
              <Card.Subtitle className="mb-2 my-4 text-muted text-center fs-5">15 +</Card.Subtitle>
              <Card.Text className="mt-3 text-muted text-center fs-5"> Merit Awards </Card.Text>
            </Card>
            <Card style={{ width: '10rem', height: '8rem' }} >
              <Card.Subtitle className="mb-2 my-4 text-muted text-center fs-5">10 +</Card.Subtitle>
              <Card.Text className="mt-3 text-muted text-center fs-5"> Experience </Card.Text>
            </Card>
          </div>
        </div>
        <div className="face"><img src={face} alt="" /></div>
      </scetion>
    </div>
  )
}

export default About