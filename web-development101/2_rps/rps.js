function computerPlays() {
    let choice = Math.floor(Math.random() * Math.floor(3));
    if (choice === 0) {
        return 'Rock';
    }
    else if (choice === 1) {
        return 'Paper';
    }
    else if (choice === 2) {
        return 'Scissors';
    }
}

function humanPlays() {
    let choice = window.prompt("Rock, Paper, or Scissors?");
    let smallchoice = choice.toLowerCase();
    return smallchoice.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
    let youWon = `You won! ${playerSelection} beats ${computerSelection}`;
    let youLost = `You lost! ${computerSelection} beats ${playerSelection}`;

    if (playerSelection === computerSelection) {
        return `It's a tie! You both played ${humanMove}`;
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

playRound();
