import React from 'react'
import './Hero.css'
import { praveen } from '../../assets/praveen';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={praveen.praveen_profile2} alt="" />
      <h1><span>I'm Praveen Kumar Sekar,</span> frontend developer based in India</h1>
      <p>I am a frontend developer from Chennai, India with 3.2 years of experience in Accenture Solutions Private Limited</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
