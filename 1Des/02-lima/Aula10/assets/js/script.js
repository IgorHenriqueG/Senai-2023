var nome = document.getElementById("nome")
var text = document.getElementById("resultado")

// function buscarElemento(){
//     console.log(nome.value)
//     text.innerText = nome.value
// }

function somaElemento(){
    let valorA = Number(document.getElementById("valorA").value)
    let valorB = Number(document.getElementById("valorB").value)
    let valorC = Number(document.getElementById("valorC").value)

    let resultado = (valorA + valorB) / valorC
    text.innerHTML = `O resultado de ${valorA}+${valorB}/${valorC} = ${resultado}`
}