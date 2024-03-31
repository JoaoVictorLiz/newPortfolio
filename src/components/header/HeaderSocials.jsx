import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/joão-victor-liz-da-silveira-b347a71b5/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/JoaoVictorLiz" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/joaovc_liz/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials