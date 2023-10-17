class InsertPerson{
    constructor(name, income){
        this.name = name
        this.income = income
        this.inss = this.INSS()
        this.baseIncome = this.income - this.inss
        this.irrf = this.IRRF()
        this.liquidIncome = this.baseIncome - this.irrf
    }

    INSS(){
            if (this.income < 1320.01){
                return this.income * 7.5 / 100;
            }else if (this.income < 2571.30){
                return this.income * 9 / 100;
            }else if (this.income < 3856.95){
                return this.income * 12 / 100;
            }else if (this.income < 7507.49){
                return this.income * 14 / 100;
            }else{
                return 1051.05;
            }
        }

    IRRF(){
        if (this.income < 1903.99){
            return 0;
        }else if (this.income < 2826.66){
            return this.income * 7.5 / 100 - 142.8;
        }else if (this.income < 3751.06){
            return this.income * 15 / 100 - 354.8;
        }else if (this.income < 4664.69){
            return this.income * 22.5 / 100 - 636.13;
        }else{
            return this.income * 27.5 / 100 - 869.36;
        }
    }

    toTable() {
        return `<tr id="pessoa">
                    <td id="name">${this.name}</td>
                    <td>R$${this.income.toFixed(2)}</td>
                    <td>R$${this.inss.toFixed(2)}</td>
                    <td>R$${this.baseIncome.toFixed(2)}</td>
                    <td>R$${this.irrf.toFixed(2)}</td>
                    <td>R$${this.liquidIncome.toFixed(2)}</td>
                    <td><button onclick="remove(this)">Remover</button><button onclick="edit(this)">Editar</button></td>
                </tr>`
    }
}
var inputName = document.getElementById('inputName')
var inputIncome = document.getElementById('inputIncome')
var tableBody = document.getElementById('tableBody')

function insert(){
    if(inputName.value != '' && inputIncome.value != ''){
        let pessoa = new InsertPerson(inputName.value, Number(inputIncome.value))
        inputName.value = ''
        inputIncome.value = ''
        tableBody.innerHTML += pessoa.toTable()
    }else{
        inputName.style.outline = '1px solid red'
        inputIncome.style.outline = '1px solid red'
    }
    dataSave()
}

inputName.onfocus = function(){inputName.style.outline = 'none'}
inputIncome.onfocus = function(){inputIncome.style.outline = 'none'}

function remove(e){
    e.parentNode.parentNode.remove()
    dataSave()
}

function edit(e){
    let name = e.parentNode.parentNode.firstChild.nextSibling
    let income = e.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling

    let inputName = document.createElement("input")
    inputName.value = name.innerHTML
    name.innerText = ''
    name.appendChild(inputName)

    let inputIncome = document.createElement("input")
    inputIncome.value = income.innerHTML
    income.innerText = ''
    income.appendChild(inputIncome)

    inputName.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            name.innerText = inputName.value
            income.innerText = inputIncome.value
            dataSave()
        }
    });

    inputIncome.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            name.innerText = inputName.value
            income.innerText = inputIncome.value
            dataSave()
        }
    });
}

function dataSave(){
    localStorage.setItem("data", tableBody.innerHTML)
}

function showData(){
    tableBody.innerHTML = localStorage.getItem("data")
    alert("Progama não concluido!\nArrumar R$ edit.\nCálculo edit.")
}
showData()