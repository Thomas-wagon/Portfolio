import React from "react"
import "../styles/projects.scss"

// import images and logo
import Portfolio from "../images/portfolio.jpg"
import Yummy from "../images/yummy.jpg"

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="portfolio">
        <div className="card">
          <div className="photo">
            <img src={Portfolio} alt="My portfolio" />
          </div>
          <div className="text">
            <h3>
              My Portfolio - <span className="date">Septembre 2020</span>
            </h3>
            <p>
              I have designed my own portfolio on Figma, and built it as a
              single page application with the static-site generator Gatsby.
            </p>
            <p>
              I plan to improve its aesthetics as I progress with CSS,
              javascript, React and pluggins libraries, by regularly adding new
              effects and animations here and there.
            </p>
          </div>
        </div>
      </div>
      <div className="yummy-palette">
        <div className="card">
          <div className="text">
            <h3>
              My Portfolio - <span className="date">Septembre 2020</span>
            </h3>
            <p>
              I have designed my own portfolio on Figma, and built it as a
              single page application with the static-site generator Gatsby.
            </p>
            <p>
              I plan to improve its aesthetics as I progress with CSS,
              javascript, React and pluggins libraries, by regularly adding new
              effects and animations here and there.
            </p>
          </div>
          <div className="photo">
            <img src={Yummy} alt="Yummy Palette" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
