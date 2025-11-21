console.log("Hello World");

/* 
Create function getComputerChoice that returns rock if math.random equals <= 1/3, returns paper if 
math.random > 1/3 and <= 2/3, else returns scissors. */ 

let computerChoice = Math.floor(Math.random() * 3);

console.log(computerChoice);

function getComputerChoice() { 
    if(computerChoice === 1) {
        computerChoice = "rock";
    } else if(computerChoice === 2 ) {
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";
    }
}

getComputerChoice();
console.log(computerChoice);


/* 
- Create function getHumanChoice. 
- Prompt user for their choice. 
- Store user choice in var userChoice 
*/ 

let userChoice; 

function getUserChoice() {
    userChoice = prompt("Rock, Paper, Scissors??")
}

getUserChoice();
console.log(userChoice);

let userScore = 0;
let computerScore = 0;

/* 
- Create playRound function which takes userChoice and computerChoice as arguments
- convert both userChoice and computerChoice to lowercase.  
- if user = rock & computer = scissors then alert "You win! Rock beats Scissors" // increment user
- if user = paper & computer = rock then alert "You win! Paper beats Rock" // increment user 
- if user = scissors & computer = paper then alert "You win! Scissors beats Paper" // increment user 
- if user = rock & computer = paper then alert "You lose! Paper beats Rock" // increment computer 
- if user = paper & scissors = paper then alert "You lose! Scissors beats Paper" // increment computer 
- if user = scissors & computer = rock then alert "You lose! Rock beats Scissors" // increment computer
*/ 

function playRound(user, computer) {
    user = user.toLowerCase();
    computer = computer.toLowerCase();
    if(user === "rock" && computer === "scissors") {
        alert("You win! Rock beats Scissors");
        userScore++;
    } else if(user === "paper" && computer === "rock") {
        alert("You win! Paper beats Rock");
        userScore++;
    } else if(user === "scissors" && computer === "paper") {
        alert("You win! Scissors beats Paper");
        userScore++;
    } else if(user === "rock" && computer === "paper") {
        alert("You lose! Paper beats Rock");
        computerScore++;
    } else if(user === "paper" && computer === "scissors") {
        alert("You lose! Scissors beats Paper");
         computerScore++;
    } else if(user === "scissors" && computer === "rock") {
        alert("You lose! Rock beats Scissors");
    } else {
        alert("Honourable Draw!");
    }

    console.log(user);
}

playRound(userChoice, computerChoice);
console.log(`Your score: ${userScore}`);
console.log(`Computer score: ${computerScore}`);


