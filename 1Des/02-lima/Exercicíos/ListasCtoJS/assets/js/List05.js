function ex01() {
    let resultado = document.getElementById('resultadoEx01');
    resultado.innerHTML = ''
    for(let i = 0; i < 10; i++) {
        resultado.innerText += i+1 + '👉';
    }
    resultado.innerText += '🏁';
}

function ex02() {
    let resultado = document.getElementById('resultadoEx02');
    resultado.innerHTML = ''
    for(let i = 1; i < 11; i++) {
        if(i % 2 == 0) {
            resultado.innerHTML += `<mark>${i}</mark>` + '👉';
        }else{
            resultado.innerHTML += i + '👉';
        }
    }
    resultado.innerHTML += '🏁';
}

function ex03() {
    let resultado = document.getElementById('resultadoEx03');
    resultado.innerHTML = ''
    for(let i = 1; i < 11; i++) {
        if(i % 2 == 0) {
            resultado.innerHTML += i + '👉';
        }
    }
    resultado.innerHTML += '🏁';
}

function ex04() {
    let resultado = document.getElementById('resultadoEx04');
    resultado.innerHTML = ''
    for(let i = 10; i > 0; i--) {
        resultado.innerHTML += i + '👉';
    }
    resultado.innerHTML += '🏁';
}

function ex05() {
    let valorA = document.getElementById('ValorAEx05').value;
    let resultado = document.getElementById('resultadoEx05');
    resultado.innerHTML = ''
    for(let i = 0; i <= valorA; i++) {
        resultado.innerHTML += i + '👉';
    }
    resultado.innerHTML += '🏁';
}

function ex06() {
    let valorA = document.getElementById('ValorAEx06').value;
    let valorB = document.getElementById('ValorBEx06').value;
    let resultado = document.getElementById('resultadoEx06');
    resultado.innerHTML = ''
    if(valorA < valorB) {
        resultado.innerHTML = '';
        for(let i = valorA; i <= valorB; i++) {
            resultado.innerHTML += i + '👉';
        }
    } else {
        resultado.innerHTML = '';
        for(let i = valorA; i >= valorB; i--) {
            resultado.innerHTML += i + '👉';
        }
    }
    resultado.innerHTML += '🏁';
}

function ex07(){
    let ValorA = parseInt(document.getElementById("ValorAEx07").value)
    document.getElementById("resultadoEx07").innerHTML = ''
    for(let i = 1; i <= 10; i++){
        document.getElementById("resultadoEx07").innerHTML += `${ValorA } X ${i} = ${ValorA * i}<br>`
    }
}

function ex08() {
    let valorA = Number(document.getElementById('ValorAEx08').value)
    let resultado = document.getElementById('resultadoEx08')

    resultado.innerHTML = ''

    let c = valorA
    let fat = 1
    while (c > 1) {
        resultado.innerHTML += `${c} x `
        fat *= c
        c --
    }
    resultado.innerHTML += `1 = ${fat}`
}