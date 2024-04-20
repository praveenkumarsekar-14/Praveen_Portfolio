import React from 'react'
import './Interests.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import interests from '../../assets/interests'

const Interests = () => {
  return (
    <div className='interests'>
        <div className="interests-title">
            <h1>Interests</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="interests-container">
            {interests.map((interest,index)=>{
                return <div key={index} className='interests-format'>
                    <h2>{interest.i_name}</h2>
                    <img src={interest.i_img} alt="" />
                </div>
            })}
        </div>
    </div>  
  )
}

export default Interests

