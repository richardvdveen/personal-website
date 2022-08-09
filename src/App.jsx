import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Favicon from "react-favicon"
import ICON from "../src/assets/terminal.ico"

const App = () => {
  return (
    <>
        <Favicon url={ICON} />
        <Header />
        <About />
        <Services />
        <Experience />
        <Contact />
        <Footer />
    </>
)
}

export default App