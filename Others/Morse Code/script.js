const input = document.getElementById('input-field');
const output = document.getElementById('output-text');

input.oninput = function (event) {
    if(input.value.match(/[a-z]/) || input.value.match(/[A-Z]/) || input.value.match(/[0-9]/) || input.value === ''){
        toMorse(input.value.toUpperCase())
    }else {
        toText(input.value)
    }

    if(input.value === '') {
        output.style.color = '#979797'
        output.innerHTML = 'Output will be displayed here';
    }else{
        output.style.color = 'black'
    }
}

function toMorse(textInput) {
    let morseOutput = ''
    const morse = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
        'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-' , 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
        'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-' , 'Y': '-.--',
        'Z': '--..', ' ': ' / ', '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '!': '-.-.--',
        '?': '..--..', ':': '---...', '=': '-...-', '@': '.--.-.', '&': '.-...',
        '(': '-.--.', ')': '-.--.-', '"': '.-..-.', "'": '.----.', '/': '-..-.'
    }

    for(let i = 0; i < textInput.length; i++) {
        if(morse[textInput[i]]) {
            morseOutput += morse[textInput[i]] + ' '
        }
    }
    
    output.innerHTML = morseOutput
}

function toText(morseInput) {
    const text = morseInput.split('/');
    let morseOutput = ''
    const letters = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
        '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
        '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
        '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
        '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
        '----.': '9','/': ' ', '.-.-.-': '.', '--..--': ',', '-.-.--': '!',
        '..--..': '?', '---...': ':', '-...-': '=', '.--.-.': '@', '.-...': '&',
        '-.--.': '(', '-.--.-': ')', '.-..-.': '"', '.----.': "'", '-..-.': '/'
    }

    text.forEach(e => {
        const words = e.split(' ');
        words.forEach(letter => {
            morseOutput += letters[letter] || '';
        });
        morseOutput += ' ';
      });
  
      output.innerHTML = morseOutput.trim();
}

function copy() {
    let message = document.querySelector('.copyed');
    let text = output.innerHTML;
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 1000)
    navigator.clipboard.writeText(text);
}