import React from "react"
import "./PracticesCard.scss"

//import image
import Tictactoe from "../../../images/tictactoe.png"

const PracticesCard = () => {
  return (
    <div className="practices-card">
      <div className="title">
        <h3>tictactoe</h3>
      </div>
      <div className="practices-card-content">
        <img src={Tictactoe} alt="tictactoe" />
        <div className="practices-card-description">
          <p>
            The player who succeeds in placing three of their marks in a
            horizontal, vertical, or diagonal row is the winner
          </p>
          <button>Start !</button>
        </div>
      </div>
    </div>
  )
}

export default PracticesCard
