class Triangulo{
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
        this.tipo
    }

    tipo(){
        if(this.lado1 == this.lado2 && this.lado1 == this.lado3){
            return this.tipo = 'Equilátero'
        }else if(this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3){
            return this.tipo = 'Isosceles'
        }else{
            return this.tipo = 'Escaleno'
        }
    }

    showHTML(){
        let str = `<label>Lado1:</label><label>${this.lado1}</label>`
        str += `<label>Lado2:</label><label>${this.lado2}</label>`
        str += `<label>Lado3:</label><label>${this.lado3}</label>`
        str += `<label>Tipo:</label><label>${this.tipo()}</label>`
        return str
    }
}

const listaTriangulos = []
listaTriangulos.push(new Triangulo(10, 20, 30))
listaTriangulos.push(new Triangulo(10, 10, 30))
listaTriangulos.push(new Triangulo(10, 20, 10))
listaTriangulos.push(new Triangulo(30, 10, 10))
listaTriangulos.push(new Triangulo(20, 20, 20))


console.log(listaTriangulos)

const main = document.getElementById("triangulos")
listaTriangulos.forEach(triangulo => {
    const div = document.createElement('div')
    div.innerHTML = triangulo.showHTML()
    main.appendChild(div)
})