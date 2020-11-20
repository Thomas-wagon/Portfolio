import React, { useState } from "react"

// style
import "../../styles/tictactoe.scss"

// components
import Cross from "../../images/cross.svg"
import Circle from "../../images/circle.svg"
import Player from "../tictactoe/player/player"

// original states
const Tictactoe = props => {
  const [playersState, setPlayersState] = useState({
    players: [
      { id: "1", name: "Player 1", sign: Cross, score: 0 },
      { id: "2", name: "Player 2", sign: Circle, score: 0 },
    ],
  })

  // methodes
  // methode to change the name of the player when typing
  const nameChangedHandler = (event, id) => {
    const playerIndex = playersState.players.findIndex(p => {
      return p.id === id
    })

    const player = {
      ...playersState.players[playerIndex],
    }

    player.name = event.target.value

    const players = [...playersState.players]
    players[playerIndex] = player

    setPlayersState({ players: players })
  }
  // methode to display a circle or a cross when click on a location
  const locationSelectedHandler = () => {}

  // render
  return (
    <div id="practices" className="practices">
      <h2>React Practices</h2>
      <div className="score">
        {playersState.players.map(player => {
          return (
            <Player
              name={player.name}
              sign={player.sign}
              score={player.score}
              key={player.id}
              changed={event => nameChangedHandler(event, player.id)}
            />
          )
        })}
      </div>
      <div className="grille">
        <table>
          <tr>
            <td onclick={locationSelectedHandler}>
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
    </div>
  )
}

export default Tictactoe
