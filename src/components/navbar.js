import React from "react"
import "../styles/navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span className="thomas">thomas</span>
        <span className="viaules">viaules</span>
        <p>web developer</p>
      </div>
      <ul>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
