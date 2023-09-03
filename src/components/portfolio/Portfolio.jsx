import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'

const data = [
  {
    id: 1, 
    image: IMG1, 
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20514766-Seaker-Website',
    react: <FaReact size={25}/>,
    tailwind: <SiTailwindcss size={25}/>,
    typescript: <SiTypescript size={25}/>
  },
  {
    id: 2, 
    image: IMG2, 
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20514766-Seaker-Website',
    react: <FaReact size={25}/>,
    tailwind: <SiTailwindcss size={25}/>,
    typescript: <SiTypescript size={25}/>
  },
  {
    id: 3, 
    image: IMG3, 
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20514766-Seaker-Website',
    react: <FaReact size={25}/>,
    tailwind: <SiTailwindcss size={25}/>,
    typescript: <SiTypescript size={25}/>
  },
  {
    id: 4, 
    image: IMG4, 
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20514766-Seaker-Website',
    react: <FaReact size={25}/>,
    tailwind: <SiTailwindcss size={25}/>,
    typescript: <SiTypescript size={25}/>
  },
  {
    id: 5, 
    image: IMG5, 
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20514766-Seaker-Website',
    react: <FaReact size={25}/>,
    tailwind: <SiTailwindcss size={25}/>,
    typescript: <SiTypescript size={25}/>
  },
  {
    id: 6, 
    image: IMG6, 
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20514766-Seaker-Website',
    react: <FaReact size={25}/> ,
    tailwind: <SiTailwindcss size={25}/>,
    typescript: <SiTypescript size={25}/>
  },
  
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
     
    </section>
  )
}

export default Portfolio