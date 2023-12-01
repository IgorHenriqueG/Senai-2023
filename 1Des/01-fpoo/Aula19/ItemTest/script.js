var games = [
    {
        name: 'Horizon Forbidden West',
        price: 149.90,
        discount: 0,
        image: 'img/horizon.png',
        imageHover: 'img/Aloy.png',
        console: 'PlayStation 5',
        stars: 4
    },
    {
        name: 'The Last of Us Part II',
        price: 150,
        discount: 5,
        image: 'img/tlou.png',
        imageHover: 'img/ellie.png',
        console: 'PlayStation 4',
        stars: 5
    },
    {
        name: 'Red Dead Redemption 2',
        price: 299,
        discount: 25,
        image: 'img/RDR2_PS4.png',
        imageHover: 'img/aab.png',
        console: 'PlayStation 4',
        stars: 5
    },
]

// F72585

const main = document.querySelector('main');

games.forEach(game => {
    const div = document.createElement('div');
    let save = game.price
    div.classList.add('card');


    if(game.discount > 0){
        var percentage = game.discount + '%';
        var discountImg = 'img/firecomfireRosa.png'
        var tag = 'discount-box'

        game.price =  game.price - (game.price * game.discount / 100);
        game.price = 'R$' + game.price.toFixed(2);
        game.price = game.price.replace('.', ',');
        game.discount = 'R$' + save.toFixed(2);
        
    }else {
        var percentage = '';
        game.price = 'R$' + game.price.toFixed(2);
        game.price = game.price.replace('.', ',');
        game.discount = ''
        var discountImg = ''
    }
    
    div.innerHTML = `
                <div class="discount-img">
                    <img src="${discountImg}">
                    <div class="${tag}"></div>
                </div>
            <div class="main-image">
                <img src="${game.image}" alt="">
                <img src="${game.imageHover}" class="hover-img">
            </div>
            <div class="info">
                <h1>${game.name}</h1>
                <p>${game.console}</p>
                <div class="rating">
                    
                </div>
            </div>
            <div class="buy">
                <div class="price">
                    <p class="price-value">${game.price}</p>
                    <p class="discount subtext">${game.discount}</p>
                    <p class="subtext">${percentage}</p>
                </div>
                <img src="img/heart.png" id="heart">
            </div>
    `
    

    for(let i = 0; i < 5; i++){
        game.star = document.createElement('img');
        if(game.stars > i){
            game.star.src = 'img/star.png';
        }else{
            game.star.src = 'img/starfill.png';
        }
        game.star.classList.add('star');
        div.querySelector('.rating').appendChild(game.star);
    }

    
    main.appendChild(div);
})

const hearts = document.querySelectorAll('#heart');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        let bool = heart.getAttribute('data-active');

        if(bool === 'true'){
            heart.setAttribute('data-active', 'false');
            heart.src = 'img/heart.png';
        }
        else{
            heart.setAttribute('data-active', 'true');
            heart.src = 'img/heartfill.png';
        }
    })
})