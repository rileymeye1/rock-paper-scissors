//create a function called getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let selection = choices[Math.floor(Math.random()*choices.length)];
    return selection;
}

//create a variable computerSelection to store the Computers choice
const computerSelection = getComputerChoice();
console.log("This is Computer's selection: " + computerSelection);

//create a variable playerSelection to store the Users choice
// let playerSelection = null;

//create a variable computerSelection to store the Computers choice


//create a function called getPlayerChoice where the User can choose 'Rock', 'Paper', or 'Scissors'

//create a function that compares getPlayerChoice with getComputerChoice to determine a winner and returns a string; ensure the playerSelection parameter is case-insensitive
//ensure you return the results of the function call

