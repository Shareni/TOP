function computerPlays() {
    let choice = Math.floor(Math.random() * Math.floor(3));
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else if (choice === 2) {
        return 'Scissors';
    }
}

function humanPlays() {
    let choice = window.prompt("Rock, Paper, or Scissors?");
    let choiceLower = choice.toLowerCase();
    return choiceLower.charAt(0).toUpperCase() + choiceLower.slice(1);
}

let scorePlayer = 0;
let scoreComputer = 0;

function playRound(playerSelection, computerSelection) {
    let youWon = `You won! ${playerSelection} beats ${computerSelection}`;
    let youLost = `You lost! ${computerSelection} beats ${playerSelection}`;

    if (playerSelection === computerSelection) {
        return `It's a tie! You both played ${playerSelection}`;
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            scorePlayer++;
            return youWon;
        }
        else {
            scoreComputer++;
            return youLost;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            scorePlayer++;
            return youWon;
        } else {
            scoreComputer++;
            return youLost;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            scorePlayer++;
            return youWon;
        }
        else {
            scoreComputer++;
            return youLost;
        }
    }
}

function game(round) {
    for (i = 1; i <= round; i++) {
        console.log(`Round ${i}: ${playRound(humanPlays(), computerPlays())}`);
        console.log(`The overall the score is ${scorePlayer} for the human, and ${scoreComputer} for the computer`)
    }
    scoreComputer = 0;
    scorePlayer = 0;
}

game(5);
