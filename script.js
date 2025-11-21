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
