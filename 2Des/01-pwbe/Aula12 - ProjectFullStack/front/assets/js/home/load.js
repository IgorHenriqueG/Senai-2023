const uri = "http://localhost:3000/destinos";
const itens = [];

const images = [
    "ri1.avif",
    "ri2.avif",
    "ri3.jpg",
    "ri4.webp",
    "ri5.jpg",
    "ri6.jpg",
];

function loadItens() {
    fetch(uri)
    .then(response => response.json())
    .then(data => {
        itens.push(...data);
        loadDestinos();
        console.log(itens);
    });
}

function loadDestinos() {
    const destinosList = document.querySelector(".destinos-list");

    const card = document.querySelector(".model");

    console.log(card);

    itens.forEach(item => {
        let clone = card.cloneNode(true);
        clone.classList.remove("model");

        const random_images = Math.floor(Math.random() * images.length);

        clone.querySelector("img").src = "assets/images/randomImages/" + images[random_images];

        clone.querySelector(".destino-title").innerHTML = item.nome;
        clone.querySelector(".destino-location").innerHTML = item.nome + ", " + "Brazil";

        clone.querySelector(".destino-hoteis").innerHTML = item.hoteis.length;
        clone.querySelector(".destino-pontos").innerHTML = item.pontos.length;

        clone.querySelector(".destino-button").addEventListener("click", () => {
            window.location.href = "pages/destine.html?id=" + item.id;
        });

        

        destinosList.appendChild(clone);
    });
}