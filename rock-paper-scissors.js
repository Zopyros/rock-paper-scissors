
let rock, paper, scissors


function playRound(){

const playerSelection = prompt('Rock Paper or Scissors?').toLowerCase()
const computerSelection = getComputerChoice()


if(playerSelection === "rock" && computerSelection === "rock"){
    return 'TIE Game!'

}
else if (playerSelection === "rock" && computerSelection === "paper"){
    return 'You Lose. Paper beats Rock.'
}

else if (playerSelection === "rock" && computerSelection === "scissors"){
    return 'You Win! Rock beats Scissors.'
}
else if(playerSelection === "paper" && computerSelection === "rock"){
    return 'You Win! Paper beats Rock.'
}
else if (playerSelection === "paper" && computerSelection === "paper"){
    return 'TIE Game!'
}

else if (playerSelection === "paper" && computerSelection === "scissors"){
    return 'You Lose! Scissors beats Paper.'
}
else if(playerSelection === "scissors" && computerSelection === "rock"){
    return 'You Lose! Rock beats Scissors.'
}
else if (playerSelection === "scissors" && computerSelection === "paper"){
    return 'You Won! Scissors beats Paper.'
}

else if (playerSelection === "scissors" && computerSelection === "scissors"){
    return 'TIE Game!'
}

else {
    
    document.querySelector('h1').innerHTML = "Enter a Valid Input."
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



function game(){
    let player1 = 0
    let computer = 0

    let numberPlays = Number(prompt('How many times do you want to play?')) 
    for (let i = 0; i < numberPlays; i++) {
        let result = playRound()
        
        
        if(result === 'TIE Game!'){
            player1 +=0
        }
        else if(result === 'You Lose. Paper beats Rock.'){
            computer++
        }
        else if(result === 'You Win! Rock beats Scissors.'){
            player1++
        }
        else if(result === 'You Win! Paper beats Rock.'){
            player1++
        }
        else if(result === 'You Lose! Scissors beats Paper.'){
            computer++
        }
        else if(result === 'You Lose! Rock beats Scissors.'){
            computer++
        }
        else if(result === 'You Won! Scissors beats Paper.'){
            player1++
        }
        else{
            player += 0
        }

        if(numberPlays === (i+1)){
            if(player1 > computer)
                alert(`You Won! Out of ${numberPlays} games, you got ${player1} points.`)
            else if ( player1 < computer){
                alert(`You Lose! Out of ${numberPlays} games, you got ${player1} points while computer got ${computer} points.`)
            }
            else{
                alert('TIE Game!')
            }
        }
        
    }
    
   
}

game()
