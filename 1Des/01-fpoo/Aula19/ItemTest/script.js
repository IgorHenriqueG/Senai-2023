const hearts = document.querySelectorAll('#heart');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        let bool = heart.getAttribute('data-active');

        if(bool === 'false'){
            heart.setAttribute('data-active', 'true');
            heart.src = 'img/heartfill.png';
        }
        else{
            heart.setAttribute('data-active', 'false');
            heart.src = 'img/heart.png';
        }
    })
})