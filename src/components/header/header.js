import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = () => (
  <div className="header">
    <div className="header__container">
      <h1 className="header__title">BILJANA VELOJIC</h1>
      <h3 className="header__title--small">MAKE UP ARTIST</h3>
    </div>
    <header>
      <ul className="header__items">
        <li className="header__item">
          <Link>Home</Link>
        </li>
        <li className="header__item">
          <Link>Contact</Link>
        </li>
        <li className="header__item">
          <Link>Portfolio</Link>
        </li>
        <li className="header__item">
          <Link>Shop</Link>
        </li>
        <li className="header__item">
          <Link>Blog</Link>
        </li>
      </ul>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
