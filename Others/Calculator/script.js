const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

var calc = ''

document.addEventListener("keydown", (event) => {
    if(event.key.match(/[0-9]/) || event.key == "." || event.key == "Enter" || event.key == "Backspace" || event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/" || event.key == "%" || event.key == "c") {
        calculus(null, event.key)
    }
})

buttons.forEach((item) => {
    item.onclick = () => {
        calculus(item, null)
    }
})

function calculus (item, key) {
    if(item == null) {
        calcKey = key
    }else {
        calcKey = item.id
    }
    
    if (calcKey == "clear" || calcKey == "c") {
        screen.innerText = "0";
        calc = ''
    }else if (calcKey == "Backspace") {
        screen.innerText = screen.innerText.slice(0, -1);
        calc = calc.slice(0, -1)
        if(screen.innerText == ""){
            screen.innerText = "0"
        }
    }else if (screen.innerText != "" && (calcKey == "equal" || calcKey == "Enter") ) {
        screen.innerText = eval(calc);
        calc = screen.innerText
    }else {
        if(calcKey == "/") {
            screen.innerText += "÷";
        }else if(calcKey == "*") {
            screen.innerText += "*";
        }else if(calcKey == "-") {
            screen.innerText += "-";
        }else if(calcKey == "+") {
            screen.innerText += "+";
        }else if(calcKey == "%"){
            screen.innerText += "%";
        }else if(calcKey == ".") {
            screen.innerText += "."
        }else if(screen.innerText == "0") {
            screen.innerText = calcKey
        }else{
            screen.innerText += calcKey;
        }
        calc += calcKey
        
    }
}