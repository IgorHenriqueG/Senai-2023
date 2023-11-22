const input = document.getElementById('input-field');
const output = document.getElementById('output-field');

input.oninput = function (event) {
    if(input.value.match(/[a-z]/) || input.value.match(/[A-Z]/) || input.value.match(/[0-9]/) || input.value === ''){
        toMorse(input.value.toUpperCase())
    }else {
        toText(input.value)
    }
}

function toMorse(textInput) {
    let morseOutput = ''
    const morse = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-...', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-' , 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-' , 
        'Y': '-.--', 'Z': '--..', ' ': ' / ', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
    }

    for(let i = 0; i < textInput.length; i++) {
        if(morse[textInput[i]]) {
            morseOutput += morse[textInput[i]] + ' '
        }
    }
    
    output.innerHTML = morseOutput
}

function toText(morseInput) {
    let morseOutput = ''
    const morse = {
        '.-': 'A', 'B': '-...', 'C': '-.-.', 'D': '-...', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-' , 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-' , 
        'Y': '-.--', 'Z': '--..', ' ': ' / ', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
    }

    for(let i = 0; i < morseInput.length; i++) {
        if(morse[morseInput[i]]) {
            morseOutput += morse[morseInput[i]] + ' '
        }
    }
    
    output.innerHTML = morseOutput
}