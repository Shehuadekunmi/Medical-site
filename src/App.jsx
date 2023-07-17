import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Appointment from './pages/Appointment'
// import Home1 from './pages/Home1'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          {/* <Route path='/' element= {<Home1/>}/> */}
          <Route path='/' element= {<Home/>}/>
          <Route path='/About' element = {<About/>}/>
          <Route path='/Contact' element = {<Contact/>}/>
          <Route path='/Services' element = {<Services/>}/>
          <Route path='./Appointment' element = {<Appointment/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
