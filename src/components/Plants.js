import React from 'react'

import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import Plant from './Plant'

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

const Plants = ({ plants }) => {
  const query = useQuery()
  const type = query.get('type')

  return (
    <div className="plants">
      {plants.map((plant, index) => (!type || plant.type === type) && <Plant className="plants" key={index} plant={plant} />)}
    </div>
  )
}

Plants.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Plants
