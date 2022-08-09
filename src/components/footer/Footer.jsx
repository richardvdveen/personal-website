import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#" className='footer__logo'>Richard van der Veen</a>

      <div className="footer__copyright">
        <small>&copy; Richard van der Veen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer