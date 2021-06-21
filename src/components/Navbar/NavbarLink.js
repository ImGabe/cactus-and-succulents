import React from 'react'
import PropTypes from 'prop-types'
import { Link, useRouteMatch } from 'react-router-dom'
import style from './Navbar.module.css'
function NavbarLink ({ className, label, to, activeOnlyWhenExact }) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })

  return <Link to={to} className={`${className} ${match && style.active}`}>{label}</Link>
}

NavbarLink.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  activeOnlyWhenExact: PropTypes.bool.isRequired
}

export default NavbarLink
