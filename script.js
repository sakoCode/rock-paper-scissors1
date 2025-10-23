let humanScore = 0;
let computerScore = 0;

let compChoice;
let humanChoice;

function getCompChoice() {
  compChoice = Math.floor(Math.random() * 3) + 1;
  if (compChoice === 1) {
    compChoice = "paper";
  } else if (compChoice === 2) {
    compChoice = "scissors";
  } else {
    compChoice = "rock";
  }
  return compChoice;
}

function getHumanChoice() {
  humanChoice = prompt(
    "Please enter a choice (rock,paper,scissors): "
  ).toLowerCase();
  return humanChoice;
}

function playRound(human = getHumanChoice(), comp = getCompChoice()) {
  if (human === "rock" && comp === "scissors") {
    humanScore++;
    console.log("human wins! rock beats scissors");
  } else if (human === "paper" && comp === "rock") {
    humanScore++;
    console.log("human wins! paper beats rock");
  } else if (human === "scissors" && comp === "paper") {
    humanScore++;
    console.log("human wins! scissors beats paper");
  } else if (comp === "rock" && human === "scissors") {
    computerScore++;
    console.log("computer wins! rock beats scissors");
  } else if (comp === "paper" && human === "rock") {
    computerScore++;
    console.log("computer wins! paper beats rock");
  } else if (comp === "scissors" && human === "paper") {
    computerScore++;
    console.log("computer wins! scissors beats paper");
  } else if (human === comp) {
    console.log("Tie!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
  if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else if (humanScore > computerScore) {
    console.log("Human wins the game!");
  }
}

playGame();
