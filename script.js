console.log("test")
let userScore = 0;
let computerScore = 0;


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

  

function playRound(user, computer) {
    user = user.toLowerCase();
    computer = computer.toLowerCase();


    if(user === "rock" && computer === "scissors") {
        console.log("You win! Rock beats Scissors");
        return "You win! Rock beats Scissors";
    } else if(user === "paper" && computer === "rock") {
        console.log("You win! Paper beats Rock");
        return "You win! Paper beats Rock";
    } else if(user === "scissors" && computer === "paper") {
        console.log("You win! Scissors beats Paper");
        return "You win! Scissors beats Paper";
    } else if(user === "rock" && computer === "paper") {
        console.log("You lose! Paper beats Rock");
        return "You lose! Paper beats Rock";
    } else if(user === "paper" && computer === "scissors") {
        console.log("You lose! Scissors beats Paper");
        return "You lose! Scissors beats Paper";
    } else if(user === "scissors" && computer === "rock") {
        console.log("You lose! Rock beats Scissors");
        return "You lose! Rock beats Scissors";
    } else {
        console.log("Honourable Draw!");
        return "Honourable Draw!"; 
    }
}
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
    const className = event.target.className;
    console.log(`player: ${className}`);
    let userChoice;
    switch (className) {
        case "rock":
            userChoice = "rock";
            break;
        case "paper":
            userChoice = "paper";
            break;
        case "scissors":
            userChoice = "scissors";    
    }
    const result = playRound(userChoice, getComputerChoice());
    keepScore(result);
    });
});

let score = document.querySelector(".score");
 
  

function keepScore(result) {


    if (result.includes("win")) {
        userScore++;    
    }
    if (result.includes("lose")) {
        computerScore++;
        
    }
    if (result.includes("Draw")) {
        computerScore++;
        userScore++;    
    }

    score.textContent = `Player: ${userScore}   Computer: ${computerScore}`;
    score.style.border = "2px solid black";


    let message = document.querySelector(".results");
    const para = document.createElement("p");
    message.appendChild(para);
    message.style.border = "2px solid black"
    para.textContent = `${result} - ${score.textContent}`;

    if (computerScore === 5 && userScore === 5) {
        score.textContent = `It's a draw! ${computerScore} - ${userScore}`
        setTimeout(() => {
            alert(score.textContent);
            reset(message, score);
        }, 0);  
        
    }
    if (computerScore === 5) {
        score.textContent = `You Lose! ${computerScore} - ${userScore}`;
        setTimeout(() => {
            alert(score.textContent);    
            reset(message, score);
        }, 0);
        
    }
    if (userScore === 5) {
        score.textContent = `You Win! ${userScore} - ${computerScore}`;
            setTimeout(() => {
                alert(score.textContent);
                reset(message, score);
        }, 0);
        
    }
}

function reset(message, score) {
    userScore = 0;
    computerScore = 0;
    message.textContent = "";
    score.textContent = "";
    message.style.border = "";
    score.style.border = "";
    
}
    

    

