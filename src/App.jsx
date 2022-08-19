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
    <div className="app">
        <Favicon url={ICON} />
        <Header />
        <About />
        <Services />
        <Experience />
        <Contact />
        <Footer />
    </div>
)
}

export default App