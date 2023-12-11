function getComputerChoice() {
    let computerChoiceArray = ["rock", "paper", "scissors"];
    let computerChoiceNumber = Math.floor(Math.random() * 3);
    return computerChoiceArray[computerChoiceNumber];
}

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Round " + (i + 1) + ": Rock, paper, scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw! Choose again.";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }
}

// Start the game
game(5);


