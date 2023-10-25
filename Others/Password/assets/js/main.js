const svgDiv = document.querySelector('.svgDiv')

function mouseover() {
    svgDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/></svg>'
}

function mouseout() {
    svgDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>'
}

const button = document.querySelector('#generate')

button.addEventListener('click', (e) => {
    e.preventDefault()
    newPassword()
})

function newPassword() {
    let numbersCheckbox = document.querySelector('#numbers').checked
    let symbolsCheckbox = document.querySelector('#symbols').checked

    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let symbols = '~!@#$%^&*()_+'
    let passwordLength = document.querySelector('#passwordlgh').value
    let password = ''

    if(isNaN(passwordLength)) {
        let body = document.querySelector('body')
        console.log(passwordLength)
        body.innerHTML = '<video autoplay src="assets/GBM.mp4"></video>'

        
    }else if(passwordLength == '') {
        document.querySelector('.passwordText p').innerText = 'Insert a value!'
    }else if(passwordLength >= 12){
        document.querySelector('.passwordText p').innerText = 'Max value is 12'
    }else{
        if(numbersCheckbox && symbolsCheckbox) {
            for(let i = 0; i < passwordLength; i++) {
                let randomNumber = Math.floor(Math.random() * 3)
                if(randomNumber === 0) {
                    password += charset[Math.floor(Math.random() * charset.length)]
                } else if(randomNumber === 1) {
                    password += numbers[Math.floor(Math.random() * numbers.length)]
                } else {
                    password += symbols[Math.floor(Math.random() * symbols.length)]
                } 
            }
            document.querySelector('.passwordText p').innerText = password
        }else if(numbersCheckbox) {
            for(let i = 0; i < passwordLength; i++) {
                let randomNumber = Math.floor(Math.random() * 2)
                if(randomNumber === 0) {
                    password += numbers[Math.floor(Math.random() * numbers.length)]
                }else if(randomNumber === 1) {
                    password += charset[Math.floor(Math.random() * charset.length)]
                }
            }
            document.querySelector('.passwordText p').innerText = password
        }else if(symbolsCheckbox) {
            for(let i = 0; i < passwordLength; i++) {
                let randomNumber = Math.floor(Math.random() * 2)
                if(randomNumber === 0) {
                    password += symbols[Math.floor(Math.random() * symbols.length)]
                }else if(randomNumber === 1) {
                    password += charset[Math.floor(Math.random() * charset.length)]
                }
            }
            document.querySelector('.passwordText p').innerText = password
        }else{
            for(let i = 0; i < passwordLength; i++) {
                password += charset[Math.floor(Math.random() * charset.length)]
            }
            document.querySelector('.passwordText p').innerText = password
        }
    }
}

function copy() {
    let copyText = document.querySelector('.passwordText p')
    let message = copyText.innerText
    copyText.innerHTML = 'Copyed!'

    setTimeout(() => {
        copyText.innerHTML = message
    }, 1500);
    navigator.clipboard.writeText(copyText.innerText)
}