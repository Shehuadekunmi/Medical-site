import React from 'react'
import  logo from '../assets/Logo.png'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import '../styles/footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <section className='d-flex justify-content-around mb-5'>
                <div className="com mt-5 p-5">
                    <img src={logo} alt="logo" />
                    <p className='my-3'>Access to medical services with Certified Medical <br /> Consultants on Medkit.</p>
                    <a href="#">Contact@medkit.com</a>
                    <p>(233) 678-0202</p>
                    <AiOutlineTwitter className='mx-2 a' /> <BsFacebook className='mx-2 a'  /> <FaInstagramSquare className='mx-2 a'  />

                </div>
                <div className="butt d-flex justify-content-around me-5 my-5 py-5">
                    <div className="on me-5">
                        <p className='text-white fs-5'>Information</p>
                        <ul className=''>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Special Offers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className="tw me-5">
                        <p className='text-white fs-5'>Quick Links</p>
                        <ul>
                            <li><a href="#">Our Doctors</a></li>
                            <li><a href="#">Book an Appointment</a></li>
                            <li><a href="#">Free Consultation</a></li>
                        </ul>
                    </div>
                    <div className="thr me-5">
                        <p className='text-white fs-5'>Company</p>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Footer