class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    };
  
    obterDados() {
      console.log(`Produto: ${this.nome}, Preço: ${this.preco}`);
    };
};

class ProdutoFactory {
    criar(tipo) {
        let produto;

        if (tipo === 'A') {
        produto = new Produto('Açucar', 10.5);
        } else if (tipo === 'B') {
        produto = new Produto('Banan', 5.5);
        } else if (tipo === 'C') {
        produto = new Produto('Cenoura', 300);
        }

        return produto;
    }
};

const factory = new ProdutoFactory();
const Açucar = factory.criar('A');
const Banan = factory.criar('B');
const Cenoura = factory.criar('C');
const feijao = new Produto('Feijão', 8.5);

Açucar.obterDados();
Banan.obterDados();
Cenoura.obterDados();
feijao.obterDados();