
let computerOptions = ["rock", "paper", "scissors"];

// Get computer selection
function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3);
    return computerOptions[computerNumber];
}

// Get user selection - need BUTTONS
function getUserChoice() {
 return;
}

// Play game - compare choices
function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw";
    }
}
