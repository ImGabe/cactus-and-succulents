import React from 'react'
import PropTypes from 'prop-types'

import styles from './Body.module.css'

function Body ({ children }) {
  return (
    <div className={styles.body}>
        { children }
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.array.isRequired
}

export default Body
