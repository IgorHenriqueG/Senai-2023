const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const desc = document.getElementById('description');
const humidity = document.getElementById('humidity');
const icon = document.getElementById('icon');

const link = 'https://openweathermap.org/img/wn/' 

const key = 'eb1fcd935ede98a7c4bcc9f082499981'

async function search() {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&lang=pt_br&units=metric`)
    const resultado = await dados.json()

    if (resultado.cod === '404') {
        alert('Cidade não encontrada')
        return
    }

    city.value = ''

    resultado.main.temp = (resultado.main.temp).toFixed(0)

    cityName.innerText = resultado.name
    temperature.innerText = resultado.main.temp + '°C'
    icon.src = link + resultado.weather[0].icon + '.png'
    desc.innerText = resultado.weather[0].description
    humidity.innerText = 'Umidade: ' + resultado.main.humidity + '%'
}
