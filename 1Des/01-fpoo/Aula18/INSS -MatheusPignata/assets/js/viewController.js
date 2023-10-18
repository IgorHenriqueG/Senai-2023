const formPessoa = document.querySelector('#formPessoa')
const pessoas = []

formPessoa.addEventListener('submit', (e) => {
    e.preventDefault()
    pessoas.push(new Pagamento(formPessoa.nomeInput.value, formPessoa.salarioInput.value))
    formPessoa.nomeInput.value = ''
    formPessoa.salarioInput.value = ''
    criarCard()
})

function criarCard(){
    const cards = document.querySelector('.card-grid')
    let card = document.querySelector('.card')
    cards.innerHTML = ''
    cards.appendChild(card)

    
    pessoas.forEach(pessoa => {
        let cardNew = card.cloneNode(true)
        cardNew.classList.remove('model')
        cardNew.querySelector("#nome").innerHTML = pessoa.nome
        cardNew.querySelector("#salario").innerHTML = `<p>Salário:</p><p>R$${pessoa.salario}</p>`
        cardNew.querySelector("#inss").innerHTML = `<p>INSS:</p><p>R$${pessoa.inss().toFixed(2)}`
        cardNew.querySelector("#salarioBase").innerHTML = `<p>Sal. Base:</p><p>R$${pessoa.salarioBase}`
        cardNew.querySelector("#irrf").innerHTML = `<p>IRRF:</p><p>R$${pessoa.irrf().toFixed(2)}</p>`
        cardNew.querySelector("#salarioLiquido").innerHTML = `<p>Sal. Liquido:</p><p>R$${pessoa.salarioLiquido}</p>`

        cards.appendChild(cardNew)
    })
}

function remover(e){
    e.parentNode.remove()
    pessoas.splice(e, 1)
}