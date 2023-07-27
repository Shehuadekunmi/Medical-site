import React from 'react'
import bg2 from '../assets/bg2.png'
import ambu1 from '../assets/ambu1.png'
import ambu2 from '../assets/ambu2.png'
import covid from '../assets/covid.png'
import covid2 from '../assets/covid2.png'
import gene from '../assets/gene.png'
import gene2 from '../assets/gene2.png'
import gyn from '../assets/gyn.png'
import gyn2 from '../assets/gyn2.png'
import optom from '../assets/optom.png'
import optom2 from '../assets/optom2.png'
import paed from '../assets/paed.png'
import paed2 from '../assets/paed2.png'
import'../styles/services.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Services = () => {
  return (
  <div>
      <Header/>

    <div className='services'>

      <section className="S1">
        <div className="A text-center mx-auto ps-1">
          <h4>Services</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Ac tellus sed proin ullamcorper arcu ut eget augue. Fermentum eget id massa morbi risus.</p>
        </div>
      </section>



      <section className="S2 d-flex justify-content-evenly   align-items-center my-5">

        <div className="S2-text">
          <hr className='hori'/>
          <h4>COVID-19 Vaccine Administration</h4>
         <div className="sho"> <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus ut suspendisse tortor eget sit senectus.</p> </div>
          <div className="disap">Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</div>
          <button className='btn rounded-4' >See Details</button>
        </div>

        <div className="S2-img  desk-img  "> <img src={covid} alt="covid" className='img-fluid' /></div>
        <div className="mobile-img"><img src={covid2} alt="covid" /></div>

      </section>



      <section className="S2 d-flex justify-content-evenly my-5">

        <div className="S2-img  desk-img "><img src={ambu1} alt="ambulance" className='img-fluid' /></div>
        <div className="mobile-img"><img src={ambu2} alt="ambu2" /></div>

        <div className="S2-text">
          <hr className='hori'/>
          <h4>Ambulance</h4>
          <div className="sho"> <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus ut suspendisse tortor eget sit senectus.</p> </div>
          <div className="disap">Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</div>
          <button className='btn rounded-4'>See Details</button>
        </div>
      </section>



      <section className="S4 d-flex justify-content-evenly my-5">
        <div className="A4 S2-text">
          <hr className='hori' />
          <h4>Gynecology</h4>
          <div className="sho"> <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus ut suspendisse tortor eget sit senectus.</p> </div>
          <div className="disap">Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</div>
          <button className='btn rounded-4' >See Details</button>
        </div>

        <div className="B4 S2-img desk-img"><img src={gyn} alt="Gynecology" className='img-fluid' /></div>
        <div className="mobile-img"><img src={gyn2} alt="Gynecology" /></div>
      </section>



      <section className="S5 d-flex justify-content-evenly my-5">
        <div className="A5 S2-img desk-img"><img src={paed} alt="Paediatrics" className='img-fluid'/></div>
        <div className="mobile-img"><img src={paed2} alt="Paediatrics" /></div>

        <div className="B5 S2-text">
          <hr className='hori' />
          <h4>Paediatrics</h4>
          <div className="sho"> <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus ut suspendisse tortor eget sit senectus.</p> </div>
          <div className="disap">Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</div>
          <button className='btn rounded-4'>See Details</button>
        </div>
      </section>



      <section className="S6 d-flex justify-content-evenly my-5">
        <div className="A6 S2-text">
          <hr className='hori' />
          <h4>Optometry</h4>
          <div className="sho"> <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus ut suspendisse tortor eget sit senectus.</p> </div>
          <div className="disap">Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</div>
          <button className='btn rounded-4'>See Details</button>
        </div>

        <div className="B6 S2-img desk-img"><img src={optom} alt="Optometry" className='img-fluid'/></div>
        <div className="mobile-img"><img src={optom2} alt="Optometry2" /></div>
      </section>



      <section className="S7 d-flex justify-content-evenly my-5">
        <div className="A7 S2-img desk-img"><img src={gene} alt="General Physician" className='img-fluid' /></div>
        <div className="mobile-img"><img src={gene2} alt="General" /></div>

        <div className="B7 S2-text">
          <hr className='hori' />
          <h4>General Physician</h4>
          <div className="sho"> <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales ut netus dictum tellus nunc ullamcorper quisque. Lectus in nisl viverra nisl faucibus. Id pharetra nisl a amet leo non mollis. Phasellus lectus ut suspendisse tortor eget sit senectus.</p> </div>
          <div className="disap">Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget sit senectus.</div>
          <button className='btn rounded-4'>See Details</button>
        </div>
      </section>

      <Footer/>
    </div>
    </div>
  )
}

export default Services