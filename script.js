console.log("Hello World");

/* 
Create function getComputerChoice that returns rock if math.random equals <= 1/3, returns paper if 
math.random > 1/3 and <= 2/3, else returns scissors. */ 




function getComputerChoice() { 
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 1) {
        computerChoice = "rock";
    } else if(computerChoice === 2 ) {
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";
    }
    console.log(`computer: ${computerChoice}`);
    return computerChoice;
}


/* 
- Create function getHumanChoice. 
- Prompt user for their choice. 
- Store user choice in var userChoice 
*/ 


function getUserChoice() {
   let userChoice = prompt("Rock, Paper, Scissors??")
    console.log(`You: ${userChoice}`); 
    return userChoice;
}



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
        console.log("You win! Rock beats Scissors");
        return "win";
    } else if(user === "paper" && computer === "rock") {
        alert("You win! Paper beats Rock");
        console.log("You win! Paper beats Rock");
        return "win";
    } else if(user === "scissors" && computer === "paper") {
        alert("You win! Scissors beats Paper");
        console.log("You win! Scissors beats Paper");
        return "win";
    } else if(user === "rock" && computer === "paper") {
        alert("You lose! Paper beats Rock");
        console.log("You lose! Paper beats Rock");
        return "lose";
    } else if(user === "paper" && computer === "scissors") {
        alert("You lose! Scissors beats Paper");
        console.log("You lose! Scissors beats Paper");
        return "lose";
    } else if(user === "scissors" && computer === "rock") {
        alert("You lose! Rock beats Scissors");
        console.log("You lose! Rock beats Scissors");
        return "lose";
    } else {
        alert("Honourable Draw!");
        console.log("Honourable Draw!");
        return "draw";
    }
}



/* create new function playgame 
- initialise a counter variable and set it to zero
- while the counter is smaller than 5 play round (playRound)
- get play round to return 'win' or 'lose', and store in var result 
- if win, increment user; if lose, increment computer 

*/

function playGame() {
    let userScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const result = playRound(getUserChoice(), getComputerChoice());
        
        if (result === "win") userScore++;
        if(result === "lose") computerScore++;
        

        console.log(`Your score: ${userScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

playGame(); 

