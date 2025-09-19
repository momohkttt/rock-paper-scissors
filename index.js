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

let result = getComputerChoice();
console.log(result);





