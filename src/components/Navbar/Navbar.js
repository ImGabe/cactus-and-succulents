import React from 'react'

import { useLocation, NavLink } from 'react-router-dom'

import NavbarLink from './NavbarLink'
import NavbarCart from './NavbarCart/NavbarCart'

import style from './Navbar.module.css'

const Navbar = () => {
  const { pathname, search } = useLocation()
  const query = new URLSearchParams(search)
  const type = query.get('type')

  const searchFilter = ({ target }) => { if (type === target.text.toLowerCase()) { window.location.href = window.location.origin } }
  // const isActive = (match, location) => { console.log(location.search, match) }

  return (
    <div className={style.navbar}>
      <div className={style.home}>
        <NavLink exact to="/" className={style.item} activeClassName={style.active}>Home</NavLink>
        <NavLink exact to="/about" className={style.item} activeClassName={style.active}>About</NavLink>
      </div>

      {
        pathname === '/' &&
        <div className={style.filter} >
          <NavbarLink to="?type=cactus" onClick={searchFilter} className={style.item} activeClassName={style.active}>Cactus</NavbarLink>
          <NavbarLink to="?type=succulents" onClick={searchFilter} className={style.item} activeClassName={style.active}>Succulents</NavbarLink>
          <NavbarCart className={style.item} onClick={() => {}} />
        </div>
      }

    </div>
  )
}

export default Navbar
