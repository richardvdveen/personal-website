import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section className='section__about' id="about">
      <h2 className='about__header'>About me</h2>
      <div className="container about__container">
      
        <img src={ME} className='about__me-image' alt="me" />
        
        <article className="about__text">
          <p>
            Hi! I am Richard, a freelance Software, Cloud & Data Engineer based in the Netherlands. I help people and organizations build modern and maintainable (cloud) solutions.
          </p>
          <br/>
          <p>
            Do you need something build or simply want to chat about possibilities?
          </p>
          <p>
            Reach out by calling me or send me an email.
          </p>
          <a href='#contact' className='btn btn-primary about__connect'>Let's connect</a>
        </article>

      </div>
    </section>
  )
}

export default About