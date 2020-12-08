import React from "react"
import "./About.scss"

//import data
import MyData from "../../Data/MyData.json"

//import components
import ToolsCard from "./ToolCard/ToolsCard"
import ToolIcon from "./ToolCard/ToolIcon/ToolIcon"

// import images and logo
import Ruby from "../../images/ruby.png"
import Rails from "../../images/rails.png"
import Gatsby from "../../images/gatsby.png"
import Javascript from "../../images/javascript.png"

const About2 = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <div className="content">
        <div className="tools">
          {MyData.map(data => {
            return (
              <div>
                {data.tools.map(tool => {
                  return (
                    <ToolsCard toolType={tool.toolType}>
                      {tool.toolList.map(t => {
                        return (
                          <ToolIcon
                            toolTip={t.toolTip}
                            toolIcon={t.toolIcon}
                            toolName={t.toolName}
                          />
                        )
                      })}
                    </ToolsCard>
                  )
                })}
              </div>
            )
          })}
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
        </div>
      </div>
    </div>
  )
}

export default About2
