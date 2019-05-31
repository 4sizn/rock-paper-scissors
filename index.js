import { dailyQueue, rpsSimulation, VS, METHOD, makePlayer } from "./src"

const dailyHands = dailyQueue(5)
const dailyEl = document.querySelector("#daily")
const customEl = document.querySelector("#custom")
const myHandEl = document.querySelector("#my-hand")
const modeRadiosEl = document.querySelector("#mode-radios")
const resultEl = document.querySelector("#result")
const customHands = []

dailyHands.forEach(h => {
  const li = document.createElement("li")
  li.innerText = METHOD[h.hand]
  dailyEl.append(li)
})

myHandEl.querySelectorAll("button").forEach(b => {
  b.addEventListener("click", e => {
    const rps = Number(e.currentTarget.value)
    const li = document.createElement("li")
    li.innerText = METHOD[rps]
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

function gameStart(hands) {
  resultEl.innerHTML = ""
  const gamesResult = rpsSimulation(hands)
  gamesResult.forEach(rArr => {
    const li = document.createElement("li")
    rArr.shift() //except Mine
    const isWin = VS[gameResult(rArr)]
    li.innerText = isWin
    resultEl.append(li)
  })
}

function gameResult(results) {
  if (results.some(r => r === 2)) return 2 //비김
  if (results.some(r => r === 1)) return 1 //짐
  return 0 // 이김
}
