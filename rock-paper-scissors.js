
let rock, paper, scissors


function playRound(){

const playerSelection = "rock"
const computerSelection = getComputerChoice()

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

console.log(getComputerChoice())



