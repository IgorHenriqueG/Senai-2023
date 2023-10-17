class Pagamento{
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
        this.salarioBase = (this.salario - this.inss()).toFixed(2)
        this.salarioLiquido = (this.salarioBase - this.irrf()).toFixed(2)
    }

    inss() {
        if (this.salario < 1320.01)
            return this.salario * 7.5 / 100;
        else if (this.salario < 2571.30)
            return this.salario * 9 / 100;
        else if (this.salario < 3856.95)
            return this.salario * 12 / 100;
        else if (this.salario < 7507.49)
            return this.salario * 14 / 100;
        else
            return 1051.05;
    }

    irrf() {
        if (this.salario < 1903.99)
            return 0;
        else if (this.salario < 2826.66)
            return this.salario * 7.5 / 100 - 142.8;
        else if (this.salario < 3751.06)
            return this.salario * 15 / 100 - 354.8;
        else if (this.salario < 4664.69)
            return this.salario * 22.5 / 100 - 636.13;
        else
            return this.salario * 27.5 / 100 - 869.36;
    }
    
}

const cardgrid = document.querySelector(".card-grid")
const inputName = document.getElementById("inputName")
const inputIncome = document.getElementById("inputIncome")

function toTable(obj){
    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <h2>${obj.nome}</h2>
    <h3>${obj.salario}</h3>
    <h3>${obj.inss()}</h3>
    <h3>${obj.salarioBase}</h3>
    <h3>${obj.irrf()}</h3>
    <h3>${obj.salarioLiquido}</h3>`

    console.log(obj.nome)
    console.log(div)
    cardgrid.appendChild(div)
}

function insert(){
    const pessoa = new Pagamento(inputName.value, Number(inputIncome.value))

    toTable(pessoa)
}