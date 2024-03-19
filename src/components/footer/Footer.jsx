import React from 'react'
import "./footer.css"
import {FaGithub} from 'react-icons/fa'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'


const Footer = () => {



  return (
    <footer >
     
      <a href="#" className='footer__logo'>João Victor</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/JoaoVictorLiz" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/joaovc_liz/" target="_blank"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/joão-victor-liz-da-silveira-b347a71b5/" target="_blank"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JoaoVIctorLiz</small>
      </div>
  
    </footer>
  )
}

export default Footer