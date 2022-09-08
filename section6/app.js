const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const choices = new Set([ROCK, PAPER,SCISSORS]);
const WINNING_COMBINATIONS = [
  {
    'player': ROCK,
    'computer': SCISSORS
  },
  {
    'player': PAPER,
    'computer': ROCK
  },
  {
    'player': SCISSORS,
    'computer': PAPER
  },
];

/**
 * Get a player's selection. 
 * @returns The player's selection
 */
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, "").toUpperCase();
  if (!choices.has(selection)) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

/**
 * Get a random number. 
 * @returns A random number between 0 and 100 (inclusive).
 */
const getRandomNumber = () => Math.floor(Math.random() * 100);

/**
 * Get the computer's 
 * @returns The computer's selection 
 */
const getComputerChoice = () => {
  const randomNumber = getRandomNumber();
  if (randomNumber >= 0 && randomNumber < 33) {
    return ROCK;
  } else if (randomNumber >= 33 && randomNumber < 66) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

/**
 * Check if player won. 
 * @param   {string}  playerSelection   player value
 * @param   {string}  computerSelection computer value 
 * @returns True if player wins, else false 
 */
const isWin = (playerSelection, computerSelection) => {
  return WINNING_COMBINATIONS.filter(e => {
    e.player === playerSelection && e.computer === computerSelection
  }).length === 0;
};

/**
 * Get the outcome of the game. 
 * @param {string}  playerSelection   player value
 * @param {string}  computerSelection computer value 
 * @returns The outcome of the game
 */
const getOutcome = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'Draw';
  } else if (isWin(playerSelection, computerSelection)) {
    return 'Player wins';
  } else {
    return 'Player loses';
  }
};

startGameBtn.addEventListener("click", function () {
  console.log("Game is starting...");

  const playerSelection = getPlayerChoice();
  console.log(`Player selected: ${playerSelection}`);
  const computerSelection = getComputerChoice();
  console.log(`Computer selected: ${computerSelection}`);

  const outcome = getOutcome(playerSelection, computerSelection);
  alert(outcome);
});
