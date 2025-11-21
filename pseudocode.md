/* 
Create function getComputerChoice that returns rock if math.random equals <= 1/3, returns paper if 
math.random > 1/3 and <= 2/3, else returns scissors. */ 


/* 
- Create function getHumanChoice. 
- Prompt user for their choice. 
- Store user choice in var userChoice 
*/ 

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


/* create new function playgame 
- initialise a counter variable and set it to zero
- while the counter is smaller than 5 play round (playRound)
- get play round to return 'win' or 'lose', and store in var result 
- if win, increment user; if lose, increment computer 

*/