import React from "react"
import "./About.scss"

//import components
import ToolsCard from "./ToolCard/ToolsCard"
import ToolIcon from "./ToolCard/ToolIcon/ToolIcon"

// import images and logo
import Thomas from "../../images/thomas.jpg"
import Ruby from "../../images/ruby.png"
import Rails from "../../images/rails.png"
import Gatsby from "../../images/gatsby.png"
import Html from "../../images/html.png"
import Css from "../../images/css.png"
import Sass from "../../images/sass.png"
import Bootstrap from "../../images/bootstrap.png"
import Figma from "../../images/figma.png"
import Inkscape from "../../images/inkscape.png"
import Git from "../../images/git.png"
import Postgresql from "../../images/postgresql.png"
import Cloudinary from "../../images/cloudinary.png"
import Heroku from "../../images/heroku.png"
import Netlify from "../../images/netlify.png"
import Creo from "../../images/creo.png"
import Solidworks from "../../images/solidworks.png"
import Autocad from "../../images/autocad.png"
import Catia from "../../images/catia.png"
import Javascript from "../../images/javascript.png"

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
          <ToolsCard toolType="Languages and Frameworks">
            <ToolIcon tooTIp="Ruby" toolIcon={Ruby} toolName="Ruby" />
            <ToolIcon tooTIp="Rails" toolIcon={Rails} toolName="Rails" />
            <ToolIcon
              tooTIp="Javascript"
              toolIcon={Javascript}
              toolName="Javascript"
            />
            <ToolIcon tooTIp="Gatsby" toolIcon={Gatsby} toolName="Gatsby" />
          </ToolsCard>
          <ToolsCard toolType="Frontend tools">
            <ToolIcon tooTIp="HTML 5" toolIcon={Html} toolName="HTML 5" />
            <ToolIcon tooTIp="CSS 3" toolIcon={Css} toolName="CSS 3" />
            <ToolIcon tooTIp="SASS" toolIcon={Sass} toolName="SASS" />
            <ToolIcon
              tooTIp="Bootstrap"
              toolIcon={Bootstrap}
              toolName="Bootstrap"
            />
            <ToolIcon tooTIp="Figma" toolIcon={Figma} toolName="Figma" />
            <ToolIcon
              tooTIp="Inkscape"
              toolIcon={Inkscape}
              toolName="Inkscape"
            />
          </ToolsCard>
          <ToolsCard toolType="Backend tools">
            <ToolIcon tooTIp="Git" toolIcon={Git} toolName="Git" />
            <ToolIcon
              tooTIp="Postgresql"
              toolIcon={Postgresql}
              toolName="Postgresql"
            />
            <ToolIcon
              tooTIp="Cloudinary"
              toolIcon={Cloudinary}
              toolName="Cloudinary"
            />
            <ToolIcon tooTIp="Heroku" toolIcon={Heroku} toolName="Heroku" />
            <ToolIcon tooTIp="Netlify" toolIcon={Netlify} toolName="Netlify" />
          </ToolsCard>
          <ToolsCard toolType="CAO softwares">
            <ToolIcon tooTIp="Creo" toolIcon={Creo} toolName="Creo" />
            <ToolIcon
              tooTIp="Solidworks"
              toolIcon={Solidworks}
              toolName="Solidworks"
            />
            <ToolIcon tooTIp="Autocad" toolIcon={Autocad} toolName="Autocad" />
            <ToolIcon tooTIp="Catia" toolIcon={Catia} toolName="Catia" />
          </ToolsCard>
        </div>
      </div>
    </div>
  )
}

export default About
