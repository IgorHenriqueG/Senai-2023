// Pattern Builder (Construtor)

// Classe Complexa
class Carro {
    constructor(modelo, marca, ano) {
        this.modelo = modelo == undefined ? '' : modelo;
        this.marca = marca == undefined ? '' : marca;
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

// Criando um objeto complexo
const carro = new Carro('X5', 'BMW');
console.log(carro);

// Uma função/metodo que cria um objeto coplexo em partes
function carroBuilder() {
    return new Carro();
}