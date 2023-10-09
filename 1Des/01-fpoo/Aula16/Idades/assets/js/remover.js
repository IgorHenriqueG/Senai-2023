var tabelaBody = document.querySelector('#corpoTabela')

var alertD = document.querySelector('#deleteAlert')

var excluir = document.querySelector('#excluir')
var cancelar = document.querySelector('#cancelar')

var test = document.querySelector('#TEST')

tabelaBody.addEventListener("contextmenu", function(event){
    event.preventDefault()

    test.innerHTML = 'Deseja excluir ' + event.target.parentNode.innerHTML + "?"

    alertD.classList.remove('notActive')
    alertD.classList.add('active')

    excluir.addEventListener("click", function(){
        event.target.parentNode.classList.add('fadeout')

        setTimeout(function(){
            console.log(pessoas)
            event.target.parentNode.remove();
        }, 400);

        alertD.classList.add('notActive')
        alertD.classList.remove('active')
    })
    cancelar.addEventListener("click", function(){
        alertD.classList.add('notActive')
        alertD.classList.remove('active')
    })
})