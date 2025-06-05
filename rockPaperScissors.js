const getComputerChoice = function() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const getHumanChoice = function() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice;
    do {
        choice = prompt(`Please enter your choice (${choices.join(', ')}):`).toLowerCase(); // Convert input to lowercase for consistency
    } while (!choices.includes(choice));
    return choice;
}

const playRound = function() {
    const computerChoice = getComputerChoice();
    const humanChoice = arguments[0]; // Get the human choice from the button click event;

    gameInfo.textContent = `\nComputer chose: ${computerChoice}`;
    gameInfo.textContent += `\nYou chose: ${humanChoice}`;

    if (computerChoice === humanChoice) {
        gameInfo.textContent += "\nIt's a tie!";
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        computerScore++;
        gameInfo.textContent += "\nComputer wins!";
    } else {
        humanScore++;
        gameInfo.textContent += "\nYou win!";
    }
    scoreCheck();
}

const playGame = function() {
    //The parseInt function takes the string input and tries to convert it into an integer. The second argument, 10, tells parseInt to interpret the input as a base-10 (decimal) number.
    const rounds = parseInt(prompt("How many rounds would you like to play?"), 10);
    if (isNaN(rounds) || rounds <= 0) {
        gameInfo.textContent = "Please enter a valid number of rounds.";
        return;
    }
    for (let i = 0; i < rounds; i++) {
        gameInfo.textContent += `Round ${i + 1}:\n`;
        playRound();
    }
    gameInfo.textContent += `Final Score - You: ${humanScore}, Computer: ${computerScore}\n`;
    if (humanScore > computerScore) {
        gameInfo.textContent += "\nCongratulations! You win the game!";
    } else if (humanScore < computerScore) {
        gameInfo.textContent += "\nComputer wins the game!";
    } else {
        gameInfo.textContent += "\nThe game is a tie!";
    }
}

// Program buttons to select players choice and start the game
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        gameInfo.textContent += `You chose: ${humanChoice}\n`;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

const scoreCheck = function() {
    if (humanScore === 5 || computerScore === 5) {
        gameInfo.textContent += "\n\nGame Over! Final Scores:\n";
        gameInfo.textContent += `You: ${humanScore}, Computer: ${computerScore}\n`;
        if (humanScore > computerScore) {
            gameInfo.textContent += "\nCongratulations! You win the game!";
        }
        else if (humanScore < computerScore) {
            gameInfo.textContent += "\nComputer wins the game!";
        }
        else {
            gameInfo.textContent += "\nThe game is a tie!";
        }
        humanScore = 0; // Reset scores for a new game
        computerScore = 0;
    }
    else {
        gameInfo.textContent += `\n\nYou: ${humanScore}, Computer: ${computerScore}\n`;
    }
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

const gameInfo = document.createElement('div');
gameInfo.id = 'gameInfo';
// gameInfo.style.display = 'flex';
// gameInfo.style.flexDirection = 'column';
document.body.appendChild(gameInfo);

