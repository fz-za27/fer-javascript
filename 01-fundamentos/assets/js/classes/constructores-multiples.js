
class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre
        this.apellido = apellido
        this.pais = pais
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1 = 'Melissa',
      apellido1 = 'Flores',
      pais1 = 'Honduras'

const fab = {
    nombre: 'Fabian',
    apellido: 'Zam',
    pais: 'PAN'
}

const persona1 = new Persona(nombre1, apellido1, pais1)
persona1.getInfo()

const persona2 = Persona.porObjeto(fab)
persona2.getInfo()