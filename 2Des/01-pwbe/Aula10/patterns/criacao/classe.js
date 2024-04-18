// Classe Builder - Simples
class Arvore {
    especie;
    altura;
    idade;
}

// Criando um objeto simples

const arvore = new Arvore();


// Criar arvores com diferentes caracteristicas

const arvore1 = new Arvore();
arvore1.especie = 'Cedro';
arvore1.altura = 10;
arvore1.idade = 5;

const arvore2 = new Arvore();
arvore2.especie = 'Cedro';
arvore2.altura = 10;
arvore2.idade = 5;

console.log(arvore);
console.log(arvore1);
console.log(arvore2);

// Classe Complexa - Com metodo constructor
class Argo {
    constructor(ano) {
        this.modelo = 'Argo';
        this.marca = 'Fiat';
        this.ano = ano == undefined ? 2024 : ano;
    }
}

// Criação de um objeto complexo
const argos = [];
for(i = 0; i < 10; i++) {
    if(i % 2 == 0) {
        const argo = new Argo(2010+i);
        argos.push(argo);
    } else {
        const argo = new Argo(2024);
        argos.push(argo);
    }
}

console.log(argos)