import React, { useState } from "react"

// style
import "./Tictactoe.scss"

// components
import Cross from "../../images/cross.svg"
import Circle from "../../images/circle.svg"
import Player from "../Tictactoe/Player/Player"
import Case from "./Case/Case"

const winnerCases = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
]

// original states
const Tictactoe = props => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", sign: Cross, score: 0 },
    { id: 2, name: "Player 2", sign: Circle, score: 0 },
  ])

  const [game, setGame] = useState({ currentPlayer: 1, winner: null })

  const [cases, setCases] = useState([
    {
      position: 1,
      player: null,
    },
    {
      position: 2,
      player: null,
    },
    {
      position: 3,
      player: null,
    },
    {
      position: 4,
      player: null,
    },
    {
      position: 5,
      player: null,
    },
    {
      position: 6,
      player: null,
    },
    {
      position: 7,
      player: null,
    },
    {
      position: 8,
      player: null,
    },
    {
      position: 9,
      player: null,
    },
  ])

  // methodes
  // methode to change the name of the player when typing
  const nameChangedHandler = (event, id) => {
    const playerIndex = players.findIndex(p => p.id === id)
    const updatedPlayer = [...players]
    updatedPlayer[playerIndex].name = event.target.value
    setPlayers(updatedPlayer)
  }
  // methode to display a circle or a cross when click on a location
  const clickCase = position => {
    const caseIndex = cases.findIndex(c => c.position === position)
    const updatedCases = [...cases]
    updatedCases[caseIndex].player = game.currentPlayer
    setCases(updatedCases)
    checkVictory()
  }

  function checkVictory() {
    const casesPlayer = cases.reduce((final, c) => {
      if (c.player === game.currentPlayer) final.push(c.position)
      return final
    }, [])
    let isWinner = false
    winnerCases.forEach(win => {
      let yes = true
      win.forEach(w => {
        if (!casesPlayer.includes(w)) yes = false
      })
      if (yes) isWinner = true
    })

    if (isWinner) {
      setGame({ ...game, winner: game.currentPlayer })
      const playerIndex = players.findIndex(p => p.id === game.currentPlayer)
      const updatedPlayer = [...players]
      updatedPlayer[playerIndex].score = updatedPlayer[playerIndex].score + 1
      setPlayers(updatedPlayer)
    } else if (cases.filter(c => c.player === null).length === 0) {
      setGame({
        ...game,
        winner: 0,
      })
    } else {
      setGame({
        ...game,
        currentPlayer: game.currentPlayer === 1 ? 2 : 1,
      })
    }
  }

  function resetGame() {
    console.log(" reset")
    setCases([
      {
        position: 1,
        player: null,
      },
      {
        position: 2,
        player: null,
      },
      {
        position: 3,
        player: null,
      },
      {
        position: 4,
        player: null,
      },
      {
        position: 5,
        player: null,
      },
      {
        position: 6,
        player: null,
      },
      {
        position: 7,
        player: null,
      },
      {
        position: 8,
        player: null,
      },
      {
        position: 9,
        player: null,
      },
    ])
    setGame({ currentPlayer: 1, winner: null })
  }

  // render
  return (
    <div id="tictactoe" className="tictactoe">
      <h2>React Practices</h2>
      <div className="score">
        {players.map(player => (
          <Player
            player={player}
            changed={event => nameChangedHandler(event, player.id)}
            activePlayer={game.currentPlayer}
          />
        ))}
      </div>
      <div className="grille">
        {game.winner === null ? (
          cases.map(c => (
            <Case lacase={c} onClick={() => clickCase(c.position)} />
          ))
        ) : (
          <div className="result">
            <p>
              {game.winner === 0
                ? "Match null"
                : `Le gagnant est : ${
                    players[game.currentPlayer - 1].name
                  }`}{" "}
            </p>
            <button onClick={resetGame}>Reset</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tictactoe
