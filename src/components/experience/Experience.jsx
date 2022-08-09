import React from 'react'
import './experience.css'
import {FaPython, FaReact, FaGitAlt} from 'react-icons/fa'
import {SiKubernetes, SiApachespark, SiAzurefunctions, SiDocker, SiPowerbi, SiAzuredevops, SiCplusplus, SiTerraform, SiMicrosoftazure, SiLinux, SiMicrosoftsqlserver, SiPostgresql} from 'react-icons/si'
import {GiFactory} from 'react-icons/gi'
import {AiOutlineConsoleSql} from 'react-icons/ai'

const Experience = () => {
  return (
    <section className='experience__section' id="experience">
      <h2 className='services__header'>I am experienced with</h2>
    
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Software Engineering</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineConsoleSql className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiCplusplus className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaGitAlt className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiAzuredevops className='experience__details-icon'/>
              <div>
                <h4>DevOps</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Cloud Engineering</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiMicrosoftazure className='experience__details-icon'/>
              <div>
                <h4>Azure</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiTerraform className='experience__details-icon'/>
              <div>
                <h4>Terraform</h4>
              </div>
            </article>
            
            <article className='experience__details'>
              <SiAzurefunctions className='experience__details-icon'/>
              <div>
                <h4>Serverless</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiDocker className='experience__details-icon'/>
              <div>
                <h4>Docker</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiKubernetes className='experience__details-icon'/>
              <div>
                <h4>Kubernetes</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Data Engineering</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <SiApachespark className='experience__details-icon'/>
              <div>
                <h4>Spark</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiMicrosoftsqlserver className='experience__details-icon'/>
              <div>
                <h4>SqlServer</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiPowerbi className='experience__details-icon'/>
              <div>
                <h4>PowerBI</h4>
              </div>
            </article>
            
            <article className='experience__details'>
              <SiLinux className='experience__details-icon'/>
              <div>
                <h4>Linux</h4>
              </div>
            </article>

            <article className='experience__details'>
              <GiFactory className='experience__details-icon'/>
              <div>
                <h4>DataFactory</h4>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience