const key = 'eb1fcd935ede98a7c4bcc9f082499981'

async function search() {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}`)

    const resultado = await dados.json()

    console.log(resultado)
}
