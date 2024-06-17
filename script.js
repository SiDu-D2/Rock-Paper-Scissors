
//Define options for computer
let computerOptions = ["rock", "paper", "scissors"];

// Calculate computer selection using random maths function
function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3);
    return computerOptions[computerNumber];
}

//Initialise scores
let playerScore = 0;
let computerScore = 0;
let result = null;

// get player selection - event listeners added to buttons
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
            let playerSelection = button.id;
            let computerSelection = getComputerChoice();
            let roundResult = round(playerSelection, computerSelection);

            document.getElementById("outcome").textContent = roundResult;

            //update scores based on round result
            if (roundResult.includes("YOU WIN")) {
                playerScore++;
            } else if (roundResult.includes("YOU LOSE")) {
                computerScore++;
            }

            document.getElementById("playerScore").textContent = playerScore;
            document.getElementById("computerScore").textContent = computerScore;
            document.getElementById("playerChoice").textContent = `You chose ${playerSelection}!`;
            document.getElementById("computerChoice").textContent = `Computer chose ${computerSelection}!`;
            console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

            if (playerScore ===5 || computerScore ===5) {
                let finalResult = playerScore > computerScore ? "YOU WIN THE GAME!" : "YOU LOSE THE GAME!";
                document.getElementById("outcome").textContent = finalResult;
                //reset scores
                playerScore = 0;
                computerScore = 0;
            }
    })
}) 


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
    else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "YOU LOSE, PAPER BEATS ROCK";
    }
    
    else if (playerSelection === "paper" && computerSelection === "scissors") { 
        result = "YOU LOSE, SCISSORS BEATS PAPER";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "YOU LOSE, ROCK BEATS SCISSORS";
    }
    return result;
}
