import React from "react"
import "./ToolIcon.scss"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale.css"

const ToolIcon = props => {
  return (
    <Tippy animation={"scale"} content={props.tooTIp} classname="tooltip">
      <div className="icon">
        <img src={props.toolIcon} alt={props.toolName} />
      </div>
    </Tippy>
  )
}

export default ToolIcon
