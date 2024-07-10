/**
 * Factory pattern
 *
 * Read more about this pattern at:
 * @link https://www.patterns.dev/vanilla/factory-pattern
 */
const createPlayer = ({ fistName, lastName }) => {
  return {
    fistName,
    lastName,
    getFullName: () => {
      return `${fistName} ${lastName}`
    },
    points: 0,
  }
}

const playGame = ({ player1, player2 }) => {
  const moves = ['rock', 'paper', 'scissors']
  const player1Move = moves[Math.floor(Math.random() * 3)]
  const player2Move = moves[Math.floor(Math.random() * 3)]

  if (player1Move === player2Move) {
    return 'draw'
  }

  if (
    (player1Move === 'rock' && player2Move === 'scissors') ||
    (player1Move === 'scissors' && player2Move === 'paper') ||
    (player1Move === 'paper' && player2Move === 'rock')
  ) {
    player1.points++
    return
  }

  player2.points++
}

const gameRunner = ({ player1, player2, turns = 3 }) => {
  for (let i = 0; i < turns; i++) {
    playGame({ player1, player2 })
  }

  if (player1.points === player2.points) {
    return 'draw'
  }

  return player1.points > player2.points ? player1 : player2
}

const player1 = createPlayer({ fistName: 'John', lastName: 'Doe' })
const player2 = createPlayer({ fistName: 'Jane', lastName: 'Doe' })

const winner = gameRunner({ player1, player2 })

if (winner === 'draw') {
  console.log('It is a draw!')
} else {
  console.log(`The winner is ${winner.getFullName()}`)
}
