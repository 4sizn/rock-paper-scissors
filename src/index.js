const HAND = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2
};

const RESULT = {
  WIN: 0,
  LOSE: 1,
  DRAW: 2
};

const WEB2_MAN_NUM = 11;

let uuid = 0;
const makePlayer = hand => {
  assert(hand >= 0 && hand < 3, "player hands problem...");
  return { id: uuid++, hand };
};

const makeComputers = n => {
  const players = [];
  for (let i = 0; i < n; i++) {
    players.push(makePlayer(Math.floor(Math.random() * 3)));
  }
  return players;
};

const getGameResult = (myHand, otherHand) => {
  return [RESULT.WIN, RESULT.LOSE, RESULT.DRAW][(myHand - otherHand + 2) % 3];
};

/**
 *
 * @param  {{hand:string, id:int}[]} players
 */
const game = players => {
  const pHands = [...new Set(players.map(p => p.hand))];
  if (pHands.length !== 2) return { draw: true };

  const winned =
    getGameResult(pHands[0], pHands[1]) === RESULT.WIN ? pHands[0] : pHands[1];

  return { winners: players.filter(p => p.hand === winned) };
};

const rpsSimulation = players =>
  players.map(p => game([p, ...makeComputers(WEB2_MAN_NUM - 1)]));

const dailyQueue = makeComputers;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

module.exports = {
  HAND,
  RESULT,
  rpsSimulation,
  makePlayer,
  getGameResult,
  game,
  dailyQueue
};
