import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Projects_Data from '../../assets/projects_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Projects = () => {
  return (
    <div id='projects' className='services'>
        <div className="services-title">
            <h1>Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Projects_Data.map((project,index)=>{
                return <div key={index} className="services-format">
                    <h3>{project.p_no}</h3>
                    <h2>{project.p_name}</h2>
                    <p>{project.p_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Projects
