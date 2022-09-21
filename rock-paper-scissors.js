
let rock, paper, scissors


function playRound(){

const playerSelection = prompt('Rock Paper or Scissors?').toLowerCase()
const computerSelection = getComputerChoice()


if(playerSelection === "rock" && computerSelection === "rock"){
    alert('TIE Game!')

}
else if (playerSelection === "rock" && computerSelection === "paper"){
    alert('You Lose. Paper beats Rock')
}

else if (playerSelection === "rock" && computerSelection === "scissors"){
    alert('You Win! Rock beats Scissors.')
}
else if(playerSelection === "paper" && computerSelection === "rock"){
    alert('You Win! Paper beats Rock')
}
else if (playerSelection === "paper" && computerSelection === "paper"){
    alert('TIE Game!')
}

else if (playerSelection === "paper" && computerSelection === "scissors"){
    alert('You Lose! Scissors beats Paper')
}
else if(playerSelection === "scissors" && computerSelection === "rock"){
    alert('You Lose! Rock beats Scissors')
}
else if (playerSelection === "scissors" && computerSelection === "paper"){
    alert('You Won! Scissors beats Paper.')
}

else if (playerSelection === "scissors" && computerSelection === "scissors"){
    alert('TIE Game!')
}

else {
    document.querySelector('h1').innerHTML = "ERROR"
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


playRound()



