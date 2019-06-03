import { rpsLogic, makePlayer, game } from "./index"

/*
ROCK =0;
PAPER =1;
SCISSORS = 2;

VS = ["win", "lose", "draw"]
 */

describe("check rps logic", () => {
  test("win", () => {
    expect(rpsLogic(makePlayer(0).hand, makePlayer(2).hand)).toBe(0) //ROCK  to win
    expect(rpsLogic(makePlayer(1).hand, makePlayer(0).hand)).toBe(0) //Paper to win
    expect(rpsLogic(makePlayer(2).hand, makePlayer(1).hand)).toBe(0) //SCISSORS to win
  })
  test("lose", () => {
    expect(rpsLogic(makePlayer(0).hand, makePlayer(1).hand)).toBe(1) //lose
    expect(rpsLogic(makePlayer(1).hand, makePlayer(2).hand)).toBe(1) //lose
    expect(rpsLogic(makePlayer(2).hand, makePlayer(0).hand)).toBe(1) //lose
  })
  test("draw", () => {
    expect(rpsLogic(makePlayer(0).hand, makePlayer(0).hand)).toBe(2) //draw
    expect(rpsLogic(makePlayer(1).hand, makePlayer(1).hand)).toBe(2) //draw
    expect(rpsLogic(makePlayer(2).hand, makePlayer(2).hand)).toBe(2) //draw
  })
})

describe("check rps group logic", () => {
  test("winner", () => {
    expect(game([makePlayer(0), makePlayer(2)])).toEqual({
      winners: [{ hand: 0 }]
    })
    expect(game([makePlayer(1), makePlayer(0), makePlayer(0)])).toEqual({
      winners: [{ hand: 1 }]
    })
    expect(
      game([makePlayer(2), makePlayer(1), makePlayer(1), makePlayer(1)])
    ).toEqual({
      winners: [{ hand: 2 }]
    })
  })
  test("draw", () => {
    expect(game([makePlayer(0), makePlayer(0)])).toEqual({ draw: true })
    expect(game([makePlayer(1), makePlayer(1)])).toEqual({ draw: true })
    expect(game([makePlayer(2), makePlayer(2)])).toEqual({ draw: true })
  })
})
