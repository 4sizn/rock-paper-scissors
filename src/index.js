// 상수
// const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)
const ROCK = 0
const PAPER = 1
const SCISSORS = 2
const WEB2_MAN_NUM = 3

// 텍스트화
export const METHOD = {
  [ROCK]: "주먹",
  [PAPER]: "보",
  [SCISSORS]: "가위"
}

// 결과
const VS = ["이김", "짐", "비김"] // 0, 1, 2

const makePlayer = hand => {
  assert(hand >= 0 && hand < 3, "player hands problem...")
  const player = {}
  player.hand = hand
  return player
}

const rpsLogic = (p1, p2) => {
  console.log(
    `너는 ${METHOD[p1.hand]}이고, 상대는 ${METHOD[p2.hand]}이며 넌[${
      VS[(p1.hand + p2.hand * -1 + 2) % 3]
    }]`
  )
  return (p1.hand + p2.hand * -1 + 2) % 3
}

// 전체 인원에 대한 세부 결과값이 나와야 한다.
// [player:hand, player:r='w', player:hand, player:r='l']

const singleGame = (me, every) => {
  return every.map(p => rpsLogic(me, p))
}

const makeComputers = n => {
  const players = []
  for (let i = 0; i < n; i++)
    players.push(makePlayer(Math.floor(Math.random() * 3)))
  return players
}

const rpsSimulation = hands =>
  hands.map(h => singleGame(h, [h, ...makeComputers(WEB2_MAN_NUM - 1)]))

const dailyQueue = makeComputers

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed")
  }
}

module.exports = {
  METHOD,
  VS,
  rpsLogic,
  dailyQueue,
  makePlayer,
  makeComputers,
  rpsSimulation
}
