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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint delectus, et beatae suscipit sequi atque omnis. Recusandae odio quo, error illo quos provident nulla quam, nostrum quis, magnam voluptatibus deserunt.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ad aperiam voluptatibus non quibusdam sint optio a quaerat perferendis deserunt. Autem quis fugiat nisi vitae, non quaerat architecto itaque velit?
          
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ducimus a est commodi, dolores consequuntur officiis voluptates molestias dolorem illo odio nihil inventore tempora corrupti ea architecto minima repellat ipsa?
          </p>
          <a href='#contact' className='btn btn-primary about__connect'>Let's connect</a>
        </article>

      </div>
    </section>
  )
}

export default About