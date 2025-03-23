import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/tbo.png'
import IMG2 from '../../assets/AppleSite.png'
import IMG3 from '../../assets/Currency.png'
import IMG4 from '../../assets/IMG45.png'
import IMG5 from '../../assets/xora.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { FaReact,FaDocker } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiTypescript, SiJavascript,SiNextdotjs } from 'react-icons/si'

const data = [
  {
    id: 1, 
    image: IMG1, 
    title: 'Tributação Online - A system for you to control and register taxes on your products. ',
    github: 'https://github.com/JoaoVictorLiz/tributacaoOnline',
    demo: 'https://joaovictorliz.github.io/tributacaoOnline/',
    react: <FaReact size={25}/>,
    tailwind: <SiTailwindcss size={25}/>,
    typescript: <SiTypescript size={25}/>
  },
  {
    id: 2, 
    image: IMG2, 
    title: 'Iphone 14 website, using 3D Iphone Model animation (ThreeJS).',
    github: 'https://github.com/JoaoVictorLiz/appleWebsite',
    demo: 'https://appleiphone-website.netlify.app',
    react: <FaReact size={25}/>,
    typescript: <SiJavascript size={25}/>
  },
  {
    id: 3, 
    image: IMG3, 
    title: 'Stay in the Know with Exchange Tracker',
    github: 'https://github.com/JoaoVictorLiz/currency_quote',
    demo: 'https://currency-quote.vercel.app',
    react: <SiNextdotjs size={25}/>,
    tailwind: <SiTailwindcss size={25}/>,
    typescript: <SiTypescript size={25}/>
  },
  {
    id: 4, 
    image: IMG4, 
    title: 'A Dev environment with react, typescript and tailwind css',
    github: 'https://github.com/JoaoVictorLiz/Dev-Environment-Docker',
    demo: 'https://hub.docker.com/repository/docker/baronsatoshi/react-docker/general',
    react: <FaDocker size={25}/>
  },
  {
    id: 5, 
    image: IMG5, 
    title: 'A Saas landing page built with React and Tailwind CSS - Xora',
    github: 'https://github.com/JoaoVictorLiz/saas_landing_page',
    demo: 'https://saas-landing-page-5o2s5b8qf-joao-victors-projects-7586da3b.vercel.app',
    react: <FaReact size={25}/>,
    tailwind: <SiTailwindcss size={25}/>,
  }
  
]

const Portfolio = () => {

  return (
    <section id='portfolio' >
      
      <h5 >My Recent Work</h5>
      <h2 >Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, react, tailwind, typescript}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <p className='portfolio__tech'>Techs: {react} {tailwind} {typescript}</p>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>         
                </div>
                
            </article>    
            )
          })
        }
      </div>

      <div className='divcenter'>
      <a href="https://github.com/JoaoVictorLiz?tab=repositories" className='btn btn-primary' target="_blank">See More</a>         
      </div>
     
    </section>
  )
}

export default Portfolio