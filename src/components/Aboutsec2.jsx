import React from 'react'
import '../styles/aboutsec2.css'
import micro from '../assets/micro.png'
import teles from '../assets/teles.png'
import { FiCheckSquare } from 'react-icons/fi'

const Aboutsec2 = () => {
    return (
        <div>

            <section className="Aatwo ">
                <center></center>
                <div className='Aa d-flex justify-content-between  mt-3 mx-auto border  px-1'>
                    <div className="im">
                        <img src={micro} alt="" className='img-fluid' />
                    </div>
                    <div className='desk'>
                        <h6 className=' us'>About Us</h6>
                        <h6>We Are Thoroughly Committed To Making Your Health Our Priority</h6>
                        <div className="des"> <p>Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae duis leo lacus pellentesque sit. Turpis amet ut tortor scelerisque risus adipiscing et non. Interdum ac integer pretium aliquam auc. Tristique aliquet nisl odio risus diam. Morbi pellentesque ultricis id faucibus aliquam sed sit sed. Proin fermentum mauris mi aliquet sed vel. Quam id sed congue diam tincidunt enim. </p> </div>
                        <div className="mob"><p>Lorem ipsum dolor sit amet consectetur. Sed nec ornare vitae.Morbi pellentesque ultricis id faucibus aliquam sed sit sed. Proiermentum mauris mi aliquet sed vel. Quam id secongue diam tincidunt enim. </p></div>
                        <button className='btn rounded-4 text-white button'>Learn More</button>
                    </div>
                </div>
                <hr className="horizontal" />
                <div className='why mx-auto px-1 '>
                            <h6>Why Patients Choose Our Hospital?</h6>
                            <div className='fi'> <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
                                <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
                                <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
                                <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
                                <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
                                <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
                                <p> <FiCheckSquare /> Lorem ipsum dolor sit amet consectetur vestibulum.</p>
                            </div>
                 </div> 

               
                <div className="B ">
                    <div className="teles"><img src={teles} alt="" /></div>
                </div>
                <div className="C d-md-flex  gap-5 px-4 cabo">

                    <div className="story text-center">
                        <h4>Our Story</h4>

                        <div className="des"><p>Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus quis penatibus sodales cursus. Velit massa dolor leo fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum in dolor.
                            Integer arcu cursus morbi mauris posuere. Risus pulvinar et nulla in dignissim lacus suscipit maecenas luctus. Non orci ornare nulla ut sit gravida dui fermentum sed. Semper pharetra urna pretium massa ut fermentum etiam amet. Elementum a sollicitudin viverra tempus a mi nibh aliquam nisl.</p>
                        </div>

                        <div>
                            <p className='mobile'>Lorem ipsum dolor sit amet consectetur. Cras viverra vulputate scelerisque sem. Nullam lectus mauris malesuada rhoncus. Risus quis penatibus sodales cursus. Velit massa dolor leo fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum in dolor.</p>
                        </div>

                        <button className='btn rounded-4 text-white button'>Learn More</button>
                    </div>

                    <div className="vision text-center">
                        <h4>Our Vision</h4>
                        <hr className='hrr' />
                        <p>Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum in.</p>

                        <h4>Mission</h4>
                        <hr className='hrr' />
                        <p>Lorem ipsum dolor sit amet consectetur. Velit massa dolor leo fermentia amet sit mattis. Sit praesent imperdiet pretium enim ut bibendum in.</p>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Aboutsec2