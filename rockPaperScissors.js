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
    const humanChoice = getHumanChoice();

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
}

const playGame = function() {
    const rounds = parseInt(prompt("How many rounds would you like to play?"), 10); //The parseInt function takes the string input and tries to convert it into an integer. The second argument, 10, tells parseInt to interpret the input as a base-10 (decimal) number.
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

let humanScore = 0;
let computerScore = 0;
