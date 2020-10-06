import React from "react"
import "../styles/contact.scss"

//import image and icons
import Gmail from "../images/gmail.png"
import Github from "../images/github.png"
import Linkedin from "../images/linkedin.png"

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="icons">
        <div className="icon">
          <img src={Gmail} alt="Gmail" />
        </div>
        <div className="icon">
          <img src={Github} alt="Github" />
        </div>
        <div className="icon">
          <img src={Linkedin} alt="Linkedin" />
        </div>
      </div>
    </div>
  )
}

export default Contact
