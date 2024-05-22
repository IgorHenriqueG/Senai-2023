const uri = window.location.search;
const id = new URLSearchParams(uri).get("id");

const uri2 = "http://localhost:3000/destinos/" + id;
const card = document.querySelector(".model");
const hotelList = document.querySelector(".hotels-pt-list");
const hotelCard = document.querySelector(".hotel-card");

const images = [
    "ri1.avif",
    "ri2.avif",
    "ri3.jpg",
    "ri4.webp",
    "ri5.jpg",
    "ri6.jpg",
];

const hotelImages = [
    "rh1.jpg",
    "rh2.jpg",
    "rh3.jpg",
    "rh4.jpg",
    "rh5.jpg",
    "rh6.avif",
];

const pontoImages = [
    "rp1.jpg",
    "rp2.webp",
    "rp3.webp",
    "rp4.jpg",
    "rp5.jpg",
    "rp6.jpg",
];

const descriptions = [
    "Possui um importante acervo histórico e arquitetônico, além de suas belezas naturais que atraem vários turistas.",
    "Apresenta um dos melhores padrões de qualidade de vida entre todas as cidades do País.",
    "Apresenta marcos arquitetônicos do período áureo da borracha",
    "Possui belas praias e arquitetura holandesa.",
    "É uma das cidades mais arborizadas do país.",
];

console.log(uri2);

const itens = [];

const hoteis = [];

const pontos = [];

function loadItens() {
    fetch(uri2)
        .then((response) => response.json())
        .then((data) => {
            itens.push(data);
            loadDestinos();
            console.log(itens);
        });
}

function loadDestinos() {
    const mainImage = document.querySelector(".main-image").querySelector("img");
    mainImage.src = "../assets/images/randomImages/" + images[Math.floor(Math.random() * images.length)];

    const title = document.querySelector(".place-title");
    title.innerHTML = itens[0].nome;

    const location = document.querySelector(".place-subtitle");
    location.innerHTML = itens[0].nome + ", " + "Brazil";

    const description = document.querySelector(".place-description");
    description.innerHTML = descriptions[Math.floor(Math.random() * descriptions.length)];

    const hotelNumbers = document.querySelector(".hotel-numbers");
    hotelNumbers.innerHTML = itens[0].hoteis.length;

    const pontosNumbers = document.querySelector(".pontos-numbers");
    pontosNumbers.innerHTML = itens[0].pontos.length;

    const hotels_pt_list = document.querySelector(".hotels-pt-list");
    const card = document.querySelector(".model");

    itens[0].hoteis.forEach((item) => {
        let clone = card.cloneNode(true);
        clone.classList.remove("model");

        clone.querySelector("img").src = "../assets/images/randomHotels/" + hotelImages[Math.floor(Math.random() * hotelImages.length)];

        clone.querySelector(".hp-title").innerHTML = item.nome;
        clone.querySelector(".hp-stars").innerHTML = item.avaliacao + `/5 <i class="bi bi-star-fill"></i>`;

        clone.querySelector(".hp-phone").innerHTML = item.telefones[0] ? item.telefones[0].telefone + ` <i class="bi bi-telephone-fill"></i>` : `Não informado <i class="bi bi-telephone-fill"></i>`;

        clone.querySelector(".hp-email").innerHTML = item.email ? item.email + ` <i class="bi bi-envelope-fill"></i>` : `Não informado <i class="bi bi-envelope-fill"></i>`;

        clone.querySelector(".hp-site").innerHTML = item.site ? item.site + ` <i class="bi bi-globe"></i>` : `Não informado <i class="bi bi-globe"></i>`;

        clone.querySelector(".hp-price").innerHTML = "R$" + item.valor;

        hotels_pt_list.appendChild(clone);
    });

    itens[0].pontos.forEach((item) => {
        let clone = card.cloneNode(true);
        clone.classList.remove("model");

        clone.querySelector("img").src = "../assets/images/randomPoints/" + pontoImages[Math.floor(Math.random() * pontoImages.length)];

        clone.querySelector(".hp-title").innerHTML = item.nome;

        clone.querySelector(".hp-adress").innerHTML = item.endereco;

        clone.querySelector(".hp-phone").innerHTML = item.telefone ? item.telefone + ` <i class="bi bi-telephone-fill"></i>` : `Não informado <i class="bi bi-telephone-fill"></i>`;

        clone.querySelector(".hp-price").innerHTML = "R$" + item.valor;


        hotels_pt_list.appendChild(clone);
    });

    console.log(card);
}