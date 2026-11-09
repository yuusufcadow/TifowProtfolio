import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Works from '../components/Works'
import Experience from '../components/Experience'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'
import FeaturedProjects from '../components/FeaturedProjects'

function Home() {
  return (
    <div>
    
      <Hero/>
      <FeaturedProjects />
      <Skills/>
      <Services/>
      <Works/>
      <Experience/>
      <Contactus/>
    </div>
  )
}

export default Home
