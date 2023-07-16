//create a variable playerSelection to store the Users choice
const playerSelection = prompt('Please choose Rock, Paper or Scissors?')
console.log("This is the Player's selection: " + playerSelection);

//create a function called getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let selection = choices[Math.floor(Math.random()*choices.length)];
    return selection;
}

//create a variable computerSelection to store the Computers choice
const computerSelection = getComputerChoice();
console.log("This is Computer's selection: " + computerSelection);

//create a variable to store the player's score
let playerScore = 0;
console.log(playerScore);

//create a variable to store the computer's score
let computerScore = 0;
console.log(computerScore);

//create a variable to store the Round you are currently on.
let gameRound = 0;
console.log(gameRound);

//create a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();
    computer = computerSelection.toUpperCase();
    if (player === computer) {
        return "It's a tie!";
    }
    else if (player == 'ROCK') {
        if (computer == 'SCISSORS') {
            return "You Won! Rock beats Scissors.";
        }else{
            return "You Lose! Paper beats Rock.";
        }
    }
    else if (player == 'PAPER') {
        if (computer == 'ROCK') {
            return "You Won! Paper beats Rock.";
        }else{
            return "You Lose! Scissors beats Paper.";
        }
    }
    else if (player == 'SCISSORS') {
        if (computer == 'PAPER') {
            return "You Won! Scissors beats Paper.";
        }else{
            return "You Lose! Rock beats Scissors.";
        }
    }
}
console.log(playRound(playerSelection, computerSelection));