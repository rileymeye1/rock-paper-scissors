//create a function called getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let selection = choices[Math.floor(Math.random()*choices.length)];
    return selection;
}

//create a variable computerSelection to store the Computers choice
const computerSelection = getComputerChoice();
console.log("This is Computer's selection: " + computerSelection);

//create a variable playerSelection to store the Users choice
const playerSelection = 'Rock';
console.log("This is the Player's selection: " + playerSelection);

//create a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();
    computer = computerSelection.toUpperCase();
    if (player === computer) {
        return "It's a tie!";
    }
    else if (player == 'ROCK') {
        if (computer == 'SCISSORS') {
            return "You Won! ROCK beats SCISSORS.";
        }else{
            return "You Lose! PAPER beats ROCK.";
        }
    }
    else if (player == 'PAPER') {
        if (computer == 'ROCK') {
            return "You Won! PAPER beats ROCK.";
        }else{
            return "You Lose! SCISSORS beats PAPER.";
        }
    }
    else if (player == 'SCISSORS') {
        if (computer == 'PAPER') {
            return "You Won! SCISSORS beats PAPER.";
        }else{
            return "You Lose! ROCK beats SCISSORS.";
        }
    }
}

console.log(playRound(playerSelection, computerSelection));