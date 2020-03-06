const infoBox = document.querySelector('#info_box');
const resultsBox = document.querySelector('#result');
const button = document.querySelector('#start_btn');


let gameString = document.querySelector('#gameNum');
gameString.innerHTML = 0;

let game = -2;
let playerScore = 0;
let computerScore = 0;
let totalWins = 0;

let playerScoreBoard = document.querySelector('#pScore');
let computerScoreBoard = document.querySelector('#cScore');

function powerOn() {
    infoBox.innerHTML = "";

    if (document.getElementById("start_btn").style.visibility = "hidden") {
    setTimeout(function() {
        document.getElementById("start_btn").style.visibility = "visible";
    }, 2500);
    }
    else if(document.getElementById("start_btn").style.visibility = "visible") {
        document.getElementById("start_btn").style.visibility = "hidden";
    }
    else {
        console.log('else');
    }
    console.log('done');
}

function startGame() {
    game = 0;
    playerScore = 0;
    computerScore = 0;
    gameString.innerHTML = 1;
    computerScoreBoard.classList.remove('hidden');
    playerScoreBoard.classList.remove('hidden');
    playerScoreBoard.innerHTML = playerScore;
    computerScoreBoard.innerHTML = computerScore;
    button.value = 'Reset Game';
    infoBox.innerHTML = "";

    let warningText = document.querySelector('#warning_container span');
    warningText.textContent = '';
}

document.querySelector('#btn_paper').addEventListener('click', function(){
    (game < 0) ? startGameMessage() : setChoices('paper');
});

document.querySelector('#btn_rock').addEventListener('click', function() {
    (game < 0) ? startGameMessage() : setChoices('rock');
});

document.querySelector('#btn_scissors').addEventListener('click', function(){
    (game < 0) ? startGameMessage() : setChoices('scissors');
});

function startGameMessage(){
    let warningBox = document.querySelector('#warning_container');
    let closeButton = document.querySelector('#warning_close')
    let warningText = document.querySelector('#warning_container span');
    if(game === -2) {
        // warningText.textContent = 'Please Start The Game!';
        warningBoxPopUp(warningBox, closeButton);
    } else {
        warningBoxPopUp(warningBox, closeButton);
    }
}

function warningBoxPopUp(warningBox, closeButton) {
    warningBox.classList.remove('hidden');
        closeButton.addEventListener('click', function(){
            warningBox.classList.add('hidden');
        })
}

function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return 'paper';
            break;
        case 1:
            return 'rock';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

function setChoices(choice) {
    let playerChoice = choice;
    round(playerChoice, computerChoice());
};

function round(playerChoice, computerChoice){
    resultsBox.innerHTML = '';

    if(playerChoice === computerChoice) {     
        infoBox.classList.remove('hidden');
        infoBox.innerHTML = playerChoice + ' VS ' + computerChoice;
        game++;
    } else {
        if(playerChoice === 'rock'){
            switch (computerChoice) {
                case 'paper':
                    addWin('computer', playerChoice, computerChoice);
                    break;
                default:
                    addWin('player', playerChoice, computerChoice);                
            }
        } else if(playerChoice === 'paper', playerChoice, computerChoice) {
            switch (computerChoice) {
                case 'scissors':
                    addWin('computer', playerChoice, computerChoice);
                    break;
                default:
                    addWin('player', playerChoice, computerChoice);               
            }
        } else {
            switch (computerChoice) {
                case 'rock':
                    addWin('computer', playerChoice, computerChoice);
                    break;
                default:
                    addWin('player', playerChoice, computerChoice); 
            }
        }
    }
    evaluateGame();
};

function setPlayerScores(){
    playerScoreBoard.innerHTML = playerScore;
    computerScoreBoard.innerHTML = computerScore;
}

function addWin(winner, playerChoice, computerChoice) {
    if (winner === 'player') {
        infoBox.classList.remove('hidden');
        infoBox.innerHTML = playerChoice + ' VS ' + computerChoice;
        playerScore++;
        game++;    
    } else {
        infoBox.classList.remove('hidden');
        infoBox.innerHTML = playerChoice + ' VS ' + computerChoice;;
        computerScore++;
        game++; 
    }
    setPlayerScores();
}

function endGame(){
    button.value = 'Start Game';
    game = 0;
    if (playerScore > computerScore) {
        resultsBox.classList.remove('hidden');
        resultsBox.innerHTML = '<p>you win!</p>';
        totalWins ++;
    } else {
        resultsBox.classList.remove('hidden');
        resultsBox.innerHTML = '<p>you lose!</p>';
    }

    playerScore = 0;
    computerScore = 0;
    console.log(totalWins);
    
}

function evaluateGame(){
    if(playerScore === 5 || computerScore === 5){
        endGame()
    }

    if(game > 0){
        gameString.innerHTML = game;
    }
}