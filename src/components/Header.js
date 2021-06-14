import React from 'react'
import PropTypes from 'prop-types'
import LazyHero from 'react-lazy-hero'

const Header = ({ title }) => {
  return (
    <div>
      <LazyHero imageSrc="https://i.imgur.com/E6CBOTL.jpg" minHeight="100vh" opacity={0.2} isFixed={true}>
        <h1><span className="title">{title}</span></h1>
      </LazyHero>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
