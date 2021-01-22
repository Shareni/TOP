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

function playRound(playerSelection, computerSelection) {
    let youWon = `You won! ${playerSelection} beats ${computerSelection}`;
    let youLost = `You lost! ${computerSelection} beats ${playerSelection}`;

    if (playerSelection === computerSelection) {
        return `It's a tie! You both played ${playerSelection}`;
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            return youWon;
        }
        else {
            return youLost;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return youWon;
        } else {
            return youLost;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            return youWon;
        }
        else {
            return youLost;
        }
    }
}

function game(round) {
    for (i = 1; i <= round; i++) {
        console.log(`Round ${i}: ${playRound(humanPlays(), computerPlays())}`);
    }
}

game(5);
