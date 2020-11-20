import React from "react"
import "./player.scss"
import Cross from "../../../images/cross.svg"
import Circle from "../../../images/circle.svg"

const player = props => {
  console.log(props)
  return (
    <div className="player">
      <input type="text" onChange={props.changed} value={props.name} />
      <div className="identity">
        <img src={props.sign} alt="sign" />
        <p>{props.name}</p>
      </div>
      <p>score : {props.score}</p>
    </div>
  )
}

export default player
