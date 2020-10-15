import React from "react"
import "../styles/tools-card.scss"

const Tools_card = props => {
  return (
    <div className="tool-type">
      <div className="title">
        <h3>{props.toolType}</h3>
      </div>
      <div className="icons">{props.children}</div>
    </div>
  )
}

export default Tools_card
