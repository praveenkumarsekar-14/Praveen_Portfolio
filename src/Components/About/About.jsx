import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { praveen } from '../../assets/praveen'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='about-sections'>
        <div className="about-left">
            <img src={praveen.praveen_standing} alt="" />
        </div>
        <div className="about-right">
            <div className='about-para'>
            <p>I am an experienced Frontend Developer with professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organization, contributing to its success and growth</p>
             <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project</p>    
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML&CSS</p>
                    <hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>React JS</p>
                    <hr style={{width:"100%"}} />
                </div>
                <div className="about-skill">
                    <p>Javascript</p>
                    <hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>Git</p>
                    <hr style={{width:"60%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3.4+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>7+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3</h1>
            <p>PROFESSIONAL CERTIFICATIONS</p>
        </div>
      </div>
    </div>
  )
}

export default About