import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar/Navbar.js'
import Header from '../Header'
import Plants from '../Plants/Plants'
import Footer from '../Footer'

function Home ({ plants }) {
  return (
    <div>
      <Navbar/>
      <Header title="Cactus and Succulents"/>
      <Plants plants={plants} />
      <Footer/>
    </div>
  )
}

Home.propTypes = {
  plants: PropTypes.array.isRequired
}

export default Home
