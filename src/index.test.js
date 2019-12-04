const rpsGame = require("./index");
const { getGameResult, makePlayer, game } = rpsGame;

describe("check rps logic", () => {
  test("win", () => {
    expect(getGameResult(makePlayer(0).hand, makePlayer(2).hand)).toBe(0); //ROCK  to win
    expect(getGameResult(makePlayer(1).hand, makePlayer(0).hand)).toBe(0); //Paper to win
    expect(getGameResult(makePlayer(2).hand, makePlayer(1).hand)).toBe(0); //SCISSORS to win
  });
  test("lose", () => {
    expect(getGameResult(makePlayer(0).hand, makePlayer(1).hand)).toBe(1); //lose
    expect(getGameResult(makePlayer(1).hand, makePlayer(2).hand)).toBe(1); //lose
    expect(getGameResult(makePlayer(2).hand, makePlayer(0).hand)).toBe(1); //lose
  });
  test("draw", () => {
    expect(getGameResult(makePlayer(0).hand, makePlayer(0).hand)).toBe(2); //draw
    expect(getGameResult(makePlayer(1).hand, makePlayer(1).hand)).toBe(2); //draw
    expect(getGameResult(makePlayer(2).hand, makePlayer(2).hand)).toBe(2); //draw
  });
});

describe("check rps group logic", () => {
  test("winner", () => {
    expect(game([makePlayer(0), makePlayer(2)])).toMatchObject({
      winners: [{ hand: 0 }]
    });
    expect(game([makePlayer(1), makePlayer(0), makePlayer(0)])).toMatchObject({
      winners: [{ hand: 1 }]
    });
    expect(
      game([makePlayer(2), makePlayer(1), makePlayer(1), makePlayer(1)])
    ).toMatchObject({
      winners: [{ hand: 2 }]
    });
  });
  test("draw", () => {
    expect(game([makePlayer(0), makePlayer(0)])).toEqual({ draw: true });
    expect(game([makePlayer(1), makePlayer(1)])).toEqual({ draw: true });
    expect(game([makePlayer(2), makePlayer(2)])).toEqual({ draw: true });
  });
});
