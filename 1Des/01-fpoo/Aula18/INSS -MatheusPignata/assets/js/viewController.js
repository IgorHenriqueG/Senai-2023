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
        cardNew.querySelector(".salario").innerHTML = `<p>Salário:</p><p>R$<span class="editSalarioInput">${pessoa.salario}</span></p>`
        cardNew.querySelector(".inss").innerHTML = `<p>INSS:</p><p>R$${pessoa.inss().toFixed(2)}`
        cardNew.querySelector(".salarioBase").innerHTML = `<p>Sal. Base:</p><p>R$${pessoa.salarioBase}`
        cardNew.querySelector(".irrf").innerHTML = `<p>IRRF:</p><p>R$${pessoa.irrf().toFixed(2)}</p>`
        cardNew.querySelector(".salarioLiquido").innerHTML = `<p>Sal. Liquido:</p><p>R$${pessoa.salarioLiquido}</p>`
        cardNew.querySelector(".id").innerHTML = `#${pessoas.indexOf(pessoa)}`

        cards.appendChild(cardNew)
    })
}

function remove(e){
    e.parentNode.remove()
    pessoas.splice(e.parentNode.querySelector('.id').innerHTML.slice(1), 1)
    criarCard()
}

function edit(e){
    let cardName = e.parentNode.querySelector('.name')
    let cardSalary = e.parentNode.querySelector('.salario')

    let nameInput = document.createElement('input')
    let salaryInput = document.createElement('input')

    let doneButton = document.createElement('button')
    doneButton.innerText = 'Done'
    doneButton.classList.add('doneButton')
    doneButton.setAttribute('onclick', 'editDone(this)')


    nameInput.classList.add('editInput')
    nameInput.value = cardName.querySelector('.nome').innerHTML

    cardName.innerHTML= ''
    cardName.appendChild(nameInput)

    salaryInput.classList.add('editInputSalary', 'editInput')
    salaryInput.value = cardSalary.querySelector('.editSalarioInput').innerHTML

    cardSalary.innerHTML= ''
    cardSalary.appendChild(salaryInput)

    e.parentNode.appendChild(doneButton)
}

function editDone(e){
    let cardNameM = e.parentNode.querySelector('.name')
    let cardSalaryM = e.parentNode.querySelector('.salario')

    let inputName = e.parentNode.querySelector('.editInput')
    let inputSalary = e.parentNode.querySelector('.editInputSalary')

    pessoas.forEach((pessoa, index) => {
        if(e.parentNode.querySelector('.id').innerHTML === `#${index}`){
            pessoas[index].nome = inputName.value
            pessoas[index].salario = inputSalary.value
            pessoas[index].salarioBase = (pessoa.salario - pessoa.inss()).toFixed(2)
            pessoas[index].salarioLiquido = (pessoa.salarioBase - pessoa.irrf()).toFixed(2)
        }
    })

    cardNameM.innerHTML = `<h1 class="nome">${inputName.value}</h1>`
    cardSalaryM.innerHTML = `<p>Salário:</p><p>R$<span class="editSalarioInput">${inputSalary.value}</span></p>`

    e.parentNode.querySelector('.doneButton').remove()
    criarCard()
}