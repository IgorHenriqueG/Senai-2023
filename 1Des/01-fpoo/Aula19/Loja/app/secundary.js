const eyes = document.querySelectorAll('.eye')
const login = document.getElementById('login')
const register = document.getElementById('register')
const title = document.getElementById('title')

// Adicionando interação aos corações
function heart() {
    const hearts = document.querySelectorAll('.heart')
    hearts.forEach(heart => {
        heart.onclick = () => {
            heart.classList.toggle('liked')
            if (heart.classList.contains('liked')) {
                heart.src = '../assets/heartfill.png'
            } else {
                heart.src = '../assets/heart.png'
            }
        }
    })
}

// Funções para abrir as telas de Login e Register
title.onclick = () => {
    document.querySelector('.container').classList.remove('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('.register').classList.add('hidden')
}
login.onclick = () => {
    document.querySelector('body').scrollTo(0, 0)
    document.querySelector('.container').classList.add('hidden')
    document.querySelector('.login').classList.remove('hidden')
    document.querySelector('.register').classList.add('hidden')
}

register.onclick = () => {
    document.querySelector('.container').classList.add('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('.register').classList.remove('hidden')
}

// Mostrar e esconder senha

eyes.forEach(eye => {
    eye.onclick = () => {
        if (eye.classList.contains('view')) {
            eye.classList.remove('view')
            eye.previousElementSibling.type = 'password'
            eye.src = '../assets/view.png'
        } else {
            eye.classList.add('view')
            eye.previousElementSibling.type = 'text'
            eye.src = '../assets/hide.png'
        }
    }
})