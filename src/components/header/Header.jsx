import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h4>Hello I am</h4>
        <h1>Richard van der Veen</h1>
        <h2 className="class text-light">Freelance Software, Cloud & Data Engineer</h2>
        <CTA />
        <HeaderSocials />
        
        <img src={ME} className='me' alt="me" />

        <a href="#contact" className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header