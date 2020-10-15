import React from "react"
import "../styles/about.scss"

//import components
import Tools_card from "../components/tools-card"
import Tool_icon from "../components/tool-icon"

// import images and logo
import Thomas from "../images/thomas.jpg"
import Ruby from "../images/ruby.png"
import Rails from "../images/rails.png"
import Gatsby from "../images/gatsby.png"
import Html from "../images/html.png"
import Css from "../images/css.png"
import Sass from "../images/sass.png"
import Bootstrap from "../images/bootstrap.png"
import Figma from "../images/figma.png"
import Inkscape from "../images/inkscape.png"
import Git from "../images/git.png"
import Postgresql from "../images/postgresql.png"
import Cloudinary from "../images/cloudinary.png"
import Heroku from "../images/heroku.png"
import Netlify from "../images/netlify.png"
import Creo from "../images/creo.png"
import Solidworks from "../images/solidworks.png"
import Autocad from "../images/autocad.png"
import Catia from "../images/catia.png"

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <div className="content">
        <div className="profil">
          <div className="card">
            <img className="photo" src={Thomas} alt="me" />
            <div className="text">
              <p>
                After 7 years working as an industrial designer, I wanted to
                renew myself and start learning web development by following the
                full Stack Web Development training offered by LE WAGON
                MONTREAL.
              </p>
              <a target="blank_" href="https://www.lewagon.com/">
                (www.lewagon.com)
              </a>
              <p>
                Today, I'm looking forward to find a position as web developer
                that allows me, ideally, to combine my new skills with those I
                already mastered in 3D modeling and product design, to make the
                most of my creativity.
              </p>
            </div>
          </div>
        </div>
        <div className="tools">
          <Tools_card toolType="Languages and Frameworks">
            <Tool_icon toolIcon={Ruby} toolName="Ruby" />
            <Tool_icon toolIcon={Rails} toolName="Rails" />
            <Tool_icon toolIcon={Gatsby} toolName="Gatsby" />
          </Tools_card>
          <Tools_card toolType="Frontend tools">
            <Tool_icon toolIcon={Html} toolName="HTML 5" />
            <Tool_icon toolIcon={Css} toolName="CSS 3" />
            <Tool_icon toolIcon={Sass} toolName="SASS" />
            <Tool_icon toolIcon={Bootstrap} toolName="Bootstrap" />
            <Tool_icon toolIcon={Figma} toolName="Figma" />
            <Tool_icon toolIcon={Inkscape} toolName="Inkscape" />
          </Tools_card>
          <Tools_card toolType="Backend tools">
            <Tool_icon toolIcon={Git} toolName="Git" />
            <Tool_icon toolIcon={Postgresql} toolName="Postgresql" />
            <Tool_icon toolIcon={Cloudinary} toolName="Cloudinary" />
            <Tool_icon toolIcon={Heroku} toolName="Heroku" />
            <Tool_icon toolIcon={Netlify} toolName="Netlify" />
          </Tools_card>
          <Tools_card toolType="CAO softwares">
            <Tool_icon toolIcon={Creo} toolName="Creo" />
            <Tool_icon toolIcon={Solidworks} toolName="Solidworks" />
            <Tool_icon toolIcon={Autocad} toolName="Autocad" />
            <Tool_icon toolIcon={Catia} toolName="Catia" />
          </Tools_card>
        </div>
      </div>
    </div>
  )
}

export default About
