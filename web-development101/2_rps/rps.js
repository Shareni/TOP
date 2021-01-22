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

    if (choiceLower === "rock" || choiceLower === "paper" || choiceLower === "scissors") {
        return choiceLower.charAt(0).toUpperCase() + choiceLower.slice(1);
    } else {
        return humanPlays();
    }
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
    let result = scoreRound(playerSelection, computerSelection);

    if (result === "tie") {
        console.log(`It's a tie! You both played ${playerSelection}`);
        return playRound();
    } else if (result === "youWon") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return "youWon";
    } else if (result === "youLost") {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        return "youLost";
    }
}

function game(round) {
    let scorePlayer = 0;
    let scoreComputer = 0;
    let wins = Math.floor((round / 2) + 1)

    for (i = 1; i <= round; i++) {
        let result = playRound();
        if (result === "youWon") {
            scorePlayer++;
        } else if (result === "youLost") {
            scoreComputer++;
        }

        console.log(`The score for round ${i} is Player: ${scorePlayer} Computer: ${scoreComputer}`);

        if (scorePlayer === wins) {
            console.log(`YOU WON!!! How does it feel to beat a machine?`);
            break;
        } else if (scoreComputer === wins) {
            console.log(`Well, you lost, but don't feel too bad, you're only human...`);
            break;
        }
    }
}

game(5);
