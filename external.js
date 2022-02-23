let playerScore = 0;
let computerScore = 0;
// computer generating random string.
function computer() {
    const choice = ['rock', 'scissors', 'paper'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

// creating round play
function playerRound () {
    let computerSelection = computer();
    let playerSelection = prompt('what your choice?', '' .toLowerCase());
    

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        alert('you lose! paper beats rock');

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        alert('you lose! scissors beats paper');

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        alert('you lose! rock beats scissors');
       

        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        alert('you win! rock beats scissors');
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        alert('you win! paper beats rock');
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        alert('you win! scissors beats paper');
        
    }
    
    if (playerScore >= 3) {
        alert('you win the game! kudos');
    } else if (computerScore >= 3) {
        alert('computer win the game!');
    }
    
    

} 


function game() {
    for (let i = 1; playerScore < 3 && computerScore < 3; i++) {
       playerRound(); 
    }
   
}
game();