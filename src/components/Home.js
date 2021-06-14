import React, { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Header from './Header'
import Plants from './Plants'
import Footer from './Footer'

function Home () {
  const [plants, setPlants] = useState([])

  const fetchPlants = async () => {
    const res = await fetch('http://localhost:3000/plants')
    const data = await res.json()

    return data
  }

  useEffect(() => {
    const getPlants = async () => {
      const plantsFromServer = await fetchPlants()
      setPlants(plantsFromServer)
    }

    getPlants()
  }, [])

  return (
    <div className="Home">
      <Navbar/>
      <Header title="Cactus and Succulents"/>
      <Plants plants={plants} />
      <Footer/>
    </div>
  )
}

export default Home
