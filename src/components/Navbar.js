import React from 'react'
import { useLocation } from 'react-router-dom'
import NavbarLink from './NavbarLink'
import { CgShoppingCart } from 'react-icons/cg'

const Navbar = () => {
  const { pathname, search } = useLocation()
  const query = new URLSearchParams(search)
  const type = query.get('type')

  const searchFilter = ({ target }) => { if (type === target.text.toLowerCase()) { window.location.href = window.location.origin } }

  return (
    <div className="navbar">
      <div className="navbar-home">
        <NavbarLink className="navbar-item" activeOnlyWhenExact={true} to="/" label="Home" />
        <NavbarLink className="navbar-item" activeOnlyWhenExact={true} to="/about" label="About" />
      </div>

      {
        pathname === '/' &&
        <div className="navbar-filter">
          <NavbarLink className="navbar-item" onClick={searchFilter} activeOnlyWhenExact={false} to="/?type=cactus" label="Cactus" />
          <NavbarLink className="navbar-item" onClick={searchFilter} activeOnlyWhenExact={false} to="/?type=succulents" label="Succulents" />
          <CgShoppingCart className="navbar-item" />
        </div>
      }

    </div>
  )
}

export default Navbar
