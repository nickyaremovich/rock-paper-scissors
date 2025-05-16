let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 2) {
        return 'rock'
    } else if (computerChoice === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
};

function getUserChoice() {
    let userChoice = prompt('Type: rock, paper, or scissors').toLowerCase();
    if (userChoice === 'rock') {
        return 'rock'
    } else if (userChoice === 'paper') {
        return 'paper'
    } else {
        return 'scissors'
    }
}; 

const computerChoice = getComputerChoice();
const userChoice = getUserChoice();

function playRound(userChoice, computerChoice) {
    console.log(`User choice: ${userChoice} | Computer choice: ${computerChoice}`)
    if (userChoice === computerChoice) {
        console.log('Tie!')
    } else if (userChoice === 'rock' && computerChoice === 'paper')  {
        console.log('User loses. Paper beats rock.')
        computerScore++;
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('User wins! Rock beats scissors.')
        humanScore++;
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Computer wins. Scissors beats paper.')
        computerScore++;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('User wins! Paper beats rock.')
        humanScore++;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log('User wins! Scissors beats paper.')
        humanScore++;
    } else {
        console.log('Computer wins. Rock beats scissors.')
        humanScore++;
    } 
    console.log(`User score: ${humanScore} | Computer score: ${computerScore}`);
};

playRound(userChoice, computerChoice);