import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('strato_mail_service', 'template_y9zrq3n', form.current, 'de2h_ZsjAHeoUwkeq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section className='contact__section' id="contact">
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h3>Email</h3>
            <h5>contact@richardvanderveen.com</h5>
            <a href="mailto:contact@richardvanderveen.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <FiPhoneCall className='contact__option-icon'/>
            <h3>+316 53877274</h3>
            <a href="https://api.whatsapp.com/send?phone=+31653877274">Call or send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
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