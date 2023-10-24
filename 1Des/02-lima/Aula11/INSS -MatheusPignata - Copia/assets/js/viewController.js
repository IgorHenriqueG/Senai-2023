const formPessoa = document.querySelector('#formPessoa')
const pessoas = []

formPessoa.addEventListener('submit', (e) => {
    e.preventDefault()
    pessoas.push(new Pagamento(formPessoa.nomeInput.value, formPessoa.salarioInput.value))
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
        cardNew.querySelector("#salario").innerHTML = pessoa.salario
        cardNew.querySelector("#salarioBase").innerHTML = pessoa.salarioBase
        cardNew.querySelector("#salarioLiquido").innerHTML = pessoa.salarioLiquido

        cards.appendChild(cardNew)
    })
}

function remover(e){
    console.log(pessoas, 'after')
    e.parentNode.remove()
    console.log(pessoas, 'before')
    console.log(pessoas.splice(e, 1))
}