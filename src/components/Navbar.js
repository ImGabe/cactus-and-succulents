import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation()

  const [show, setShow] = useState(false)
  const navbarControl = () => setShow(window.scrollY > 500)

  window.addEventListener('scroll', navbarControl)

  return (
    <div className="navbar">
      <div className={`navbar-home ${show && 'navbar-solid'}`}>
        <ul>
          <li>
            {
              pathname === '/'
                ? <Link to="/" className="active">Home</Link>
                : <Link to="/">Home</Link>
            }
          </li>
          <li>
            {
              pathname === '/about'
                ? <Link to="/about" className="active">About</Link>
                : <Link to="/about">About</Link>
            }
          </li>
        </ul>
      </div>

      {
        pathname === '/' &&
        <div className="navbar-items">
          <ul>
          <li><Link to="/?type=cactus">Cactus</Link></li>
            <li><Link to="/?type=succulents">Succulents</Link></li>
            <li><Link to="/?type=">All</Link></li>
          </ul>
        </div>
      }

    </div>
  )
}

export default Navbar
