import React from "react"
import "../styles/tool-icon.scss"

const Tool_icon = props => {
  return (
    <div className="icon">
      <img src={props.toolIcon} alt={props.toolName} />
    </div>
  )
}

export default Tool_icon
