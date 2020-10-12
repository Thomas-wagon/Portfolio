import React, { useState } from "react"
import "../styles/navbar.scss"
import "../styles/burger.scss"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <span className="thomas">thomas</span>
        <span className="viaules">viaules</span>
        <p>web developer</p>
      </div>
      <div className="list">
        <ul>
          <li>
            <a href="#home" onClick={() => { setIsOpen(false)}}>home</a>
          </li>
          <li>
            <a href="#about" onClick={() => { setIsOpen(false)}}>about</a>
          </li>
          <li>
            <a href="#projects" onClick={() => { setIsOpen(false)}}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => { setIsOpen(false)}}>Contact</a>
          </li>
        </ul>
      </div>
      <span
        className="burger"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  )
}

export default Navbar
