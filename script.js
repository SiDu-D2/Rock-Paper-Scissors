// Determine computer choice
function getComputerChoice() {
    let choice =
    return Math.random();
}

// Prompt for player choice

// Determine who wins
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