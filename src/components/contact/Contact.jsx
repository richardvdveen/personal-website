import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'

const Contact = () => {
  return (
    <section className='contact__section' id="contact">
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h3>Email</h3>
            <h5>contact@richardvanderveen.com</h5>
            <a href="mailto:dummy@mail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <FiPhoneCall className='contact__option-icon'/>
            <h3>+316 53877274</h3>
            <a href="#">Call or send a message</a>
          </article>

        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name'  required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact