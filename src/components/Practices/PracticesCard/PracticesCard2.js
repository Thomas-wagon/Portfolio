import React, { useState } from "react"

//import style
import "./PracticesCard2.scss"

// import components
import Modal from "../../UI/Modal/Modal"
import SlidingPuzzle from "../PracticesCard/SlidingPuzzle/SlidingPuzzle"

//import image
import SmileyPuzzle from "../../../images/smiley_puzzle.png"

const PracticesCard2 = props => {
  //original state
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="practices-card">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="practices-card-content">
        <img src={SmileyPuzzle} alt="Smiley Puzzle" />
        <div className="practices-card-description">
          <p>{props.description}</p>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            title={props.title}
          >
            <SlidingPuzzle showModal={showModal} />
          </Modal>
        </div>
        <button onClick={() => setShowModal(!showModal)}>Start !</button>
      </div>
    </div>
  )
}

export default PracticesCard2
