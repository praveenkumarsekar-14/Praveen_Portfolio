import React from 'react'
import './Navbar.css'
import Praveen from '../../assets/Praveen Logo 2.svg' 

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Praveen} alt="" />
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Certifications</li>
        <li>Interests</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
