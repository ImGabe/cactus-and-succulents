import React from 'react'
import PropTypes from 'prop-types'

function Body ({ children }) {
  return (
    <div className="body">
        { children }
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.array.isRequired
}

export default Body
