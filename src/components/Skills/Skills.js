import React from 'react'
import './Skills.css'
import {FaReact} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoHtml5} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {SiExpress} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiSass} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h2>Skills</h2>
      <div className='skills-container'>
        <div className='skills-logo'><IoLogoHtml5/><h4>HTML</h4></div>
        <div className='skills-logo'><IoLogoCss3/><h4>CSS</h4></div>
        <div className='skills-logo'><SiJavascript/><h4>JavaScript</h4></div>
        <div className='skills-logo'><FaReact/><h4>React</h4></div>
        <div className='skills-logo'><IoLogoNodejs/><h4>Node.js</h4></div>
        <div className='skills-logo'><SiExpress/><h4>Express</h4></div>
        <div className='skills-logo'><SiMysql/><h4>MySQL</h4></div>
        <div className='skills-logo'><SiSass/><h4>Sass</h4></div>
        <div className='skills-logo'><BsFillBootstrapFill/><h4>Bootstrap</h4></div>
      </div>
    </section>
  )
}

export default Skills