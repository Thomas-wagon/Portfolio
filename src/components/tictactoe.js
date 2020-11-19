import React from "react"
import "../styles/tictactoe.scss"

import Cross from "../images/cross.svg"
import Circle from "../images/circle.svg"

const Tictactoe = () => {
  return (
    <div className="grille">
      <div className="">
        <div>player 1</div>
        <div>player 2</div>
      </div>
      <table>
        <tr>
          <td>
            <img className="choice" src={Cross} alt="cross" />
            <img className="choice" src={Circle} alt="circle" />
          </td>
          <td>
            <img className="choice" src={Cross} alt="cross" />
            <img className="choice" src={Circle} alt="circle" />
          </td>
          <td>
            <img className="choice" src={Cross} alt="cross" />
            <img className="choice" src={Circle} alt="circle" />
          </td>
        </tr>
        <tr>
          <td>
            <img className="choice" src={Cross} alt="cross" />
            <img className="choice" src={Circle} alt="circle" />
          </td>
          <td>
            <img className="choice" src={Cross} alt="cross" />
            <img className="choice" src={Circle} alt="circle" />
          </td>
          <td>
            <img className="choice" src={Cross} alt="cross" />
            <img className="choice" src={Circle} alt="circle" />
          </td>
        </tr>
        <tr>
          <td>
            <img className="choice" src={Cross} alt="cross" />
            <img className="choice" src={Circle} alt="circle" />
          </td>
          <td>
            <img className="choice" src={Cross} alt="cross" />
            <img className="choice" src={Circle} alt="circle" />
          </td>
          <td>
            <img className="choice" src={Cross} alt="cross" />
            <img className="choice" src={Circle} alt="circle" />
          </td>
        </tr>
      </table>

      <button className="restart">Restart</button>
    </div>
  )
}

export default Tictactoe
