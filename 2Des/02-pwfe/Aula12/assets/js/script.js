const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

const playerCards = document.querySelector('.cards-player').querySelectorAll('.card');
const computerCards = document.querySelector('.cards-computer').querySelectorAll('.card');

const playerOrb = document.querySelector('.player-orb');
const computerOrb = document.querySelector('.computer-orb');

var playerMultiplier = 1;
var computerMultiplier = 1;

const choice = ['rock', 'paper', 'scissors'];

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
    }, 0);

    // Math.floor(Math.random() * 1000) + 50

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
    }, 2000)

    //3500

    setTimeout(() => {
        const result = checkWinner(playerCard, computerChoice);
        const playerCardPosition = document.querySelector('.player-card');
        const computerCardPosition = document.querySelector('.computer-card');

        if (result === 'player') {
            computerMultiplier = 1;
            computerOrb.innerHTML = `${computerMultiplier}x`
            playerCardPosition.innerHTML = `<h1 style="color: yellow; font-size: 70px; z-index: 2; user-select: none; transition: 0.3s; transform: scale(0);">+${playerMultiplier}</h1>`
            setTimeout(() => {
                playerCardPosition.querySelector('h1').classList.add('point');
                setTimeout(() => {
                    playerScore.textContent = parseInt(playerScore.textContent) + playerMultiplier;
                    playerMultiplier++;
                    playerOrb.innerHTML = `${playerMultiplier}x`
                }, 100)
            }, 100)
            
        } else if (result === 'computer') {
            playerMultiplier = 1;
            playerOrb.innerHTML = `${playerMultiplier}x` 
            computerCardPosition.innerHTML = `<h1 style="color: yellow; font-size: 70px; z-index: 2; user-select: none; transition: 0.3s; transform: scale(0);">+${computerMultiplier}</h1>`
            setTimeout(() => {
                computerCardPosition.querySelector('h1').classList.add('point2');
                setTimeout(() => {
                    computerScore.textContent = parseInt(computerScore.textContent) + computerMultiplier;
                    computerMultiplier++;
                    computerOrb.innerHTML = `${computerMultiplier}x`
                }, 100)
            }, 100)
        } else {
            playerCardPosition.innerHTML = `<h1 style="color: yellow; font-size: 70px; z-index: 2; user-select: none; transition: 0.3s; transform: scale(1);">Draw</h1>`
            computerCardPosition.innerHTML = `<h1 style="color: yellow; font-size: 70px; z-index: 2; user-select: none; transition: 0.3s; transform: scale(1);">Draw</h1>`
            setTimeout(() => {
                setTimeout(() => {
                    playerCardPosition.querySelector('h1').remove()
                    computerCardPosition.querySelector('h1').remove();
                    playerMultiplier = 1;
                    computerMultiplier = 1;
                    playerOrb.innerHTML = `${playerMultiplier}x`
                    computerOrb.innerHTML = `${computerMultiplier}x`
                }, 1000)
            })
        }
    }, 1000)

    //2000
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





// Define the strategy interface
class PaymentStrategy {
    makePayment(amount) {
      throw new Error("makePayment must be implemented");
    }
}
  
// Implement a concrete strategy
class CreditCardStrategy extends PaymentStrategy {
    makePayment(amount) {
      console.log(`Paying ${amount} using credit card`);
    }
}
  
// Implement another concrete strategy
class PayPalStrategy extends PaymentStrategy {
    makePayment(amount) {
      console.log(`Paying ${amount} using PayPal`);
    }
}
  
// Define the context that uses the strategy
class PaymentContext {
    constructor(paymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }
  
    setPaymentStrategy(paymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }
  
    pay(amount) {
      this.paymentStrategy.makePayment(amount);
    }
}
  
// Use the strategy in the context
const creditCardStrategy = new CreditCardStrategy();
const paymentContext = new PaymentContext(creditCardStrategy);
paymentContext.pay(100);
  
  // Change the strategy at runtime
const paypalStrategy = new PayPalStrategy();
paymentContext.setPaymentStrategy(paypalStrategy);
paymentContext.pay(200);