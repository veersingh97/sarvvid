import React from 'react'
import HeroSection from '../HeroSection/herosection'
import Vision from '../Vision/vision'
import Mission from '../Mission/mission'
import Choose from '../Choose/choose'
import Journey from '../Journey/journey'

const home = () => {
  return (
    <div>
        <HeroSection/>
        <Vision/>
        <Mission/>
        <Choose/>
        <Journey/>
    </div>
  )
}

export default home