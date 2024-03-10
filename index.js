function getComputerChoice () {
    const strings = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * strings.length);

    return strings[randomIndex];
};

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
            return "You win!";
    } else if (playerSelection === computerSelection) {
        return "You lose!";
    } else {
        return "It's a tie!";
    }
};

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Round ${i + 1}: Enter your choice (rock, paper, or scissors):`).toLowerCase();

        // Validate the player's input
        if (!["rock", "paper", "scissors"].includes(playerSelection)) {
            alert("Invalid input! Please enter 'rock', 'paper', or 'scissors'.");
            i--;
            continue; // Exit the function if input is invalid
        }

        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        alert(`Round ${i + 1} Result: ${result}`)

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    document.getElementById('results').textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`
};

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    playGame();
});