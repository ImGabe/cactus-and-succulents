import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'

function App () {
  return (
    <Router>
      <Switch >
        <Route exact path="/">
          <Home />
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
