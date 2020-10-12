import React from "react"
import "../styles/navbar.scss"

// import components
import Burger from "../components/burger"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span className="thomas">thomas</span>
        <span className="viaules">viaules</span>
        <p>web developer</p>
      </div>
      <div className="list">
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
      <Burger />
    </div>
  )
}

export default Navbar
