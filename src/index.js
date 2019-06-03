const ROCK = 0
const PAPER = 1
const SCISSORS = 2
const WEB2_MAN_NUM = 11

export const METHOD = {
  [ROCK]: "주먹",
  [PAPER]: "보",
  [SCISSORS]: "가위"
}

const VS = ["이김", "짐", "비김"]

const makePlayer = hand => {
  assert(hand >= 0 && hand < 3, "player hands problem...")
  const player = {}
  player.hand = hand
  return player
}

// rps single logic
const rpsLogic1 = (p1, p2) => {
  return (p1.hand + p2.hand * -1 + 2) % 3
}
/**
 *
 * @param  {{hand:string, id:int}[]} players
 */

const result = (...players) => {
  const pHands = [...new Set(players.map(p => p.hand))]
  if (phands.length !== 2) return { draw: true }
  winnedHand
  return {
    winners: players.filter(p => p.hand === winnedHand)
  }
}

// rps group logic
const rpsLogic2 = rArr => {
  const o = {
    win: [],
    lose: [],
    draw: []
  }
  console.log(rArr)
  // 하나거나, 세개거나, 내입장에서 이기거나 지면 안됨 draw
  // 핸드 방식이 최대 2개 이상이어야지 결과 성립
  // 누가 이겼는지까지 판단해야함
  //   그후에 내가 이겼는지 다음로직에서 판단
}

const singleGameResult = (p1, p2, gameLogic) => {
  console.log(
    `너는 ${METHOD[p1.hand]}이고, 상대는 ${METHOD[p2.hand]}이며 넌[${
      VS[gameLogic(p1, p2)]
    }]`
  )
  return { me: p1, other: p2, winner: gameLogic(p1, p2) }
}

const groupGameResult = o => {
  console.log(`그룹 게임 결과 : result:${VS[rpsLogic2([...o])]}`)
  return { o, result: rpsLogic2([...o]) }
}

const game = (me, others) => {
  return groupGameResult(others.map(p => singleGameResult(me, p, rpsLogic1)))
}

const makeComputers = n => {
  const players = []
  for (let i = 0; i < n; i++)
    players.push(makePlayer(Math.floor(Math.random() * 3)))
  return players
}

const rpsSimulation = hands =>
  hands.map(h => game(h, [...makeComputers(WEB2_MAN_NUM - 1)]))

const dailyQueue = makeComputers

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed")
  }
}

module.exports = {
  METHOD,
  VS,
  rpsLogic1,
  dailyQueue,
  makePlayer,
  makeComputers,
  rpsSimulation
}
