const rock = document.getElementById("rock").addEventListener("click", () => {
    game("rock");
});
const paper = document.getElementById("paper").addEventListener("click", () => {
    game("paper");
});
const scissors = document.getElementById("scissors").addEventListener("click", () => {
    game("scissors");
});


let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    let choice = options[i];
    return choice;
};

function getPlayerChoice(choice) {
    let a = choice.charAt(0).toUpperCase();
    let b = choice.slice(1).toLowerCase();
    choice = a + b;
    return choice;
};

function gameRound(playerSelection, computerSelection) {
    let scores = [0,1]; // Represent player as index 0 and computer as index 1 to return multiple values
    let resultMessage = document.getElementById("results")

    if (playerSelection == computerSelection) {
        scores[0] = 0;
        scores[1] = 0;
        resultMessage.textContent = `${playerSelection} vs. ${computerSelection} is a tie!`;
    }
    
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
        scores[0] = 1;
        scores[1] = 0;
        resultMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;    
    } 
    
    else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        scores[0] = 0;
        scores[1] = 1;
        resultMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    return scores;
};

function game(playerChoice) {
    let resultMessage = document.getElementById("results");
    let scores = gameRound(getPlayerChoice(playerChoice), getComputerChoice());

    playerWins += scores[0];
    computerWins += scores[1];
    console.log(scores);
    console.log(playerWins);
    console.log(computerWins);

    resultMessage.textContent += (` Your score: ${playerWins} | Computer's score: ${computerWins}`);


    let victoryMessage = document.createElement("p", "");
    if (playerWins == 5) {
        resultMessage.appendChild(victoryMessage);
        victoryMessage.textContent = "You win!"
        playerWins = 0;
        computerWins = 0;
    }
    else if (computerWins == 5) {
        resultMessage.appendChild(victoryMessage);
        victoryMessage.textContent = "Computer wins!"
        playerWins = 0;
        computerWins = 0;
    }
};