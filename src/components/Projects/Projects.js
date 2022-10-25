import React from 'react'
import './Projects.css'
import project from '../../assets/projects.webp'

const Projects = () => {
  return (
    <section id='projects'>
      <div className="projects-container">
        <div className='projects-header'>
          <h2>Projects</h2>
          <p>Here you can see some of the projects I have worked on:</p>
        </div>
        <div className='projects-list'>
          <div className='projects-info'>
            <img src={project} alt='#'></img>
            <h3>Mundo mate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure minima recusandae pariatur</p>
            <div className=''>
              <a href='#' ><button className='projects-buttons'>Visitar sitio</button></a>
              <a href='#' ><button className='projects-buttons'>Ver repositorio</button></a>
            </div>
          </div>
          <div className='projects-info'>
            <img src={project} alt='#'></img>
            <h3>Mundo mate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure minima recusandae pariatur</p>
            <div className=''>
              <a href='#' ><button className='projects-buttons'>Visitar sitio</button></a>
              <a href='#' ><button className='projects-buttons'>Ver repositorio</button></a>
            </div>
          </div>
          <div className='projects-info'>
            <img src={project} alt='#'></img>
            <h3>Mundo mate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure minima recusandae pariatur</p>
            <div className=''>
              <a href='#' ><button className='projects-buttons'>Visitar sitio</button></a>
              <a href='#' ><button className='projects-buttons'>Ver repositorio</button></a>
            </div>
          </div>
          <div className='projects-info'>
            <img src={project} alt='#'></img>
            <h3>Mundo mate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure minima recusandae pariatur</p>
            <div className=''>
              <a href='#' ><button className='projects-buttons'>Visitar sitio</button></a>
              <a href='#' ><button className='projects-buttons'>Ver repositorio</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects