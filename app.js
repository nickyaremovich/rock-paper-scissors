humanScore = 0;
computerScore = 0;

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
