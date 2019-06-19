import { dailyQueue, makePlayer, rpsSimulation, HAND, RESULT } from "./src"

const dailyHands = dailyQueue(5)
const dailyEl = document.querySelector("#daily")
const customEl = document.querySelector("#custom")
const myHandEl = document.querySelector("#my-hand")
const modeRadiosEl = document.querySelector("#mode-radios")
const resultEl = document.querySelector("#result")
const customHands = []

const HAND_NAME = {
  [HAND.ROCK]: '주먹',
  [HAND.SCISSORS]: '가위',
  [HAND.PAPER]: '보'
}
const RESULT_NAME = {
  [RESULT.WIN]: '이겼다',
  [RESULT.LOSE]: '졌다',
  [RESULT.DRAW]: '비겼네'
}

dailyHands.forEach(h => {
  const li = document.createElement("li")
  li.innerText = HAND_NAME[h.hand]
  dailyEl.append(li)
})

myHandEl.querySelectorAll("button").forEach(b => {
  b.addEventListener("click", e => {
    const rps = Number(e.currentTarget.value)
    const li = document.createElement("li")
    li.innerText = HAND_NAME[rps]
    customHands.push(makePlayer(rps))
    customEl.append(li)
  })
})

modeRadiosEl.querySelectorAll("input").forEach(radio => {
  radio.addEventListener("click", e => {
    if (e.currentTarget.value === "daily") {
      gameStart(dailyHands)
    } else {
      gameStart(customHands)
    }
  })
})

gameStart(dailyHands)

function gameStart(players) {
  resultEl.innerHTML = ""
  const rArr = rpsSimulation(players)
  rArr.forEach(r => {
    const li = document.createElement("li")
    if (r.hasOwnProperty("draw")) {
      li.innerText = RESULT_NAME[RESULT.DRAW]
    } else {
      if (players.find(p => p.hand === r.winners[0].hand)) {
        li.innerText = RESULT_NAME[RESULT.WIN]
      } else {
        li.innerText = RESULT_NAME[RESULT.LOSE]
      }
    }
    resultEl.append(li)
  })
}
