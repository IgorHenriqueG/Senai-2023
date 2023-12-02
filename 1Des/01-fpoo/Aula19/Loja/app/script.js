const file = document.getElementById('file')
const cardsContainer = document.querySelector('.cards')

var dados = {
    usuarios: [],
    itens: []
}

// Lendo o arquivo

file.addEventListener('change', (e) => {
    const file = e.target.files[0]
    let reader = new FileReader()

    reader.readAsText(file)

    reader.onload = () => {
        dados = JSON.parse(reader.result)
        document.querySelector('.file-upload').classList.add('hidden')
        document.querySelector('.buttons').classList.remove('hidden')
        document.querySelector('footer').style = ''
        document.querySelector('.text-container').classList.add('hidden')
        document.querySelector('.container').classList.remove('hidden')
        cards()
    }
})

// Criando os cards em referência a quantos itens existem no arquivo JSON

function cards() {
    cardsContainer.innerHTML = `
    <div class="card model">
        <div class="discount-img hidden">
            <img src="../assets/firecomfire.png">
            <div class=""></div>
        </div>
        <div class="main-image">
            <img src="" onerror="this.src='../assets/noimage.jpg'" class="main-img">
            <img src="" onerror="this.src='../assets/noimage.jpg'" class="hover-img">
        </div>
        <div class="info">
            <h1>a</h1>
            <p>a</p>
            <div class="rating">
                
            </div>
        </div>
        <div class="buy">
            <div class="price">
                <p class="price-value">Preço</p>
                <p class="discount subtext">Desconto</p>
                <p class="percentage subtext">Porcentagem</p>
            </div>
            <img src="../assets/heart.png" class="heart">
        </div>
    </div>
        `
    dados.itens.forEach((item, i) => {
        const model = document.querySelector('.model').cloneNode(true)
        let price = item.price
        let discountImg = model.querySelector('.discount-img')

        if(item.discount > 0) {
            var discount = (item.price * (100 - item.discount) / 100)
            percentage = `-${item.discount}%`
            discountImg.classList.remove('hidden')
        }else {
            var discount = item.price
            item.price = 0
            percentage = ''
        }

        model.classList.remove('model')
        model.querySelector('h1').innerHTML = item.name
        model.querySelector('p').innerHTML = item.console
        model.querySelector('.price-value').innerHTML = `R$${Number(discount).toFixed(2).replace('.', ',')}`
        model.querySelector('.discount').innerHTML = item.price > 0 ? `R$${Number(price).toFixed(2).replace('.', ',')}` : ''
        model.querySelector('.percentage').innerHTML = percentage
        model.querySelector('.hover-img').src = item.imageHover
        model.querySelector('.main-img').src = item.image == '404' ? '../assets/noimage.jpg' : item.image
        const rating = model.querySelector('.rating')
        for (let i = 0; i < 5; i++) {
            if (i < item.stars) {
                rating.innerHTML += `<img src="../assets/star.png">`
            } else {
                rating.innerHTML += `<img src="../assets/star-empty.png">`
            }
        }

        cardsContainer.appendChild(model)
    })
    document.querySelector('.model').remove();
    heart()
}