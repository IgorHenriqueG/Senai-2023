// let - variavel local
// var - variavel global
// const - variavel constante

// const obj = [
//     {
//         name: 'Lucas',
//         age: 20,
//         country: 'Brazil'
//     },
//     {
//         name: 'João',
//         age: 30,
//         country: 'Brazil'
//     },
//     {
//         name: 'Pedro',
//         age: 40,
//         country: 'Brazil'
//     }
// ]

// console.log("Hello world!", obj)
// console.warn("Alerta")
// console.error("Erro")
// console.table(obj)

// Operadores aritiméticos
    // + Soma
    // - Subtração
    // * Multiplicação
    // / Divisão
    // ** Potenciação
    // % Resto da divisão

// Operadores de comparação
    // = Atribuição
    // == Igualdade (valor)
    // === Igualdade (valor e tipo)
    // != Diferente (valor)
    // !== Diferente (valor e tipo)
    // > Maior que
    // < Menor que
    // >= Maior ou igual que
    // <= Menor ou igual que

// var a = 10;
// var b = '10';
// console.log(a === b)


// Exercícios FPOO lista 01 -- https://github.com/wellifabio/senai2023/tree/main/1des/01-fpoo/aula02
// C to JS

    // Exercício 01
// var a = 10, b = 10, c = 10
// console.log(a + "+" + b + "/" + c, "=", (a + b) / c)

//     // Exercício 02
// var vel = 100, dist = 200
// console.log("O tempo a percorrer a distancia é:", dist/vel + "h")

//     // Exercício 03
// var nome = 'Rogério', sal= 130, ind = 30
// var sal = (sal*(ind+100))/100
// console.log(nome, "seu salário com o ajuste é de", sal)


// var data = new Date()

// var dia = data.getDate()
// var mes = data.getMonth() + 1
// var ano = data.getFullYear()

// // var anoCompleto = dia + "/" + mes + "/" + ano
// var anoCompleto = `${dia}/${mes}/${ano}`

// var hora = data.getHours()
// var min = data.getMinutes()

// var horaCompleta = `${hora}:${min}`

// console.log(anoCompleto, horaCompleta)


// Funções com números
// Math.ceil(10.1) // Arredonda para cima
// Math.floor(10.9) // Arredonda para baixo
// Math.round(10.5) // Arredonda para o valor mais próximo

// var n = '10'

// Number.parseInt(n) // Converte o valor para número
// Number.parseFloat(n) // Converte para float

// Condicionais

// if(){

// }else if(){

// }else{

// }

    
// condição ? true : false; // if ternário

// switch(){
//     case 1:
//         break;
//     case 2:
//         break;
//     default:
//         break;
// }

// Laço de repetição

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// while(){

// }

// do{

// }while()

// var lista = 'a b c d e'.split(' ')

// // console.log(lista)
// // for(let i = 0; i < lista.length; i++){
// //     console.log(lista[i])
// // }

// // lista.forEach(item => {
// //     console.log(item)
// // });

// for(let item of lista){
//     console.log(item)
// }

// Declaração de função

// function nome(nome){
//     console.log(nome)
// }

// nome('Rogério')

// Exercícios FPOO lista 02 -- https://github.com/wellifabio/senai2023/tree/main/1des/01-fpoo/aula04
// C to JS

//     // Exercício 01
// function Ex0201(){
//     var price = 1050

//     if(price > 1000){
//         price *= 0.92
//     }
    
//     console.log(price)
// }
// Ex0201()

//     // Exercício 02
// function Ex0202(){
//     var salario = 100, filhos = 1

//     if(salario < 2000){
//         salario += filhos * 45
//     }
    
//     console.log(salario)
// }

// Ex0202()

// nome('Rogério')

// Exercícios FPOO lista 03 -- https://github.com/wellifabio/senai2023/tree/main/1des/01-fpoo/aula06
// C to JS

//     // Exercício 01
// function Ex0301(){
//     for(let i = 10; i <= 200; i++){
//         console.log(i)
//     }
// }
// Ex0301()

    // Exercício 02
//     function Ex0302(){
//         for(let i = 200; i >= 10; i--){
//         console.log(i)
//     }
// }
// Ex0302()