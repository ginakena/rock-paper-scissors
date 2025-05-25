let computerScore = 0;
let playerScore = 0;
let computerSelectionDisplay;
let playerSelectionDisplay;
let resultDisplay;
let computerScoreDisplay;
let playerScoreDisplay;
let gameOptions;
const emojis = {
  "✊": "Rock", "✋": "Paper", "✌️": "Scissors",
};
function initGame() {
  computerSelectionDisplay = document.querySelector(".computer-selection");
  playerSelectionDisplay = document.querySelector(".player-selection");
  resultDisplay = document.querySelector(".game-result");
  computerScoreDisplay = document.querySelector(".computer-score");
  playerScoreDisplay = document.querySelector(".player-score");
  gameOptions = document.querySelectorAll(".game-option");

  computerScore = 0;
  playerScore = 0;
  computerScoreDisplay.textContent = "0";
  playerScoreDisplay.textContent = "0";
  resultDisplay.textContent = "DRAW";
  resultDisplay.style.backgroundColor = "#FFC145";
  playerSelectionDisplay.textContent = "✋";
  computerSelectionDisplay.textContent = "✋";

  gameOptions.forEach((option) => {
    option.addEventListener("click", () => handlePlayerSelection(option));

    option.addEventListener("mouseenter", () => {
      option.style.transform = "translateY(-0.25rem)";
      option.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });

    option.addEventListener("mouseleave", () => {
      option.style.transform = "";
      option.style.boxShadow = "";
    });
  });
}

function getComputerChoice() {
  const choices = Object.keys(emojis);
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return { result: "CURRENTLY DRAW" };
  }

  const winConditions = {
    "✊": "✌️", "✋": "✊", "✌️": "✋",
   
  };

  if (winConditions[playerChoice] === computerChoice) {
    playerScore++;
    return { result: "PLAYER WINS!" };
  } else {
    computerScore++;
    return { result: "COMPUTER WINS!" };
  }
}

function updateScore() {
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
}

function handlePlayerSelection(selectedOption) {
  const playerChoice = selectedOption.querySelector("h4").textContent;
  const computerChoice = getComputerChoice();

  playerSelectionDisplay.textContent = playerChoice;
  computerSelectionDisplay.textContent = computerChoice;

  const { result } = determineWinner(playerChoice, computerChoice);
  resultDisplay.textContent = result;
  updateScore();
}
document.addEventListener("DOMContentLoaded", initGame);
