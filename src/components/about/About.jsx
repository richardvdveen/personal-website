import React from 'react'
import './about.css'
import {GoTerminal} from 'react-icons/go'

const About = () => {
  return (
    <section className='section__about' id="about">
      <div className="container about__container">
        <div className="about__cards">
          <article className="about__card">
            <GoTerminal className='about__icon'/>
            <p>
             
            </p>
            <a href='#contact' className='btn btn-primary about__connect'>Let's connect</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About