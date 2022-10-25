import React from 'react'
import './About.css'
import Me from '../../assets/CVfoto.jpg'
import CV from '../../assets/CV Federico Pergola.pdf'

const About = () => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className='about-content'>
        <img src={Me} alt=''></img>
        <div className='about-info'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure minima recusandae pariatur dolor voluptatem, molestiae vitae at, quasi rerum laborum quis consequuntur dolorum quas libero assumenda explicabo modi beatae!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure minima recusandae pariatur dolor voluptatem, molestiae vitae at, quasi rerum laborum quis consequuntur dolorum quas libero assumenda explicabo modi beatae!</p>
          <div className='about-cv-container'>
            <a href={CV} target="_blanck"><button className='about-cv'>Descargar CV</button></a>
          </div>  
        </div>
      </div>
    </section>

  )
}

export default About