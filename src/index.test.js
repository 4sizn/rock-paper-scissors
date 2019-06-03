import { rpsLogic1, rpsLogic2, makePlayer } from "./index"

/*
ROCK =0;
PAPER =1;
SCISSORS = 2;

VS = ["win", "lose", "draw"]
 */

describe("check rps logic", () => {
  test("win", () => {
    expect(rpsLogic(makePlayer(0), makePlayer(2))).toBe(0) //ROCK  to win
    expect(rpsLogic(makePlayer(1), makePlayer(0))).toBe(0) //Paper to win
    expect(rpsLogic(makePlayer(2), makePlayer(1))).toBe(0) //SCISSORS to win
  })
  test("lose", () => {
    expect(rpsLogic(makePlayer(0), makePlayer(1))).toBe(1) //lose
    expect(rpsLogic(makePlayer(1), makePlayer(2))).toBe(1) //lose
    expect(rpsLogic(makePlayer(2), makePlayer(0))).toBe(1) //lose
  })
  test("draw", () => {
    expect(rpsLogic(makePlayer(0), makePlayer(0))).toBe(2) //draw
    expect(rpsLogic(makePlayer(1), makePlayer(1))).toBe(2) //draw
    expect(rpsLogic(makePlayer(2), makePlayer(2))).toBe(2) //draw
  })
})

descripbe("check rps group logic", () => {
  test("win", () => {
    expect(rpsLogic(makePlayer(0), makePlayer(2))).toBe(0) //ROCK  to win
    expect(rpsLogic(makePlayer(1), makePlayer(0))).toBe(0) //Paper to win
    expect(rpsLogic(makePlayer(2), makePlayer(1))).toBe(0) //SCISSORS to win
  })
  test("lose", () => {
    expect(rpsLogic(makePlayer(0), makePlayer(1))).toBe(1) //lose
    expect(rpsLogic(makePlayer(1), makePlayer(2))).toBe(1) //lose
    expect(rpsLogic(makePlayer(2), makePlayer(0))).toBe(1) //lose
  })
  test("draw", () => {
    expect(rpsLogic(makePlayer(0), makePlayer(0))).toBe(2) //draw
    expect(rpsLogic(makePlayer(1), makePlayer(1))).toBe(2) //draw
    expect(rpsLogic(makePlayer(2), makePlayer(2))).toBe(2) //draw
  })
})
