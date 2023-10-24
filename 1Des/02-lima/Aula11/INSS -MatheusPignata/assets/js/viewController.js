const formPessoa = document.querySelector('#formPessoa')
const pessoas = []

formPessoa.addEventListener('submit', (e) => {
    e.preventDefault()
    if(formPessoa.salarioInput.value > 0){
        pessoas.push(new Pagamento(formPessoa.nomeInput.value, formPessoa.salarioInput.value))
        formPessoa.nomeInput.value = ''
        formPessoa.salarioInput.value = ''
        criarCard()
    }
})

function criarCard(){
    const cards = document.querySelector('.card-grid')
    let card = document.querySelector('.card')
    cards.innerHTML = ''
    cards.appendChild(card)

    pessoas.forEach(pessoa => {
        let cardNew = card.cloneNode(true)
        cardNew.classList.remove('model')
        cardNew.querySelector(".nome").innerHTML = pessoa.nome
        cardNew.querySelector(".salario").innerHTML = `<p>Salário:</p><p>R$ <span class="editSalarioInput">${pessoa.salario}</span></p>`
        cardNew.querySelector(".inss").innerHTML = `<p>INSS:</p><p>R$ ${pessoa.inss().toFixed(2)}`
        cardNew.querySelector(".salarioBase").innerHTML = `<p>Sal. Base:</p><p>R$ ${pessoa.salarioBase}`
        cardNew.querySelector(".irrf").innerHTML = `<p>IRRF:</p><p>R$ ${pessoa.irrf().toFixed(2)}</p>`
        cardNew.querySelector(".salarioLiquido").innerHTML = `<p>Sal. Liquido:</p><p>R$ ${pessoa.salarioLiquido}</p>`
        cardNew.querySelector(".id").innerHTML = `#${pessoas.indexOf(pessoa)}`

        cards.appendChild(cardNew)
    })
}

function remove(e){
    e.parentNode.querySelector('.warning').style.display = 'block'
}function confirmRemove(e, choise){
    if(choise){
        e.parentNode.parentNode.remove()
        pessoas.splice(e.parentNode.parentNode.querySelector('.id').innerHTML.slice(1), 1)
        criarCard()
    }else{
        e.parentNode.style.display = 'none'
    }
}

var boolean = true
function edit(e){
    if(boolean){
        boolean = false
        let cardName = e.parentNode.querySelector('.name')
        let cardSalary = e.parentNode.querySelector('.salario')

        let nameInput = document.createElement('input')
        let salaryInput = document.createElement('input')

        let doneButton = document.createElement('button')
        doneButton.innerText = 'Done'
        doneButton.classList.add('doneButton')
        doneButton.setAttribute('onclick', 'editDone(this)')

        nameInput.setAttribute('type', 'text')
        nameInput.classList.add('editInput')
        nameInput.value = cardName.querySelector('.nome').innerHTML

        cardName.innerHTML= ''
        cardName.appendChild(nameInput)

        salaryInput.setAttribute('type', 'number')
        salaryInput.classList.add('editInputSalary', 'editInput')
        salaryInput.value = cardSalary.querySelector('.editSalarioInput').innerHTML

        cardSalary.innerHTML= ''
        cardSalary.appendChild(salaryInput)

        e.parentNode.appendChild(doneButton)
    }  
}

function editDone(e){
    let inputName = e.parentNode.querySelector('.editInput')
    let inputSalary = e.parentNode.querySelector('.editInputSalary')

    console.log(e.parentNode.querySelector('.id').innerHTML)

    if(inputName.value != '' && inputSalary.value != ''){
        pessoas.forEach((pessoa, index) => {
            if(e.parentNode.querySelector('.id').innerHTML === `#${index}`){
                pessoas[index].nome = inputName.value
                pessoas[index].salario = inputSalary.value
                pessoas[index].salarioBase = (pessoa.salario - pessoa.inss()).toFixed(2)
                pessoas[index].salarioLiquido = (pessoa.salarioBase - pessoa.irrf()).toFixed(2)

                e.parentNode.querySelector('.doneButton').remove()
                boolean = true
                criarCard()
            }
        })
    }else if(inputSalary.value == '' && inputName.value == ''){
        inputName.setAttribute('style', 'border: 1px solid red')
        inputName.setAttribute('placeholder', 'Nome inválido')

        inputSalary.setAttribute('style', 'border: 1px solid red')
        inputSalary.setAttribute('placeholder', 'Salário inválido')
    }else if(inputName.value == ''){
        inputName.setAttribute('style', 'border: 1px solid red')
        inputName.setAttribute('placeholder', 'Nome inválido')
    }else{
        inputSalary.setAttribute('style', 'border: 1px solid red')
        inputSalary.setAttribute('placeholder', 'Salário inválido')
    }

    inputName.oninput = () => {
        inputName.removeAttribute('placeholder')
        inputName.removeAttribute('style')
    },inputSalary.oninput = () => {
        inputSalary.removeAttribute('placeholder')
        inputSalary.removeAttribute('style')
    }
}