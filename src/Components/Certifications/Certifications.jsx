import React from 'react'
import './Certifications.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import certifications from '../../assets/certification'
import arrow_icon from '../../assets/arrow_icon.svg'

const Certifications = () => {
  return (
    <div id='certifications' className='mywork'>
        <div className="mywork-title">
            <h1>Professional Certifications</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="mywork-container">
        {certifications.map((certificate,index)=>{
            return <img key={index} src={certificate.c_img} alt=''  /> 
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Certifications;
