import React from "react"
import "./Projects.scss"

// import images and logo
import Portfolio from "../../images/portfolio.jpg"
import Yummy from "../../images/yummy.jpg"

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div id="selector" className="card left">
        <img className="photo" src={Portfolio} alt="My portfolio" />
        <div className="text">
          <h3>My Portfolio - Septembre 2020</h3>
          <p>
            I have designed my own portfolio on Figma, and built it as a single
            page application with the static-site generator Gatsby.
          </p>
          <p>
            I plan to improve its aesthetics as I progress with CSS, javascript,
            React and pluggins libraries, by regularly adding new effects and
            animations here and there.
          </p>
          <a target="blank_" href="https://github.com/Thomas-wagon/Portfolio">
            view source
          </a>
        </div>
      </div>
      <div id="selector" className="card right">
        <img className="photo" src={Yummy} alt="Yummy Palette" />
        <div className="text">
          <h3>Yummy Palette - July 2020</h3>
          <p>
            Are you looking for a restaurant which offers only authentic exotic
            dishes, faithful to the local cuisine ? you found this little place
            that offers this typical dish from your locality and you want to
            share this place with the world ? Yummy palette is a web application
            where you’ll be able to find and recommend only those places that
            offers authentic dishes.
          </p>
          <a target="blank_" href="https://youtu.be/_FQoOiv5nJM?t=1415">
            see demo here
          </a>
          <p>
            This MVP has been designed, implemented and shipped to production in
            10 days, using Ruby On Rails and MVC architecture (model, view,
            controller), as my final project for Le Wagon coding bootcamp
          </p>
          <a target="blank_" href="https://www.yummypaletteapp.com/">
            view site
          </a>
          <span className="link"> / </span>
          <a
            target="blank_"
            href="https://github.com/jmh-xposures/Yummy_Palette"
          >
            view source
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
