import React from 'react'
import bot from '../assets/bott.png'
import { Link } from 'react-router-dom'
import'../styles/homesec2.css'

const Homesec2 = () => {
  return (
    <div className='twoo my-3 px-3'>
      <section className="two d-block d-md-flex justify-content-around align-items-center flex-row-reverse">
          <div className="covid-img">
            <img src={bot} className='img-fluid' alt="bottle" />
            </div>
            <div className="covid-text">
              <div className="">
                <h3 className=''>COVID-19 VACCINE ADMINISTRATION</h3>
              </div>
              <div className="">
                <p className=''>Lorem ipsum dolor sit amet consectetur. Dictum massa feugiat feugiat mauris ipsum risus. Vulputate elit vel dui fames auctor ultrices. Quis pellentesque amet massa sed purus adipiscing. Ornare faucibus sed id scelerisque odio habitant urna in nibh. Gravida nulla elit arcu scelerisque. Viverra lectus ullamcorper duis sed leo habitasse. Ac venenatis eget lacinia netus eros amet nunc. Vitae blandit nunc velit pretium et vitae morbi consequat. Id mi amet dui non leo tellus nunc pulvinar. Tortor in justo a in egestas proin ipsum.
                Lectus ut lobortis quam egestas consequat et aliquet ipsum vel. Risus eu pharetra cras gravida. Nunc in eget semper maecenas ligula amet et. Mattis ullamcorper amet at metus. Diam pretium pulvinar mattis rutrum nunc risus. Ut ipsum duis egestas non. Dictum nunc sodales nisi senectus adipiscing feugiat. Sed arcu pellentesque urna dolor ultrices condimentum risus. Interdum morbi mauris in a morbi felis tincidunt. Aenean enim sed pellentesque arcu. Lorem posuere elit est in interdum tempus.
                </p>
              </div>
              <div className=''><Link to='/Login' className="btn bg-white fs-5 mx-auto mb-3 rounded-4">Register Now</Link></div>
            </div>   
        
      </section>   
    </div>
  )
}

export default Homesec2