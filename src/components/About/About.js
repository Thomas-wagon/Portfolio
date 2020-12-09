import React from "react"

//import style
import "./About.scss"

//import data
import AboutData from "./AboutData.json"

//import components
import ToolsCard from "./ToolCard/ToolsCard"
import ToolIcon from "./ToolCard/ToolIcon/ToolIcon"

// import images and logo
import Thomas from "../../images/thomas.jpg"

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
          {AboutData.map(data => {
            return (
              <ToolsCard toolType={data.toolType}>
                {data.toolList.map(tool => (
                  <ToolIcon toolTip={tool.toolTip} toolIcon={tool.toolIcon} />
                ))}
              </ToolsCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
