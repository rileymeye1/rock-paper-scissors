let playerScore = 0;
console.log("Player's current score is: " + playerScore);

let computerScore = 0;
console.log("Computer's current score is: " + computerScore);

let gameRound = 0;
console.log("You have played " + gameRound + " rounds.");

while (gameRound < 5) {
    game();
}

function game() {

const playerSelection = getPlayerChoice();

function getPlayerChoice() {
    playerTurn = prompt('Please choose Rock, Paper or Scissors?');
    return playerTurn;
}

const computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerTurn = choices[Math.floor(Math.random()*choices.length)];
    return computerTurn;
}

playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();
    computer = computerSelection.toUpperCase();
    if (player === computer) {
        result = "It's a tie!";
    }
    else if (player == 'ROCK') {
        if (computer == 'SCISSORS') {
            result = "You Won!";
        }else{
            result = "You Lose!";
        }
    }
    else if (player == 'PAPER') {
        if (computer == 'ROCK') {
            result = "You Won!";
        }else{
            result = "You Lose!";
        }
    }
    else if (player == 'SCISSORS') {
        if (computer == 'PAPER') {
            result = "You Won!";
        }else{
            result = "You Lose!";
        }
    }
    if (result == "You Won!") {
        playerScore++;
        gameRound++;
    }
    else if (result == "You Lose!") {
        computerScore++;
        gameRound++;
    }
    else {
        playerScore++;
        computerScore++;
        gameRound++;
    }
}

console.log("This is the Player's selection: " + playerSelection);
console.log("This is the Computer's selection: " + computerSelection);
console.log("Player's new score is: " + playerScore);
console.log("Computer's new score is: " + computerScore);
console.log("You have now played " + gameRound + " rounds.");

}

function determineWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {
        return "It's a TIE! GAME OVER"
    }
    else if (playerScore > computerScore) {
        return "You WON! GAME OVER"
    }
    else {
        return "You LOST! GAME OVER"
    }
}

console.log(determineWinner(playerScore, computerScore));