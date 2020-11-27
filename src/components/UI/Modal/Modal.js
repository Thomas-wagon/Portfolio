import React from "react"
import "./Modal.scss"

//import image
import ClosingButton from "../../../images/closing_button.png"

const Modal = props => {
  return (
    <div className={`modal ${props.showModal ? "show" : ""}`}>
      <div onClick={() => props.setShowModal(!props.showModal)}>
        <img className="closing-button" src={ClosingButton} alt="close" />
      </div>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

export default Modal
