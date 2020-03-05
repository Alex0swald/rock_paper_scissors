// title
const title = document.getElementById('title');

// main picks
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Throws

const playerPick = [...document.querySelectorAll('.mb_playermove')];
const compPick = [...document.querySelectorAll('.mb_compmove')];

// game automation variables

const choice = ['rock', 'paper', 'scissors']
var score = [0,0]
var round = [0]

function Game(e) {
    console.log(round)

    if(score[0] === 0 && score [0] === 0 && round[0] === 0)
    console.log('Score 5 Points To Win!');

    function playRound(playerSelection, computerSelection) {
        let i = choice.indexOf(playerSelection)
        let j = choice.indexOf(computerSelection)
        let winningCombos = [[0,1], [1,2], [2,0]]
        let losingCombos = [[1,0], [0,1], [0,2]]

        if(i === j) {
            round[0] += 1
            return 'draw';
        }

        for (var idz = 0; idz < winningCombos.length; idz++) {
            let win = winningCombos[idz]
            if(win[0] === i && win[1] === j) {
                score[0] += 1
                round[0] += 1
                return 'win';
            }
        }

        for (var idz = 0; idz < losingCombos.length; idz++) {
            let lose = losingCombos[idz]
            if(lose[0] === i && lose[1] === j) {
                score[1] += 1
                round[0] += 1
                return 'lose';
            }
        }
    }

    const playerSelection = e.target.value
    const computerSelection = choice[Math.floor(Math.random() * 3)];

    let result = playRound(playerSelection, computerSelection)

    if (result === 'win') {
        console.log('YOU WIN');
    }

    else if (result === 'lose') {
        console.log('YOU LOSE');
    }

    else {
        console.log('IT\'S A TIE');
    }


    if (score.includes(5)) {
        if(score[0] > score[1]) {
            console.log('YOU WIN EVERYTHING');
        }

        else {
            console.log('YOU LOSE EVERYTHING');
        }

        score = [0,0];
        round = [0];
    }
}

const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        Game(e);
    })
})