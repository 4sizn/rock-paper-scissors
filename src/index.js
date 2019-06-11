const ROCK = 0
const PAPER = 1
const SCISSORS = 2
const WEB2_MAN_NUM = 2

export const METHOD = {
  [ROCK]: "주먹",
  [PAPER]: "보",
  [SCISSORS]: "가위"
}

const VS = ["이김", "짐", "비김"]

const makePlayer = hand => {
  assert(hand >= 0 && hand < 3, "player hands problem...")
  return { hand }
}

const makeComputers = n => {
  const players = []
  for (let i = 0; i < n; i++) {
    players.push(makePlayer(Math.floor(Math.random() * 3)))
  }
  return players
}

// rps single logic
const rpsLogic = (h1, h2) => {
  return (h1 + h2 * -1 + 2) % 3
}
/**
 *
 * @param  {{hand:string, id:int}[]} players
 */
const game = players => {
  const pHands = [...new Set(players.map(p => p.hand))]
  if (pHands.length !== 2) return { draw: true }

  const winnedHand = hands => {
    return !rpsLogic(hands[0], hands[1]) ? hands[0] : hands[1]
  }

  return {
    winners: players.filter(p => p.hand === winnedHand(pHands))
  }
}

const rpsSimulation = players =>
  players.map(p => game([p, ...makeComputers(WEB2_MAN_NUM - 1)]))

const dailyQueue = makeComputers

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed")
  }
}

module.exports = {
  METHOD,
  rpsSimulation,
  VS,
  rpsLogic,
  dailyQueue,
  makePlayer,
  makeComputers,
  game
}
