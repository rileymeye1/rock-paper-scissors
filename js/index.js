//creates the playerScore variable to store the player's score.
let playerScore = 0;
console.log("Player's current score is: " + playerScore);

//creates the computerScore variable to store the computer's score.
let computerScore = 0;
console.log("Computer's current score is: " + computerScore);

//creates the gameRound variable to store the number of rounds played.
let gameRound = 0;
console.log("You have played " + gameRound + " rounds.");

//used a while loop to run the game function 5 times.
while (gameRound < 5) {
    game();
}

//game function stores all the game code.
function game() {

//creates a playerSelection variable to store the player's choice for the round.
const playerSelection = getPlayerChoice();

//a function that prompts the player to make a choice.
function getPlayerChoice() {
    playerTurn = prompt('Please choose Rock, Paper or Scissors?');
    return playerTurn;
}

//creates a computerSelection variable to store the computer's choice for the round.
const computerSelection = getComputerChoice();

//a function that randomly chooses from a set list to make the computer's choice.
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerTurn = choices[Math.floor(Math.random()*choices.length)];
    return computerTurn;
}

//triggers the playRound function.
playRound(playerSelection, computerSelection);

/*a function that converts the playerSelection and computerSelection to all UPPERCASE letters.
It then compares the player and computer to determine a winner and increases the winner's score after each round.*/
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

//a function to determine the winner of the game after 5 rounds.
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