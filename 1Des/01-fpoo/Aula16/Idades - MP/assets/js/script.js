class Pessoa {
    constructor(nome, nascimento, sexo) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.sexo = sexo;
        this.idade = this.calcIdade(); //Atributo calculado
        this.classificacao = this.classificar()
    }

    calcIdade() {
        if (this.nascimento == undefined) return 0;
        let hoje = new Date();
        let difAno = hoje.getFullYear() - this.nascimento.getFullYear();
        let difMes = hoje.getMonth() - this.nascimento.getMonth();
        let difDia = hoje.getDate() - this.nascimento.getDate();
        if (difMes < 0 || (difMes == 0 && difDia < 0)) {
            difAno--;
        }
        return difAno;
    }

    classificar(){
        if(this.idade < 10){
            return 'Criança'
        }else if(this.idade > 9 && this.idade < 18){
            return 'Adolescente'
        }else if(this.idade > 17){
            return 'Adulto'
        }
    }

    toTable() {
        return `<tr id="pessoa">
                    <td>${this.nome}</td>
                    <td>${this.nascimento.toLocaleDateString()}</td>
                    <td>${this.sexo}</td>
                    <td>${this.idade}</td>
                    <td>${this.classificacao}</td>
                    <td><button onclick='teste2(this.parentNode.parentNode)'>Excluir</button></td>
                </tr>`;
    }
}

const pessoas = [];

pessoas.push(new Pessoa("João Silva", new Date(1990, 8, 10), "M"));
pessoas.push(new Pessoa("Maria Santos", new Date(2018, 13, 10), "F"));
pessoas.push(new Pessoa("José Oliveira", new Date(2007, 9, 16), "M"));
pessoas.push(new Pessoa("Joana Gimenes", new Date(2002, 7, 21), "F"));
pessoas.push(new Pessoa("Pedro Martins", new Date(1998, 4, 1), "M"));

const form = document.getElementById("novaPessoa");
const corpo = document.getElementById("corpoTabela");
const alert = document.getElementById('alert')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let pessoa = new Pessoa(form.nome.value, new Date(form.nascimento.value), form.sexo.value);
    if(form.sexo.value == 'N'){
        alert.innerHTML = 'Insira um gênero!'
    }else{
        alert.innerHTML = ''
        pessoas.push(pessoa);
        form.reset();
        atualizaTabela();
    }
});

function teste(){
    let nome = document.querySelector('#a').value;

    if(nome == ''){
        pessoas.pop();
    }else{
        pessoas.forEach(pessoa => {
            if(pessoa.nome == nome){
                pessoas.splice(pessoa, 1);
            }
        })  
    }
    atualizaTabela();
}

function teste2(id){
    pessoas.splice(id, 1);
    atualizaTabela();
}

function atualizaTabela() {
    corpo.innerHTML = "";
    pessoas.forEach((pessoa) => {
        corpo.innerHTML += pessoa.toTable();
    });
}