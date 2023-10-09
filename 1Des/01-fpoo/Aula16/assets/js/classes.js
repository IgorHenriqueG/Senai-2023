// Criar objetos apartr de uma classe
class Coisa{
    constructor(nome, preco, qtd){
        this.nome = nome
        this.preço = preco
        this.qtd = qtd
    }
    
    total(){
        return this.preço * this.qtd
    }
    showHTML(){
        let str = `<label>Nome:</label><label>${this.nome}<br></label>`
        str += `<label>Preço:</label><label>${this.preço}<br></label>`
        str += `<label>Quantidade:</label><label>${this.qtd}<br></label>`
        str += `<label>Total:</label><label>${this.total().toFixed(2)}</label>`
        return str
    }
}

// Criar instâncias desta classe
const lista = []
lista.push(new Coisa('Celular', 199.99, 6))
lista.push(new Coisa('cadeira', 130.00, 20))
lista.push(new Coisa('Caneta', 2.99, 40))
lista.push(new Coisa('Mesa', 322.99, 30))
lista.push(new Coisa('Poltrona', 5499.99, 1))

// Mostrar no console
console.table(lista)

// Mostrar no HTML
const main = document.querySelector("#objetos")
lista.forEach(obj => {
    const div = document.createElement("div")
    div.innerHTML = obj.showHTML()
    main.appendChild(div)
});