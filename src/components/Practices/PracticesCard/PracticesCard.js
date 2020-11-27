import React, { useState } from "react"

//import style
import "./PracticesCard.scss"

// import components
import Modal from "../../UI/Modal/Modal"
import TictactoeGame from "../PracticesCard/Tictactoe/Tictactoe"

//import image
import Tictactoe from "../../../images/tictactoe.png"

const PracticesCard = () => {
  //original state
  const [showModal, setShowModal] = useState(false)

  //methodes

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
          <Modal showModal={showModal}>
            <TictactoeGame />
          </Modal>
          <button onClick={() => setShowModal(!showModal)}>Start !</button>
        </div>
      </div>
    </div>
  )
}

export default PracticesCard
