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
import Javascript from "../images/javascript.png"

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
            <Tool_icon tooTIp="Ruby" toolIcon={Ruby} toolName="Ruby" />
            <Tool_icon tooTIp="Rails" toolIcon={Rails} toolName="Rails" />
            <Tool_icon
              tooTIp="Javascript"
              toolIcon={Javascript}
              toolName="Javascript"
            />
            <Tool_icon tooTIp="Gatsby" toolIcon={Gatsby} toolName="Gatsby" />
          </Tools_card>
          <Tools_card toolType="Frontend tools">
            <Tool_icon tooTIp="HTML 5" toolIcon={Html} toolName="HTML 5" />
            <Tool_icon tooTIp="CSS 3" toolIcon={Css} toolName="CSS 3" />
            <Tool_icon tooTIp="SASS" toolIcon={Sass} toolName="SASS" />
            <Tool_icon
              tooTIp="Bootstrap"
              toolIcon={Bootstrap}
              toolName="Bootstrap"
            />
            <Tool_icon tooTIp="Figma" toolIcon={Figma} toolName="Figma" />
            <Tool_icon
              tooTIp="Inkscape"
              toolIcon={Inkscape}
              toolName="Inkscape"
            />
          </Tools_card>
          <Tools_card toolType="Backend tools">
            <Tool_icon tooTIp="Git" toolIcon={Git} toolName="Git" />
            <Tool_icon
              tooTIp="Postgresql"
              toolIcon={Postgresql}
              toolName="Postgresql"
            />
            <Tool_icon
              tooTIp="Cloudinary"
              toolIcon={Cloudinary}
              toolName="Cloudinary"
            />
            <Tool_icon tooTIp="Heroku" toolIcon={Heroku} toolName="Heroku" />
            <Tool_icon tooTIp="Netlify" toolIcon={Netlify} toolName="Netlify" />
          </Tools_card>
          <Tools_card toolType="CAO softwares">
            <Tool_icon tooTIp="Creo" toolIcon={Creo} toolName="Creo" />
            <Tool_icon
              tooTIp="Solidworks"
              toolIcon={Solidworks}
              toolName="Solidworks"
            />
            <Tool_icon tooTIp="Autocad" toolIcon={Autocad} toolName="Autocad" />
            <Tool_icon tooTIp="Catia" toolIcon={Catia} toolName="Catia" />
          </Tools_card>
        </div>
      </div>
    </div>
  )
}

export default About
