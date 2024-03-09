import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Contact from './Contact'
import logo from '../images/logo.jpg'
import './MainNavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faSignInAlt, faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';



export default function MainNavBar() {
  return (
    
    <div className="wrapper">
    <div className="sidebar">
        <img className='row' src={logo} alt='logo' />
        <br/> <br/> <br/>
    <ul className='navbar'>
    <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
    <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link></li>
    <li><Link to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link></li>
    <li><Link to="/signup"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Link></li>
    <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Us</Link></li>
    </ul>
    </div>
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    


    </div>
  )
}
