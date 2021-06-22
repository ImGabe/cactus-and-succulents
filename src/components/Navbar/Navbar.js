import React from 'react'

import { useLocation } from 'react-router-dom'

import NavbarLink from './NavbarLink'
import NavbarCart from './NavbarCart/NavbarCart'

import style from './Navbar.module.css'

const Navbar = () => {
  const { pathname, search } = useLocation()
  const query = new URLSearchParams(search)
  const type = query.get('type')

  const searchFilter = ({ target }) => { if (type === target.text.toLowerCase()) { window.location.href = window.location.origin } }

  return (
    <div className={style.navbar}>
      <div className={style.home}>
        <NavbarLink className={style.item} activeOnlyWhenExact={true} to="/" label="Home" />
        <NavbarLink className={style.item} activeOnlyWhenExact={true} to="/about" label="About" />
      </div>

      {
        pathname === '/' &&
        <div className={style.filter} >
          <NavbarLink className={style.item} onClick={searchFilter} activeOnlyWhenExact={false} to="/?type=cactus" label="Cactus" />
          <NavbarLink className={style.item} onClick={searchFilter} activeOnlyWhenExact={false} to="/?type=succulents" label="Succulents" />
          <NavbarCart className={style.item} onClick={() => {}} />
        </div>
      }

    </div>
  )
}

export default Navbar
