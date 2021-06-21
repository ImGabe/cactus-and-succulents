import React from 'react'

import Navbar from './Navbar/Navbar.js'
import Header from './Header'
import Footer from './Footer'

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
