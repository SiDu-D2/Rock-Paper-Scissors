function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

// Determine computer choice
let computerSelection;
let playerSelection;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
        computerSelection = "Rock"
    }
    if (random === 1) {
        computerSelection = "Scissors"
    }
    if (random === 2) {
        computerSelection = "Paper"
    }
    return computerSelection
}

// Prompt for player choice


// Determine who wins
for (let i = 0; i < 5; i++) {
    
}
if (playerSelection === computerSelection) {
    return "draw"
} else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
) {
    return "you lose";
} else {
    return "you win";
}

// Make count for wins/losses