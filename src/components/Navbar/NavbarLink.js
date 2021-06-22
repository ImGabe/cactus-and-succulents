import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavbarLink = props => (
  <NavLink isActive={(_, { search }) => search === props.to} {...props} />
)

NavbarLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default NavbarLink
