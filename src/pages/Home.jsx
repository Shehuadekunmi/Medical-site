import React from 'react'
import doc from '../assets/doc.png'
import { Link } from 'react-router-dom'
import bot from '../assets/bott.png'
import heart from '../assets/heartbeat.png'
import amb from '../assets/amb.png'
import doct from '../assets/doct.png'
import clock from '../assets/clock.png'
import fr from '../assets/fr.png'
import fr2 from '../assets/fr2.png'
import fr3 from '../assets/fr3.png'
import fr4 from '../assets/fr4.png'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { MdOutlineCall } from 'react-icons/md'
import '../styles/home.css'
const Home = () => {
  return (
    <div className='home'>
      <section className='d-flex gap-3  one mb-'>
        <div className="pic"> <img src={doc} alt="doc" /></div>
        <div className="text mt-5">
          <h2 className='mt-5'>Get Access to Quick And <br /> Confidential Medical Services</h2>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper nullam lacus tristique diam. Nulla sed rhoncus cras neque pulvinar. Pretium et adipiscing sociis commodo sit sem. Ac fusce vel facilisis pellentesque aliquam elentum. Massa morbi phasellus viverra nisi id.</p>
          <button className='btn rounded-4 text-white get '>Get Started</button>
        </div>
      </section>
      <div className='my raj'>
        <div></div>
        <div>
          <h1 className='text-white mt-4 '>Dr. Raj Spencer</h1>
          <h4>Consultant</h4>
          <button className=' btn bg-white book rounded-4'> <Link to='#' className='btn bg-white book'> Book Appointment</Link> </button>
        </div>
      </div>



      <scetion className="two d-flex flex-wrap mb-5 mx-2 ">
        <div className="textt">
          <h3 className='ms-5'>COVID-19 VACCINE ADMINISTRATION</h3>
          <p className='ms-5'>Lorem ipsum dolor sit amet consectetur. Dictum massa feugiat feugiat mauris ipsum risus. Vulputate elit vel dui fames auctor ultrices. Quis pellentesque amet massa sed purus adipiscing. Ornare faucibus sed id scelerisque odio habitant urna in nibh. Gravida nulla elit arcu scelerisque. Viverra lectus ullamcorper duis sed leo habitasse. Ac venenatis eget lacinia netus eros amet nunc. Vitae blandit nunc velit pretium et vitae morbi consequat. Id mi amet dui non leo tellus nunc pulvinar. Tortor in justo a in egestas proin ipsum.
            Lectus ut lobortis quam egestas consequat et aliquet ipsum vel. Risus eu pharetra cras gravida. Nunc in eget semper maecenas ligula amet et. Mattis ullamcorper amet at metus. Diam pretium pulvinar mattis rutrum nunc risus. Ut ipsum duis egestas non. Dictum nunc sodales nisi senectus adipiscing feugiat. Sed arcu pellentesque urna dolor ultrices condimentum risus. Interdum morbi mauris in a morbi felis tincidunt. Aenean enim sed pellentesque arcu. Lorem posuere elit est in interdum tempus.
          </p>
          <div className='ms-5 reg'><Link className="btn bg-white fs-5 rounded-4 reg-now ">Register Now</Link></div>
        </div>
        <div className="img ms-5 "><img src={bot} alt="bottle" /></div>
      </scetion>




      <section className="three">
        <center><h3 className='fw-bold'>MEDKIT SPECIALITIES</h3>
          <img src={heart} alt="heartbeat" /></center>

        <div className="container d-flex flex-wrap align-items-center justify-content-evenly ">
          <center className="amb ">
            <img src={amb} alt="Ambulance" className='mt-1' />
            <h5 className='mt-3'>FASTEST AMBULANCE</h5>
            <p className='mt-3'>We provide you with experienced <br /> and highly professional doctors <br /> with the aim of providing <br /> exceptional care.</p>
          </center>
<div className="vl"></div>
          <center className="doc">
            <img src={doct} alt="PROFESSIONAL DOCTORS" className='mt-1' />
            <h5 className='mt-3'>PROFESSIONAL DOCTORS</h5>
            <p className='mt-3'>We provide you with experienced <br /> and highly professional doctors <br /> with the aim of providing <br /> exceptional care.</p>
          </center>

          <center className="clock">
            <img src={clock} alt="clock" className='mt-1' />
            <h5 className='mt-3'>BEST SERVICES</h5>
            <p className='mt-3'>We are committed to providing <br /> healthcare services with the <br /> consideration of patients satisfaction. <br /> Our patients come first!</p>
          </center>
        </div>
      </section>



      <section className="four my-5">
        <center><h2>MEET OUR DOCTORS</h2>
          <img src={heart} alt="heartbeat" /></center>

        <div className="doctors d-flex flex-wrap mx- mt-4 justify-content-evenly">
          <center className="doc1">
            <img src={fr3} alt="frame29" />
            <h3>Dr. Jay Stephen</h3>
            <p>Optometrist</p>
            <BsFillChatLeftTextFill className='mx-4 fs-5 p' /> <MdOutlineCall className=' fs-5 p ' />
          </center>
          <center className="doc2">
            <img src={fr2} alt="frame34" />
            <h3>Dr. Ajay Verma</h3>
            <p>Gynecologist</p>
            <BsFillChatLeftTextFill className='mx-4 fs-5 p' /> <MdOutlineCall className=' fs-5 p' />
          </center>
          <center className="doc3">
            <img src={fr} alt="" />
            <h3>Dr. Aisha Joe</h3>
            <p>Paediatrician</p>
            <BsFillChatLeftTextFill className='mx-4 fs-5 p' /> <MdOutlineCall className=' fs-5 p' />
          </center>
          <center className="doc4">
            <img src={fr4} alt="frame4" />
            <h3>Dr. Stella Maris</h3>
            <p>General Physician</p>
            <BsFillChatLeftTextFill className='mx-4 fs-5 p' /> <MdOutlineCall className=' fs-5 p' />
          </center>
        </div>
      </section>




      <section className="five">
        <center><h2>Patients  Say</h2></center>
        <div className='d-flex justify-content-evenly me-5'>
          <div className='mt-3 med'><p>“I had a wonderful experience with Medkit. <br /> They ensured my health  was greatly taken <br /> care of. I highly recommend Medkit.”</p>
            <h3>Aliya Roll</h3></div>
          <div className='mt-3 med'><p>“My treatment was second to none and the <br /> staffs  of Medkit were polite and caring”</p>
            <h3>Elo Zona</h3></div>
        </div>
        <center className='mt-3'><img src={heart} alt="hearbeat" /></center>
        <center className='my-5 day'>
          <h1>We Operate 24h a day  - 7 days a week!</h1>
          <Link className="btn link mt-1 rounded-top-2">REPORT A PROBLEM</Link>
        </center>
      </section>































    </div>
  )
}

export default Home