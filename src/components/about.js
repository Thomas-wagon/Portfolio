import React from "react"
import "../styles/about.scss"

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
          <div className="languages-and-frameworks">
            <div className="title">
              <h3>Languages and Frameworks</h3>
            </div>
            <div className="icons">
              <div className="icon">
                <img src={Ruby} alt="Ruby" />
              </div>
              <div className="icon">
                <img src={Rails} alt="Rails" />
              </div>
              <div className="icon">
                <img src={Gatsby} alt="Gatsby" />
              </div>
            </div>
          </div>
          <div className="frontend-tools">
            <div className="title">
              <h3>Frontend tools</h3>
            </div>
            <div className="icons">
              <div className="icon">
                <img src={Html} alt="HTML 5" />
              </div>
              <div className="icon">
                <img src={Css} alt="CSS 3" />
              </div>
              <div className="icon">
                <img src={Sass} alt="SASS" />
              </div>
              <div className="icon">
                <img src={Bootstrap} alt="Bootstrap" />
              </div>
              <div className="icon">
                <img src={Figma} alt="Figma" />
              </div>
              <div className="icon">
                <img src={Inkscape} alt="Inkscape" />
              </div>
            </div>
          </div>
          <div className="backend-tools">
            <div className="title">
              <h3>Backend tools</h3>
            </div>
            <div className="icons">
              <div className="icon">
                <img src={Git} alt="Git" />
              </div>
              <div className="icon">
                <img src={Postgresql} alt="PostgreSQL" />
              </div>
              <div className="icon">
                <img src={Cloudinary} alt="Cloudinary" />
              </div>
              <div className="icon">
                <img src={Heroku} alt="Heroku" />
              </div>
              <div className="icon">
                <img src={Netlify} alt="Netlify" />
              </div>
            </div>
          </div>
          <div className="cao-softwares">
            <div className="title">
              <h3>CAO softwares</h3>
            </div>
            <div className="icons">
              <div className="icon">
                <img src={Creo} alt="PTC Creo" />
              </div>
              <div className="icon">
                <img src={Solidworks} alt="SolidWorks" />
              </div>
              <div className="icon">
                <img src={Autocad} alt="Autocad" />
              </div>
              <div className="icon">
                <img src={Catia} alt="Catia" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
