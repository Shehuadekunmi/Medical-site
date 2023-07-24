import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import doc from '../assets/doc.png'
import { Link } from 'react-router-dom'
import heart from '../assets/heartbeat.png'
import fr from '../assets/fr.png'
import fr2 from '../assets/fr2.png'
import fr3 from '../assets/fr3.png'
import fr4 from '../assets/fr4.png'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { MdOutlineCall } from 'react-icons/md'
import livechat from '../assets/Live Chat.png'
import '../styles/home.css'
import Homesec3 from '../components/Homesec3'
import Homesec2 from '../components/Homesec2'
import Homesec5 from '../components/Homesec5'
const Home = () => {
  return (
    <div className='home'>
       <Header/>

      <section className='d-flex gap-3  one mb-'>
        <div className="pic"> <img src={doc} alt="doc" /></div>
        <div className="text mt-5">
          <h2 className='mt-5'>Get Access to Quick And <br /> Confidential Medical Services</h2>
          <div className="para"><p className='mt-3'>Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper nullam lacus tristique diam. Nulla sed rhoncus cras neque pulvinar. Pretium et adipiscing sociis commodo sit sem. Ac fusce vel facilisis pellentesque aliquam elentum. Massa morbi phasellus viverra nisi id.</p></div>
          <div start>
            <button className='btn rounded-4 text-white get '><Link to='/Signup' className='btn text-white fs-4'>Get Started</Link></button>
          </div>
        </div>
      </section>
      <div className=' raj'>
        <div className='dr'>
          <h1 className='text-white mt-4 '>Dr. Raj Spencer</h1>
          <h4>Consultant</h4>
          <button className=' btn bg-white book rounded-4'> <Link to='/Login' className='btn bg-white book'> Book Appointment</Link> </button>
        </div>
      </div>


      <Homesec2 />

      <Homesec3 />


      <section className="four my-5">
        <center><h2>MEET OUR DOCTORS</h2>
          <img src={heart} alt="heartbeat" /></center>

        <div className="doctors d-flex  mt-4 ">
          <div className="doc1">
            <img src={fr3} alt="frame29" />
            <h3>Dr. Jay Stephen</h3>
            <p>Optometrist</p>
            <BsFillChatLeftTextFill className='mx-4 fs-5 p' /> <MdOutlineCall className=' fs-5 p ' />  <img src={livechat} alt="" className='mx-4 fs-5 p' />
          </div>
          <div className="doc2">
            <img src={fr2} alt="frame34" />
            <h3>Dr. Ajay Verma</h3>
            <p>Gynecologist</p>
            <BsFillChatLeftTextFill className='mx-4 fs-5 p' /> <MdOutlineCall className=' fs-5 p' /> <img src={livechat} alt="" className='mx-4 fs-5 p' />
          </div>
          <div className="doc3">
            <img src={fr} alt="" />
            <h3>Dr. Aisha Joe</h3>
            <p>Paediatrician</p>
            <BsFillChatLeftTextFill className='mx-4 fs-5 p' /> <MdOutlineCall className=' fs-5 p' />  <img src={livechat} alt="" className='mx-4 fs-5 p' />
          </div>
          <div className="doc4">
            <img src={fr4} alt="frame4" />
            <h3>Dr. Stella Maris</h3>
            <p>General Physician</p>
            <BsFillChatLeftTextFill className='mx-4 fs-5 p' /> <MdOutlineCall className=' fs-5 p' />  <img src={livechat} alt="" className='mx-4 fs-5 p' />
          </div>
        </div>
      </section>


      <Homesec5 />

      <Footer/>

    </div>
  )
}

export default Home