const obj = {}

obj.nome = 'Bola'
obj.preço = 39.99
obj.qtd = 10

obj.total = function(){
    return obj.preço * obj.qtd
}

obj.showHTML = () => {
    let str = `<label>Nome:</label><label>${obj.nome}<br></label>`
    str += `<label>Preço:</label><label>${obj.preço}<br></label>`
    str += `<label>Quantidade:</label><label>${obj.qtd}<br></label>`
    str += `<label>Total:</label><label>${obj.total().toFixed(2)}</label>`
    return str
}

const obj2 = {
    nome: "Carro",
    preço: 20000,
    qtd: 2,
    total: function (){
        return this.preço * this.qtd
    },
    showHTML: function(){
        let str = `<label>Nome:</label><label>${obj2.nome}<br></label>`
        str += `<label>Preço:</label><label>${obj2.preço}<br></label>`
        str += `<label>Quantidade:</label><label>${obj2.qtd}<br></label>`
        str += `<label>Total:</label><label>${obj2.total().toFixed(2)}</label>`
        return str
    }
}

const obj3 = {
    nome: "Jogo",
    preço: 200,
    qtd: 800,
    total: function (){
        return this.preço * this.qtd
    },
    showHTML: function(){
        let str = `<label>Nome:</label><label>${obj3.nome}<br></label>`
        str += `<label>Preço:</label><label>${obj3.preço}<br></label>`
        str += `<label>Quantidade:</label><label>${obj3.qtd}<br></label>`
        str += `<label>Total:</label><label>${obj3.total().toFixed(2)}</label>`
        return str
    }
}

// Saida no HTML
const main = document.querySelector("#objetos")

for(let i=0;i<3;i++){
    const div = document.createElement("div")
    if(i == 0){
        div.innerHTML = obj.showHTML()
    }else if(i == 1){
        div.innerHTML = obj2.showHTML()
    }else{
        div.innerHTML = obj3.showHTML()
    }
    main.appendChild(div).classList.add("divStyle")
}