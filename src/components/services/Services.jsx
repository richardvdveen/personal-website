import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section className='section__services' id="services">
      <h2 className='services__header'>I can help you out with</h2>

      <div className="container services__container">
        
        <article className='service'>
          <div className="service__head">
            <h3>Software Engineering</h3>
          </div>

          <ul className='service__list'>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software Design</p>
            </li>   

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintainable Code</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test-driven Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>CI/CD</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Cloud Engineering</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud Architecture</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud Migration</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Infrastructure as Code</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud Cost Management</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Data Engineering</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>(Big) Data Pipeline Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data modeling</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Quality</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Visualization</p>
            </li>

          </ul>
        </article>    
      </div>
    </section>
  )
}

export default Services