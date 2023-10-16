function ex01(){
    let ValorA = document.getElementById("ValorAEx01").value

    if(ValorA > 1000){
        document.getElementById("resultadoEx01").innerHTML = `O valor com 8% de desconto é R$${(ValorA * 0.92).toFixed(2)}`
    }else{
        document.getElementById("resultadoEx01").innerHTML = `Não houve alteração no preço R$${ValorA}`
    }
}

function ex02(){
    let ValorA = Number(document.getElementById("ValorAEx02").value)
    let ValorB = Number(document.getElementById("ValorBEx02").value)

    if(ValorA < 2000){
        ValorB = ValorB * 45
        document.getElementById("resultadoEx02").innerHTML = `Seu novo sálário é de R$${ValorA + ValorB}`
    }else{
        document.getElementById("resultadoEx02").innerHTML = `Seu salário não foi alterado R$${ValorA}`
    }
}

function ex03(){
    let ValorA = Number(document.getElementById("ValorAEx03").value)

    if(ValorA <= 1212.00){
		ValorA = ValorA * 0.925;
		document.getElementById("resultadoEx03").innerHTML = `Seu salario com desconto de 7,5% do INSS é de R$${ValorA.toFixed(2)}`
	}else if(ValorA >= 1212.01 && ValorA <= 2427.35){
		ValorA = ValorA * 0.91;
		document.getElementById("resultadoEx03").innerHTML = `Seu salario com desconto de 9% do INSS é de R$${ValorA.toFixed(2)}`
	}else if(ValorA >= 2427.36 && ValorA <= 3641.03){
		ValorA = ValorA * 0.88;
		pdocument.getElementById("resultadoEx03").innerHTML = `Seu salario com desconto de 12% do INSS é de R$${ValorA.toFixed(2)}`
	}else if(ValorA >= 3641.04 && ValorA <= 7087.22){
		ValorA = ValorA * 0.86;
		document.getElementById("resultadoEx03").innerHTML = `Seu salario com desconto de 14% do INSS é de R$${ValorA.toFixed(2)}`
	}else{
		ValorA = ValorA * 0.86;
		document.getElementById("resultadoEx03").innerHTML = `Seu salario com desconto de 14% do INSS é de R$${ValorA.toFixed(2)}`
	}
}

function ex04(){
    let ValorA = Number(document.getElementById("ValorAEx04").value)
    let ValorB = Number(document.getElementById("ValorBEx04").value)
    let ValorC = Number(document.getElementById("ValorCEx04").value)

    if(ValorA == ValorB && ValorA == ValorC){
		document.getElementById("resultadoEx04").innerText = `O triangulo com lados de ${ValorA + " " + ValorB + " " + ValorC} é Equilatero`
	} else if(ValorA == ValorB || ValorA == ValorC || ValorB == ValorC) {
		document.getElementById("resultadoEx04").innerText = `O triangulo com lados de ${ValorA + " " + ValorB + " " + ValorC} é Isóceles`
	} else {
		document.getElementById("resultadoEx04").innerHTML = `<span style="Color: #66CCAA;">O triangulo com lados de ${ValorA + " " + ValorB + " " + ValorC} é</span> Escaleno`
	}
}

function ex05(){
    let ValorA = document.getElementById("ValorAEx05").value
    let ValorB = Number(document.getElementById("ValorBEx05").value)

    if(ValorB < 1000){
		ValorB = ValorB * 1.05;
		document.getElementById("resultadoEx05").innerHTML = `O valor do produto ${ValorA} com aumento de 5% é de ${ValorB.toFixed(2)}`
	} else {
		ValorB = ValorB * 1.07;
		document.getElementById("resultadoEx05").innerHTML = `O valor do produto ${ValorA} com aumento de 7% é de ${ValorB.toFixed(2)}`
	}
}

function ex06(){
    let ValorA = parseInt(document.getElementById("ValorAEx06").value)
    let ValorB = parseInt(document.getElementById("ValorBEx06").value)
    let ValorC = parseInt(document.getElementById("ValorCEx06").value)
    let ValorD = parseInt(document.getElementById("ValorDEx06").value)
    let ValorE = parseInt(document.getElementById("ValorEEx06").value)
    let ValorF = parseInt(document.getElementById("ValorFEx06").value)

    if(ValorA > ValorB && ValorA > ValorC && ValorA > ValorD && ValorA > ValorE && ValorA > ValorF){
		document.getElementById("resultadoEx06").innerHTML = `O maior número é ${ValorA}`
	}else if(ValorB > ValorC && ValorB > ValorD && ValorB > ValorE && ValorB > ValorF){
		document.getElementById("resultadoEx06").innerHTML = `O maior número é ${ValorB}`
	}else if(ValorC > ValorD && ValorC > ValorE && ValorC > ValorF){
		document.getElementById("resultadoEx06").innerHTML = `O maior número é ${ValorC}`
	}else if(ValorD > ValorE && ValorD > ValorF){
		document.getElementById("resultadoEx06").innerHTML = `O maior número é ${ValorD}`
	}else if(ValorE > ValorF){
		document.getElementById("resultadoEx06").innerHTML = `O maior número é ${ValorE}`
	}else {
		document.getElementById("resultadoEx06").innerHTML = `O maior número é ${ValorF}`
	}
}

function ex07(){
    let ValorA = parseInt(document.getElementById("ValorAEx07").value)
    let ValorB = parseInt(document.getElementById("ValorBEx07").value)
    let ValorC = parseInt(document.getElementById("ValorCEx07").value)
    let ValorD = parseInt(document.getElementById("ValorDEx07").value)
    let ValorE = parseInt(document.getElementById("ValorEEx07").value)

    let temp

    if(ValorA > ValorB){
        temp = ValorA;
        ValorA = ValorB;
        ValorB = temp;
    }
    if(ValorB > ValorC){
        temp = ValorB;
        ValorB = ValorC;
        ValorC = temp;
    }
    if(ValorC > ValorD){
        temp = ValorC;
        ValorC = ValorD;
        ValorD = temp;
    }
    if(ValorD > ValorE){
        temp = ValorD;
        ValorD = ValorE;
        ValorE = temp;
    }
    
    
    
    if(ValorA > ValorB){
        temp = ValorA;
        ValorA = ValorB;
        ValorB = temp;
    }
    if(ValorB > ValorC){
        temp = ValorB;
        ValorB = ValorC;
        ValorC = temp;
    }
    if(ValorC > ValorD){
        temp = ValorC;
        ValorC = ValorD;
        ValorD = temp;
    }
    if(ValorA > ValorB){
        temp = ValorA;
        ValorA = ValorB;
        ValorB = temp;
    }
    if(ValorB > ValorC){
        temp = ValorB;
        ValorB = ValorC;
        ValorC = temp;
    }
    if(ValorA > ValorB){
        temp = ValorA;
        ValorA = ValorB;
        ValorB = temp;
    }

    document.getElementById("resultadoEx07").innerText = `Os números em ordem crescente são: ${ValorA + " " + ValorB + " " + ValorC + " " + ValorD + " " + ValorE}`
}

function ex08(){
    let ValorA = parseInt(document.getElementById("ValorAEx08").value)
    let ValorB = parseInt(document.getElementById("ValorBEx08").value)

    if(ValorA > ValorB){
        document.getElementById("resultadoEx08").innerText = `O maior valor é: ${ValorA}`
    }else if(ValorA < ValorB){
        document.getElementById("resultadoEx08").innerText = `O maior valor é: ${ValorB}`
    }else{
        document.getElementById("resultadoEx08").innerText = `Ambos dos valores são iguais ${ValorA + " " + ValorB}`
    }
}

function ex09(){
    let ValorA = Number(document.getElementById("ValorAEx09").value)

    if(1500 <= ValorA && ValorA < 1750){
        document.getElementById("resultadoEx09").innerText = `Seu salário com 15% de aumento é: R$${(ValorA * 1.15).toFixed(2)}`
    }else if(1750 <= ValorA && ValorA < 2000){
        document.getElementById("resultadoEx09").innerText = `Seu salário com 12% de aumento é: R$${(ValorA * 1.12).toFixed(2)}`
    }else if(2000 <= ValorA && ValorA < 3000){
        document.getElementById("resultadoEx09").innerText = `Seu salário com 9% de aumento é: R$${(ValorA * 1.09).toFixed(2)}`
    }else if(3000 <= ValorA){
        document.getElementById("resultadoEx09").innerText = `Seu salário com 6% de aumento é: R$${(ValorA * 1.06).toFixed(2)}`
    }else{
    	document.getElementById("resultadoEx09").innerText = `Seu salário não foi alterado`
    }
}

function ex10(){
    let ValorA = Number(document.getElementById("ValorAEx10").value)
    let ValorB = Number(document.getElementById("ValorBEx10").value)
    let ValorC = Number(document.getElementById("ValorCEx10").value)

    let media = (ValorA + ValorB + ValorC) / 3

    if(media >= 6){
		document.getElementById("resultadoEx10").innerHTML = `O aluno foi <span style="Color: green;">aprovado</span> com a média de ${media.toFixed(1)}`
	}else if(media < 6 && media >= 4){
		document.getElementById("resultadoEx10").innerHTML = `O aluno está de <span style="Color: yellow;">recuperação</span> com a média de ${media.toFixed(1)}`
	}else{
		document.getElementById("resultadoEx10").innerHTML = `O aluno foi <span style="Color: red;">reprovado</span> com a média de ${media.toFixed(1)}`
	}
}

function ex11(){
    let ValorA = document.getElementById("ValorAEx11").value
    let ValorB = Number(document.getElementById("ValorBEx11").value)

    if(ValorA.toLowerCase() == 'camisa'){
        document.getElementById("resultadoEx11").innerText = `O preço da camisa com 20% de desconto é de R${(ValorB * 0.80).toFixed(2)}`
    }else if(ValorA.toLowerCase() == 'calça' || ValorA.toLowerCase() == 'calca'){
        document.getElementById("resultadoEx11").innerText = `O preço da calça com 15% de desconto é de R${(ValorB * 0.85).toFixed(2)}`
    }else if(ValorA.toLowerCase() == 'bermuda'){
        document.getElementById("resultadoEx11").innerText = `O preço da bermuda com 10% de desconto é de R${(ValorB * 0.90).toFixed(2)}`
    }else{
        document.getElementById("resultadoEx11").innerText = `O produto inserido não está na lista.`
    }
}