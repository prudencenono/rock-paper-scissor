const yourChoice = document.getElementById("");
const yourChoice = document.getElementById("yourChoice");
let result = document.getElementById("result");
let yourTurn

let btns = document.querySelectorAll("button");
console.log(btns);

btns.forEach((btn) =>{
    btn.addEventListener("click", yourSelection)

    
})

function yourSelection(e){
    yourTurn = e.target.id;
    yourChoice.textContent = yourTurn;

    computerSelection();

}

function computerSelection(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1) {
        computerTurn = "rock"
        computerChoice.innerText = "computerTurn";
    }
    if(randomNumber === 2) {
        computerTurn = "scissor"
        computerChoice.innerText = "computerTurn";
    }
    if(randomNumber === 3) {
        computerTurn = "paper"
        computerChoice.innerText = "computerTurn";
    }
}

function displayResult() {
    if(yourChoice === computerTurn){
        result = "Draw"
    }

    if(computerTurn === "rock" && yourTurn "paper"){
        result = "You win"
    }

    if(computerTurn === "rock" && yourTurn "scissor"){
        result = "You lose"
    }

    if(computerTurn === "paper" && yourTurn "scissor"){
        result = "You win"
    }

    if(computerTurn === "paper" && yourTurn "rock"){
        result = "You lose"
    }

    if(computerTurn === "scissor" && yourTurn "rock"){
        result = "You win"
    }

    if(computerTurn === "scissor" && yourTurn "paper"){
        result = "You lose"
    }

    resultD.innerText = result;

}