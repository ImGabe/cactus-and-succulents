import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, subtitle, path }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">
        <a href={path}>{subtitle}</a>
      </p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Card
