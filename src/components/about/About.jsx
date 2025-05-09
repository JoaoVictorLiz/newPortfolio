import React from 'react'
import "./about.css"
import ME from "../../assets/EU.jpg"
import {FaAward} from "react-icons/fa"
import {VscFolderLibrary} from 'react-icons/vsc'




const About = () => {


  return (
    <section id='about'>
    
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>25+ Complete Projects</small>
            </article>
          </div>
          <p className='about_text'>
          Hello, I am a <strong> Full Stack Developer </strong> ,
          with knowledge in software architecture, interface design, and good programming practices, I am able to create robust and scalable solutions to meet the market demand.
          Furthermore, I am passionate about technology and always seeking to learn and apply new tools and techniques to improve my performance and offer high-quality solutions to my clients.
          If you need a Full Stack Developer, don't hesitate to contact me. I am ready to bring my skills and experience to your next project.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
     
      
    </section>
  )
}

export default About