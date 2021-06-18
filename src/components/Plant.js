import React from 'react'

import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'

const Plant = ({ plant }) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <LazyLoad className="plant" height={250} offset={100} once>
      <div className="container-img">
        <figure className="plant-figure">
          <img className="plant-img" src={plant.image} alt={plant.type} />
        </figure>
        <div className="overlay-plant">
          <div className="overlay-text" >Buy</div>
        </div>
      </div>
      <div className="plant-text">
        <div className="plant-name">{plant.name}</div>
        <div className="plant-price">{formatter.format(plant.value)}</div>
      </div>
    </LazyLoad>
  )
}

Plant.propTypes = {
  plant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
}

export default Plant
