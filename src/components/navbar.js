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
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
