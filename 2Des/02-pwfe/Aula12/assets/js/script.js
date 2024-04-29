const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

const playerCards = document.querySelector('.cards-player').querySelectorAll('.card');
const computerCards = document.querySelector('.cards-computer').querySelectorAll('.card');

// Menu

document.querySelector('#start-computer').addEventListener('click', () => {
    document.querySelector('#menu').classList.add('hidden');
    document.querySelector('#game-computer').classList.remove('hidden');
})


playerCards.forEach(card => {
    card.addEventListener('click', () => {
        playerCards.forEach(card => {
            card.classList.remove('selected');
            card.classList.add('disabled');
        })
        card.classList.add('selected');
        play(card.id);
    });
})

function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)];
}

function play(playerCard) {
    const computerChoice = computerPlay();

    const computerCard = computerCards[Math.floor(Math.random() * 3)].id

    setTimeout(() => {
        document.querySelector(`#${computerCard}`).classList.add('selected');
        

        setTimeout(() => {
            document.querySelector(`#${computerCard}`).querySelector('img').classList.add('rotate');
            setTimeout(() => {
                document.querySelector(`#${computerCard}`).querySelector('img').src = `assets/images/${computerChoice}.png`;
            }, 100)
        }, 500)
    }, Math.floor(Math.random() * 1000) + 500);

    setTimeout(() => {
        document.querySelector(`#${computerCard}`).querySelector('img').classList.add('rotate2');
        setTimeout(() => {
            document.querySelector(`#${computerCard}`).querySelector('img').src = `assets/images/back.png`;

            setTimeout(() => {
                document.querySelector(`#${computerCard}`).querySelector('img').classList.remove('rotate');
                document.querySelector(`#${computerCard}`).querySelector('img').classList.remove('rotate2');
            }, 50)
        }, 100)
        
        setTimeout(() => {
            document.querySelector(`#${computerCard}`).classList.remove('selected');
            document.querySelector(`#${computerCard}`).classList.remove('disabled');
            playerCards.forEach(card => {
                card.classList.remove('disabled');
                card.classList.remove('selected');
            })
        }, 50)

        const result = checkWinner(playerCard, computerChoice);

        if (result === 'player') {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        } else if (result === 'computer') {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
    }, 3500)
}

function checkWinner(playerCard, computerCard) {
    if (playerCard === computerCard) {
        return 'draw';
    } else if (
        (playerCard === 'rock' && computerCard === 'scissors') ||
        (playerCard === 'paper' && computerCard === 'rock') ||
        (playerCard === 'scissors' && computerCard === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}