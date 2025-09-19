// 1 The function will randomly pick a number between 0-2
// 2 Store the num as a variable
// 3 IF the random number is 0,
// then the function returns "rock"
// ELSE IF the random number is 1, then the function returns "paper"
// ELSE the random number is 2, then the function returns "scissors"
// 4 The program should display the choice of the computer
console.log("Hi, Player!") 

function getComputerChoice() {
    
    let num;
    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
    num = getRandomInt(3);
    // Expected output: 0, 1 or 2

    if (num === 0) {
        return "rock"
    } else if (num === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Welcome the player
// Show the player what the input should be
// Prompt the player to enter
// Store the choice of the player
// Use console.log to check the player's choice 

function getHumanChoice() {
    let humanChoice = prompt("What's your choice, rock, paper or scissors?")
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

// Use humanChoice to take the human's choices
// Use computerChoice to take the computer's choices
// The humanChoice parameter should be case-insensitive (ROCK, Rock, RocK, rock == rock)
// Compare the choices of the computer and the human
// IF the result is rock vs scissors || paper vs rock || scissors vs paper, then one wins
// IF the result is rock vs rock || paper vs paper || scissors vs scissors, then it's a tie
// Show the round winner one of the results: "You win/lose, Paper beats Rock / Rock beats Scissors, Scissors beats Paper" or "The game was tied! rock vs rock || paper vs paper || scissors vs scissors."
// Increment the winner's score by 1 

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    // IF computer wins
    if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("The computer wins! Rock beats Scissors");
        computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock" ) {
        console.log("The computer wins! Paper beats Rock")
        computerScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("The computer wins! Scissors beats Paper")
        computerScore++;

    // IF human wins
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
       console.log("You win! Rock beats Scissors"); 
       humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
       console.log("You win! Paper beats Rock") 
       humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
       console.log("You win! Scissors beats Paper")
       humanScore++; 

    // IF it was a tie
    } else if (computerChoice == "rock" && humanChoice == "rock") {
       console.log("The game was tied! Rock vs Rock")  
    } else if (computerChoice == "paper" && humanChoice == "paper") {
       console.log("The game was tied! Paper vs Paper")  
    } else if (computerChoice == "scissors" && humanChoice == "scissors") {
       console.log("The game was tied! Scissors vs Scissors")  
    }
}
// The game have 5 rounds
    playRound();
    console.log("The score is now: " + humanScore + " : " + computerScore + "!");

    playRound();
    console.log("The score is now: " + humanScore + " : " + computerScore + "!");

    playRound();
    console.log("The score is now: " + humanScore + " : " + computerScore + "!");

    playRound();
    console.log("The score is now: " + humanScore + " : " + computerScore + "!");
    playRound();
    
    if (humanScore > computerScore) {
        console.log("You're the winner!")
    } else {
        console.log("Oop! The computer is the winner!")
    }
}

playGame();



