import React from 'react'

import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'

import style from './Plant.module.css'

const Plant = ({ plant }) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <LazyLoad className={style.plant} height={250} offset={100} once>
      <div className={style.container}>
        <figure className={style.figure}>
          <img className={style.image} src={plant.image} alt={plant.type} />
        </figure>
        <div className={style.overlay}>
          <div className={style.text}>Buy</div>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.name}>{plant.name}</div>
        <div className={style.price}>{formatter.format(plant.value)}</div>
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
