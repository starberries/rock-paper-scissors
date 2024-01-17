function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    let result = options[i]; 
    console.log(result);
    return result;
};

function getPlayerChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    let a = choice.charAt(0).toUpperCase();
    let b = choice.slice(1).toLowerCase();
    choice = a + b;
    if (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") {
        choice = console.log("Try again!")
    } else {
        choice = a + b;
        console.log(choice);
        return choice;
    }
};

function gameRound(playerSelection, computerSelection) {
    let result

    if (playerSelection == computerSelection) {
        result = 0;
        console.log(`${playerSelection} vs. ${computerSelection} is a tie!`);
    }
    
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
        result = 1
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);    
    } 
    
    else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        result = 0;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
    }
    console.log(result);
    return result;
};

function game() {
    let wins = 0;
    let result
    for (let i = 0; i < 5; i++) {
        result = gameRound(getPlayerChoice(), getComputerChoice());
        if (result) {
            wins++;
        }
    }
    console.log(`You won ${wins} rounds!`);
};

game();