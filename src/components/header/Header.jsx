import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='header__intro'>
          <h3>Hello I am</h3>
          <h1>Richard van der Veen</h1>
          <h2 className="class text-light">Freelance Software, Cloud & Data Engineer</h2>
          <CTA />
        </div>
      </div>

    </header>
  )
}

export default Header