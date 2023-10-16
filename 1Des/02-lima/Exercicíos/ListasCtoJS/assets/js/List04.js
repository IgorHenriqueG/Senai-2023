function ex01(){
    let ValorA = document.getElementById("ValorAEx01").value
    let ValorB = Number(document.getElementById("ValorBEx01").value)
    let ValorC = document.getElementById("ValorCEx01").value
    let ValorD = Number(document.getElementById("ValorDEx01").value)
    let ValorE = document.getElementById("ValorEEx01").value
    let ValorF = Number(document.getElementById("ValorFEx01").value)
    let ValorG = document.getElementById("ValorGEx01").value
    let ValorH = Number(document.getElementById("ValorHEx01").value)
    let ValorI = document.getElementById("ValorIEx01").value
    let ValorJ = Number(document.getElementById("ValorJEx01").value)
    let ValorK = Number(document.getElementById("ValorKEx01").value)

    ValorB = ValorB*(ValorK+100)/100
    ValorD = ValorD*(ValorK+100)/100
    ValorF = ValorF*(ValorK+100)/100
    ValorH = ValorH*(ValorK+100)/100
    ValorJ = ValorJ*(ValorK+100)/100

    document.getElementById("resultadoEx01").innerHTML = `
    Os salários são:<br>
    ${ValorA + " " + "R$" + ValorB}<br>
    ${ValorC + " " + "R$" + ValorD}<br>
    ${ValorE + " " + "R$" + ValorF}<br>
    ${ValorG + " " + "R$" + ValorH}<br>
    ${ValorI + " " + "R$" + ValorJ}
    `
}

function ex02(){
    let ValorA = document.getElementById("ValorAEx02").value
    let ValorB = Number(document.getElementById("ValorBEx02").value)
    let ValorC = Number(document.getElementById("ValorCEx02").value)

    let ValorD = document.getElementById("ValorDEx02").value
    let ValorE = Number(document.getElementById("ValorEEx02").value)
    let ValorF = Number(document.getElementById("ValorFEx02").value)

    let ValorG = document.getElementById("ValorGEx02").value
    let ValorH = Number(document.getElementById("ValorHEx02").value)
    let ValorI = Number(document.getElementById("ValorIEx02").value)

    let ValorJ = document.getElementById("ValorJEx02").value
    let ValorK = Number(document.getElementById("ValorKEx02").value)
    let ValorL = Number(document.getElementById("ValorLEx02").value)

    let ValorM = document.getElementById("ValorMEx02").value
    let ValorN = Number(document.getElementById("ValorNEx02").value)
    let ValorO = Number(document.getElementById("ValorOEx02").value)

    ValorB = ValorC + (ValorB * 3)
    ValorE = ValorF + (ValorE * 3)
    ValorH = ValorI + (ValorH * 3)
    ValorK = ValorL + (ValorK * 3)
    ValorN = ValorO + (ValorN * 3)

    document.getElementById("resultadoEx02").innerHTML = `
    ${ValorA} ${ValorB}<br>
    ${ValorD} ${ValorE}<br>
    ${ValorG} ${ValorH}<br>
    ${ValorJ} ${ValorK}<br>
    ${ValorM} ${ValorN}<br>
    `
}

function ex03(){
    let ValorA = document.getElementById("ValorAEx03").value
    let ValorC = document.getElementById("ValorCEx03").value
    let ValorE = document.getElementById("ValorEEx03").value
    let ValorG = document.getElementById("ValorGEx03").value
    let ValorI = document.getElementById("ValorIEx03").value
    

    let mercadorias = document.querySelectorAll(".mercadoria")
    let preco = []

    mercadorias.forEach(e => {
        if(e.value >= 1000){
            preco.push((e.value * 1.05).toFixed(2))
        }else{
            preco.push((e.value * 1.07).toFixed(2))
        }
    })

    document.getElementById("resultadoEx03").innerHTML = `
    ${ValorA} ${preco[0]}<br>
    ${ValorC} ${preco[1]}<br>
    ${ValorE} ${preco[2]}<br>
    ${ValorG} ${preco[3]}<br>
    ${ValorI} ${preco[4]}<br>
    `
}