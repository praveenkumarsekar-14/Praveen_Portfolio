import React from 'react'
import './Hero.css'
import { praveen } from '../../assets/praveen';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={praveen.praveen_profile2} alt="" />
      <h1><span>I'm Praveen Kumar Sekar,</span> frontend developer based in India</h1>
      <p>I am a frontend developer from Chennai, India with 3.4 years of experience in Accenture Solutions Private Limited</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
