humanScore = 0;
computerScore = 0;


// 1 The function will randomly pick a number between 0-2
// 2 Store the num as a variable
// 3 IF the random number is 0,
// then the function returns "rock"
// ELSE IF the random number is 1, then the function returns "paper"
// ELSE the random number is 2, then the function returns "scissors"
// 4 The program should display the choice of the computer

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

let computerChoice = getComputerChoice();
console.log(computerChoice);

// Welcome the player
// Show the player what the input should be
// Prompt the player to enter
// Store the choice of the player
// Use console.log to check the player's choice 

function getHumanChoice() {
    let humanChoice;
    console.log("Hi, Player!")
    humanChoice = prompt("What's your choice, rock, paper or scissors?")
    return humanChoice;
}

humanChoice = humanChoice.toLowerCase();
console.log(humanChoice);




// function playRound(humanChoice, computerChoice) {
    

// }

// Use humanChoice to take the human's choices
// Use computerChoice to take the computer's choices
// The humanChoice parameter should be case-insensitive (ROCK, Rock, RocK, rock == rock)
// Compare the choices of the computer and the human
// IF the result is rock vs scissors || paper vs rock || scissors vs paper, then one wins
// IF the result is rock vs rock || paper vs paper || scissors vs scissors, then it's a tie
// Show the round winner one of the results: "You win/lose, Paper beats Rock / Rock beats Scissors, Scissors beats Paper" or "The game was tied! ock vs rock || paper vs paper || scissors vs scissors."
// Increment the winner's score by 1 
