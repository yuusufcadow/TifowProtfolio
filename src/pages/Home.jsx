import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Works from '../components/Works'
import Experience from '../components/Experience'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
    
      <Hero/>
      <Skills/>
      <Services/>
      <Works/>
      <Experience/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default Home
