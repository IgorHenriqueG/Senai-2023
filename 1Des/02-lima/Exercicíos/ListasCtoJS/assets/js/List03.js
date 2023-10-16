function ex01(){
    for(let i = 10; i <= 200; i++){
        document.getElementById("resultadoEx01").innerText +=  " " + i
    }
}

function ex02(){
    for(let i = 200; i >= 10; i--){
        document.getElementById("resultadoEx02").innerText +=  " " + i
    }
}

function ex03(){
    let ValorA = parseInt(document.getElementById("ValorAEx03").value)

    if(ValorA >= 0 && ValorA < 999){
        document.getElementById("resultadoEx03").innerText = ""
        for(let i = 0; i <= ValorA; i++){
            document.getElementById("resultadoEx03").innerText +=  " " + i
        }
    }else if(ValorA > 999){
        document.getElementById("resultadoEx03").innerText = 'O valor digitado não pode ser maior do que 999'
    }else{
        document.getElementById("resultadoEx03").innerText = 'O valor digitado não pode ser menor do que 0'
    }
}

function ex04(){
    let ValorA = parseInt(document.getElementById("ValorAEx04").value)
    let ValorB = parseInt(document.getElementById("ValorBEx04").value)

    if(ValorA != ValorB && ValorA > ValorB){
        document.getElementById("resultadoEx04").innerText = ""
        for(ValorB; ValorB <= ValorA; ValorB++){
            document.getElementById("resultadoEx04").innerText +=  " " + ValorB
        }
    }else if(ValorA != ValorB && ValorA < ValorB){
        document.getElementById("resultadoEx04").innerText = ""
        for(ValorA; ValorA <= ValorB; ValorA++){
            document.getElementById("resultadoEx04").innerText +=  " " + ValorA
        }
    }else{
        document.getElementById("resultadoEx04").innerText = 'Os valores digitados não podem ser iguais'
    }
}

function ex05(){
    let ValorA = parseInt(document.getElementById("ValorAEx05").value)

    if(ValorA >= 0){
        document.getElementById("resultadoEx05").innerText = ""
        for(let i = 0; i <= ValorA; i+=2){
            document.getElementById("resultadoEx05").innerText += " " + i
        }
    }
}

function ex06(){
    let ValorA = parseInt(document.getElementById("ValorAEx06").value)

    if(ValorA >= 0){
        document.getElementById("resultadoEx06").innerText = "" 
        for(let i = 0; i <= ValorA; i++){
            if(i % 2){
                document.getElementById("resultadoEx06").innerText += " " + i
            }
        }
    }
}

function ex07(){
    let soma = 0
    for(let i = 0; i <= 100; i++){
        soma += i
    }
    document.getElementById("resultadoEx07").innerText = `A soma dos valores de 0 a 100 é de: ${soma}`
}

function ex08(){
    let ValorA = parseInt(document.getElementById("ValorAEx08").value)
    let fat = 1
    let valor = ValorA

    if(ValorA >= 0){
        for(fat; ValorA > 1; ValorA -= 1){
            fat = fat * ValorA
        }
        document.getElementById("resultadoEx08").innerText = `O resultado da fatorial de ${valor} é de ${fat}`
    }
}

function ex09(){
    let ValorA = parseInt(document.getElementById("ValorAEx09").value)

    for(let i = 0; i <= 10; i++){
        document.getElementById("resultadoEx09").innerHTML += `${ValorA}X${i}=${ValorA * i}<br>`
    }
}

function ex10(){
    let ValorA = parseInt(document.getElementById("ValorAEx10").value)
    let ValorB = parseInt(document.getElementById("ValorBEx10").value)
    let ValorC = parseInt(document.getElementById("ValorCEx10").value)
    let ValorD = parseInt(document.getElementById("ValorDEx10").value)
    let ValorE = parseInt(document.getElementById("ValorEEx10").value)
    let ValorF = parseInt(document.getElementById("ValorFEx10").value)
    let ValorG = parseInt(document.getElementById("ValorGEx10").value)
    let ValorH = parseInt(document.getElementById("ValorHEx10").value)
    let ValorI = parseInt(document.getElementById("ValorIEx10").value)
    let ValorJ = parseInt(document.getElementById("ValorJEx10").value)

    for(let i = 0; i <= 10; i++){
        if(ValorA < ValorB){
            ValorA = ValorB
        }
        if(ValorB < ValorC){
            ValorB = ValorC
        }
        if(ValorC < ValorD){
            ValorC = ValorD
        }
        if(ValorD < ValorE){
            ValorD = ValorE
        }
        if(ValorE < ValorF){
            ValorE = ValorF
        }
        if(ValorF < ValorG){
            ValorF = ValorG
        }
        if(ValorG < ValorH){
            ValorG = ValorH
        }
        if(ValorH < ValorI){
            ValorH = ValorI
        }
        if(ValorI < ValorJ){
            ValorI = ValorJ
        }
    }

    document.getElementById("resultadoEx10").innerText = ValorA
}

function ex11(){
    let ValorA = parseInt(document.getElementById("ValorAEx11").value)
    let ValorB = parseInt(document.getElementById("ValorBEx11").value)
    let ValorC = parseInt(document.getElementById("ValorCEx11").value)
    let ValorD = parseInt(document.getElementById("ValorDEx11").value)
    let ValorE = parseInt(document.getElementById("ValorEEx11").value)

    let temp

    for(i = 0; i < 5; i++){
		if (ValorA > ValorB){
			temp = ValorA;
			ValorA = ValorB;
			ValorB = temp;
		}
		if (ValorB > ValorC){
			temp = ValorB;
			ValorB = ValorC;
			ValorC = temp;
		}
		if (ValorC > ValorD){
			temp = ValorC;
			ValorC = ValorD;
			ValorD = temp;
		}
		if (ValorD > ValorE){
			temp = ValorD;
			ValorD = ValorE;
			ValorE = temp;
		}
	}

    document.getElementById("resultadoEx11").innerText = `O resultado em ordem crescente é: ${ValorA + " " + ValorB + " " + ValorC + " " + ValorD + " " + ValorE}`
}