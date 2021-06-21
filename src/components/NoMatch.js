import React from 'react'

import Navbar from './Navbar/Navbar.js'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function NotFound () {
  return (
    <div className="not-found">
      <Navbar/>
      <Header title="404"/>
      <Footer/>
    </div>
  )
}

export default NotFound
