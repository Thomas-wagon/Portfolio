import React from "react"
import "../styles/tool-icon.scss"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale.css"

const Tool_icon = props => {
  return (
    <Tippy animation={"scale"} content={props.tooTIp} classname="tooltip">
      <div className="icon">
        <img src={props.toolIcon} alt={props.toolName} />
      </div>
    </Tippy>
  )
}

export default Tool_icon
