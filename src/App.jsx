import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Mask from './components/Mask'
import Customers from './components/Customers'
import Media from './components/Media'
import Section from './components/Section'
import Marketing from './components/Marketing'
import Client from './components/Client'
import Footer from './components/Footer'
import Text from './components/Text'
import StatsSection from './components/StatsSection'
import FreeReviewModal from './components/FreeReviewModal'




const App = () => {
  
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar/>
      <Hero/>
      <Services/>
      <StatsSection/>
      <Mask/>
      <Customers/>
      <Section/>
      <Media/>      
      <Marketing/>
      <Client/>
      <Text/>
      <Footer/>
      
    </div>
   
  )
}

export default App
