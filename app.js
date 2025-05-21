let userScore = 0;
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

let rock = document.querySelector('#rock').addEventListener('click', playRound());
let paper = document.querySelector('#paper').addEventListener('click', playRound());
let scissors = document.querySelector('#scissors').addEventListener('clickl', playRound());



function playRound(userChoice, computerChoice) {
    console.log(`User choice: ${userChoice} | Computer choice: ${computerChoice}`)
    if (userChoice === computerChoice) {
        console.log('Tie!')
    } else if (userChoice === 'rock' && computerChoice === 'paper')  {
        console.log('User loses. Paper beats rock.')
        computerScore++;
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('User wins! Rock beats scissors.')
        userScore++;
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Computer wins. Scissors beats paper.')
        computerScore++;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('User wins! Paper beats rock.')
        userScore++;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log('User wins! Scissors beats paper.')
        userScore++;
    } else {
        console.log('Computer wins. Rock beats scissors.')
        computerScore++;
    } 
    console.log(`User score: ${userScore} | Computer score: ${computerScore}`);
};



playGame();