let playerScores = 0;
let compScore = 0;
const buttons = document.querySelectorAll(".btn");

const alertint = document.querySelector("#output")
alertint.textContent = "Let Begins"

const playerInt = document.querySelector('#playerscore');
playerInt.textContent = `Playerscore: ${playerScores}`;

const computerInt = document.querySelector('#computerscore');
computerInt.textContent = `Computerscore: ${compScore}`;

function computer() {
    const choice = ['rock', 'scissors', 'paper'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}
console.log(computer())

buttons.forEach((button => {

    button.addEventListener('click', () => {

        playerChioce = button.id;
        
        if (playerChioce === "rock") {
            playerChioce = "rock";
        
        } else if (playerChioce === "paper") {
            playerChioce = "paper"
        
        }else if (playerChioce === "scissors") {
            playerChioce = "scissors";
        }

        gameScore()
     });

}));

function playRounds () {
     let computerSelection = computer();
     let playerSelection = playerChioce;

     if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        alertint.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
        

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        alertint.textContent = `You lose ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        alertint.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
       
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScores++
        alertint.textContent = `You win ${playerSelection} beats ${computerSelection}`;
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScores++
        alertint.textContent = `You win ${playerSelection} beats ${computerSelection}`;
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScores++
        alertint.textContent = `You win ${playerSelection} beats ${computerSelection}`;
        
    } else if (playerSelection === computerSelection) {
        alertint.textContent =`Try again is a tie you choose ${playerSelection} computer choose ${computerSelection}`
    }

    
}

function gameScore () {
    alertint.textContent = "";
    playRounds();
    playerInt.textContent = `Playerscore: ${playerScores}`;
    computerInt.textContent = `Computerscore: ${compScore}`;

    if (playerScores === 5) {
        alertint.textContent = "You won the game Enjoy!!!"
        playerScores = 0;
        compScore = 0;
        playerInt.textContent = `Playerscore: ${playerScores}`;
        computerInt.textContent = `Computerscore: ${compScore}`;
        
    } else if (compScore === 5) {
        alertint.textContent = "You lose the game!!!"
        playerScores = 0;
        compScore = 0;
        playerInt.textContent = `Playerscore: ${playerScores}`;
        computerInt.textContent = `Computerscore: ${compScore}`;

    }

}