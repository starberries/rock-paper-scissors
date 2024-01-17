const rock = document.getElementById("rock").addEventListener("click", () => {
    game("rock");
});
const paper = document.getElementById("paper").addEventListener("click", () => {
    game("paper");
});
const scissors = document.getElementById("scissors").addEventListener("click", () => {
    game("scissors");
});

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
    let result
    let resultMessage = document.getElementById("results")

    if (playerSelection == computerSelection) {
        result = 0;
        resultMessage.textContent = `${playerSelection} vs. ${computerSelection} is a tie!`;
    }
    
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
        result = 1
        resultMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;    
    } 
    
    else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        result = 0;
        resultMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    return result;
};

function game(playerChoice) {
    let wins = 0;
    let result = gameRound(getPlayerChoice(playerChoice), getComputerChoice());
    let resultMessage = document.getElementById("results");
    if (result) {
        wins++;
    }
    // let result
    // for (let i = 0; i < 5; i++) {
    //     result = gameRound(getPlayerChoice(), getComputerChoice());
    //     if (result) {
    //         wins++;
    //     }
    // }
    resultMessage.textContent += (`You won ${wins} rounds!`);
};