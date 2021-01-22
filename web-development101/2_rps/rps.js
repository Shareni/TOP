function computerPlays() {
    let choice = Math.floor(Math.random() * Math.floor(3));
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
function humanPlays() {
    let choice = window.prompt("Rock, Paper, or Scissors?");
    let choiceLower = choice.toLowerCase();
    return choiceLower.charAt(0).toUpperCase() + choiceLower.slice(1);
}

function scoreRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            return "youWon";
        } else {
            return "youLost";
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return "youWon";
        } else {
            return "youLost";
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            return "youWon";
        } else {
            return "youLost";
        }
    }
}

function playRound() {
    let playerSelection = humanPlays();
    let computerSelection = computerPlays();

    let youWon = `You won! ${playerSelection} beats ${computerSelection}`;
    let youLost = `You lost! ${computerSelection} beats ${playerSelection}`;
    let tie = `It's a tie! You both played ${playerSelection}`;

    let result = scoreRound(playerSelection, computerSelection);

    if (result === "tie") {
        console.log(tie);
        return playRound();
    } else if (result === "youWon") {
        console.log(youWon);
        return "youWon";
    } else if (result === "youLost") {
        console.log(youLost);
        return "youLost";
    } else {
        console.log("Round ERROR");
    }
}

function game(round) {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (i = 1; i <= round; i++) {
        let result = playRound();
        if (result === "youWon") {
            scorePlayer++;
        } else if (result === "youLost") {
            scoreComputer++;
        } else {
            console.log('SCORE ERROR');
        }
        console.log(`The score for round ${i} is Player: ${scorePlayer} Computer: ${scoreComputer}`);
    }
    scorePlayer = 0;
    scoreComputer = 0;
}

game(5);
