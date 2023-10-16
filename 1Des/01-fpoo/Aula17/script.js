function inss(salario){
    if(salario < 1320.01){
        return salario * 7.5 / 100
    }else if(salario < 2571.30){
        return salario * 9 / 100
    }else if(salario < 3856.95){
        return salario * 12 / 100
    }else if(salario < 7507.49){
        return salario * 14 / 100
    }else {
        return 1051.05
    }
}


function irrf(salario){
    if(salario < 1903.99){
        return 0
    }else if(salario < 2826.66){
        return salario * 7.5 / 100 - 142.8
    }else if(salario < 3751.06){
        return salario * 15 / 100 - 354.8
    }else if(salario < 4664.69){
        return salario * 22.5 / 100 - 636.13
    }else {
        return salario * 27.5 / 100 - 869.36
    }
}

let salario = 5000
let inss2 = inss(salario)
let salarioBase = salario - inss2
let irrf2 = irrf(salarioBase)
let salarioLiquido = salarioBase - irrf2

console.log("Salário " + salario)
console.log("Inss " + inss2)
console.log("SalárioBase " + salarioBase)
console.log("irrf " + irrf2)
console.log("SalárioLiquido " + salarioLiquido)