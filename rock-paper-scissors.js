 //  Game of rock paper scissors 

let rock, paper, scissors

let player1 = 0;
let computer = 0;



let button = document.querySelector(".button").addEventListener('click',playRound)
let button2 = document.querySelector(".button2").addEventListener('click',playRound)
let button3 = document.querySelector(".button3").addEventListener('click',playRound)




function playRound(){

const playerSelection = prompt('Rock Paper or Scissors?').toLowerCase()
const computerSelection = getComputerChoice()


if(playerSelection === "rock" && computerSelection === "rock"){
    let tie = document.querySelector('h1').innerText ="TIE Game"
    return 0;

}
else if (playerSelection === "rock" && computerSelection === "paper"){
    let lose = document.querySelector('h1').innerText ="You Lose. Paper beats Rock"
    computer++
}

else if (playerSelection === "rock" && computerSelection === "scissors"){
    let win = document.querySelector('h1').innerText ="You Win! Rock beats Scissors"
    player1++
}
else if(playerSelection === "paper" && computerSelection === "rock"){
    let win = document.querySelector('h1').innerText ="You Win! Paper beats Rock"
    player1++
}
else if (playerSelection === "paper" && computerSelection === "paper"){
    let tie = document.querySelector('h1').innerText ="TIE Game"
    return 0;
}

else if (playerSelection === "paper" && computerSelection === "scissors"){
    let lose = document.querySelector('h1').innerText ="You Lose! Scissors beats Paper"
    computer++
}
else if(playerSelection === "scissors" && computerSelection === "rock"){
    let lose = document.querySelector('h1').innerText ="You Lose! Rock beats Scissors"
    computer++
}
else if (playerSelection === "scissors" && computerSelection === "paper"){
    let win = document.querySelector('h1').innerText ="You Won! Scissors beats Paper."
    player1++
}

else if (playerSelection === "scissors" && computerSelection === "scissors"){
    let tie = document.querySelector('h1').innerText ="TIE Game"
    return 0;
}

else {
    
    document.querySelector('h1').innerHTML = "Enter a Valid Input."
}
console.log(player1)
console.log(computer)

if(computer === 5 || player1 ===5){
    let result= document.querySelector('#result')
    if(player1 === 5){
        result.innerText = "You Won"
    }
    else if(computer === 5){
        result.innerText = " Computer Won"
    }
    else{
        result.innerText = "You Lose"
    }
}

}


function getComputerChoice(){
    let random = Math.random()
    let choice 

    if (random < 0.3) {
        choice = "rock"
    }
    else if( random < 0.6){
        choice = "paper"
    }
    else{
        choice = "scissors"
    }
    return choice
   
}



   


