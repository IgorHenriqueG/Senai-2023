function ex01(){
    let ValorAEx01 = Number(document.getElementById("ValorAEx01").value)
    let ValorBEx01 = Number(document.getElementById("ValorBEx01").value)
    let ValorCEx01 = Number(document.getElementById("ValorCEx01").value)

    let resultadoEx01 = document.getElementById("resultadoEx01")
    let resultado = (ValorAEx01 + ValorBEx01) / ValorCEx01

    resultadoEx01.innerHTML = resultado
}

function ex02(){
    let ValorAEx02 = Number(document.getElementById("ValorAEx02").value)
    let ValorBEx02 = Number(document.getElementById("ValorBEx02").value)

    let resultadoEx02 = document.getElementById("resultadoEx02")
    let resultado = ValorBEx02 / ValorAEx02

    resultadoEx02.innerHTML = resultado
}

function ex03(){
    let ValorAEx03 = document.getElementById("ValorAEx03").value
    let ValorBEx03 = Number(document.getElementById("ValorBEx03").value)
    let ValorCEx03 = Number(document.getElementById("ValorCEx03").value)

    let resultadoEx03 = document.getElementById("resultadoEx03")
    let resultado = ValorBEx03*(ValorCEx03+100)/100

    resultadoEx03.innerHTML = `${ValorAEx03} ${resultado}`
}