const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

const playerCards = document.querySelector('.cards-player').querySelectorAll('.card');
const computerCards = document.querySelector('.cards-computer').querySelectorAll('.card');


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
    

    console.log(playerCard, computerChoice);
}