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

    console.log(`Computer chose: ${computerChoice}`);
    console.log(`You chose: ${humanChoice}`);

    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        computerScore++;
        console.log("Computer wins!");
    } else {
        humanScore++;
        console.log("You win!");
    }
    scoreCheck();
}

const playGame = function() {
    //The parseInt function takes the string input and tries to convert it into an integer. The second argument, 10, tells parseInt to interpret the input as a base-10 (decimal) number.
    const rounds = parseInt(prompt("How many rounds would you like to play?"), 10);
    if (isNaN(rounds) || rounds <= 0) {
        console.log("Please enter a valid number of rounds.");
        return;
    }
    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}:`);
        playRound();
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Program buttons to select players choice and start the game
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        console.log(`You chose: ${humanChoice}`);
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

const scoreCheck = function() {
    if (humanScore === 5 || computerScore === 5) {
        console.log("Game Over! Final Scores:");
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        if (humanScore > computerScore) {
            console.log("Congratulations! You win the game!");
        }
        else if (humanScore < computerScore) {
            console.log("Computer wins the game!");
        }
        else {
            console.log("The game is a tie!");
        }
    }
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;