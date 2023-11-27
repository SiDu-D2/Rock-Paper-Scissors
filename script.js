
const element = document.getElementById("rock");
element.addEventListener("click", function() {
  document.getElementById("result").innerHTML = round();
});

//Define options for computer
let computerOptions = ["rock", "paper", "scissors"];
// Create variable for input into gameplay, connected to function
let computerSelection = getComputerChoice();

// Calculate computer selection using random maths function
function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3);
    return computerOptions[computerNumber];
}

// Get player selection - need BUTTONS
function getPlayerChoice() {
    let playerSelection = prompt("rock, paper, scissors").toLowerCase();
    return playerSelection;
    }

let playerScore = 0;
let computerScore = 0;
let result = null;

// Play game - compare choices
function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = "It's a draw";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "YOU WIN, ROCK BEATS SCISSORS";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "YOU WIN, PAPER BEATS ROCK";
    }
    else if (playerSelection === "scissors" && computerSelection ==="paper") {
        result = "YOU WIN, SCISSORS BEATS PAPER";
    }
    else { result = "You Lose"
    }
    return result;
}

function game() {
    let index = 0;
    while (index < 5) {
        console.log(round(getPlayerChoice(), getComputerChoice()))
        index++;
        switch (true) {
            case result.indexOf("You win") !== -1:
                playerScore++;
                console.log(`playerScore: ${playerScore}`);
                break;
            case result.indexOf("You lose") !== -1:
                computerScore++;
                console.log(`computerScore: ${computerScore}`)
                break;
        }
    }
    console.log(playerScore > computerScore ? "You win!" : "You lose!");
}     
console.log(round("scissors", "scissors"));