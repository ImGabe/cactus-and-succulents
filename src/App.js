import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'

function App () {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    const getPlants = async () => {
      const res = await fetch('https://cactus-and-succulents.glitch.me/plants.json')
      const data = await res.json()

      setPlants(data.plants)
    }

    getPlants()
  }, [])

  return (
    <Router>
      <Switch >
        <Route exact path="/">
          <Home plants={plants} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
