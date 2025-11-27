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

function getUserChoice() {
   let userChoice = prompt("Rock, Paper, Scissors??")
    console.log(`You: ${userChoice}`); 
    return userChoice;
}

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

