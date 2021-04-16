const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const btn = document.querySelector('#restart');
const modal = document.querySelector('.modal');

const scores = {
    player: 0,
    computer: 0
};

const getComputerChoice = () => {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const getWinner = (player, computer) => {
    if (player === computer) {
        return 'Draw';
    } else if (player == 'rock') {
        if (computer == 'paper') {
            return 'Computer';
        } else {
            return 'Player';
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            return 'Computer';
        } else {
            return 'Player';
        }
    } else if (player == 'scissors') {
        if (computer == 'rock') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}

function startPlay(e) {
    const playerId = e.target.id;
    btn.style.display = 'inline-block';
    const computerId = getComputerChoice();
    const winner = getWinner(playerId, computerId);
    showWinner(winner, computerId);
}


function showWinner(winner, computer) {
    if (winner == 'Player') {
        scores.player++;
        result.innerHTML = `<h1 class='text-win'>You Win</h1>
        <i class='fas fa-hand-${computer} fa-10x'></i>
        <p>Computer Choose <strong>${capFirst(computer)}</strong></p>
        `
    } else if (winner == 'Computer') {
        scores.computer++;
        result.innerHTML = `<h1 class='text-lose'>You Loose</h1>
        <i class='fas fa-hand-${computer} fa-10x'></i>
        <p>Computer Choose <strong>${capFirst(computer)}</strong></p>
        `
    } else {
        result.innerHTML = `<h1>Draw!!</h1>
        <i class='fas fa-hand-${computer} fa-10x'></i>
        <p>Computer Choose <strong>${capFirst(computer)}</strong></p>`;
    }
    score.innerHTML = `
    <p>Player: ${scores.player}</p>
    <p>Computer: ${scores.computer}</p>
    `;
    modal.style.display = 'block';
}

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


choices.forEach(choice => {
    choice.addEventListener('click', startPlay);
});

window.addEventListener('click', e => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

btn.addEventListener('click', () => {
    scores.player = 0;
    scores.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
    btn.style.display = 'none';
})