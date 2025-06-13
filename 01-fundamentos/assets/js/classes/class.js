class Persona {
    // 'use strict' -> lo usa por defecto

    static _conteo = 0

    static get conteo() {
        return Persona._conteo + ` instancias`
    }

    static mensaje() {
        console.log(this.nombre)
        console.log('Hola a todos, soy un metodo estatico')
    }

    nombre = ''
    codigo = ''
    frase = ''
    comida = ''

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        // if (!nombre) throw Error('Debe ingresar el nombre')

        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase

        Persona._conteo++
    }

    set comidaFavorita(comida) {
        this.comida = comida.toUpperCase()
    }

    get comidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        this.quienSoy()
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

const spiderman = new Persona('Peter', 'Spiderman', 'Soy tu vecino')
// const ironman = new Persona('Tony', 'Ironman', 'Soy Ironman')

// console.log({ironman})

// spiderman.quienSoy()
// ironman.quienSoy()

// spiderman.miFrase()
// ironman.miFrase()



// spiderman.comidaFavorita = 'El pastel de Manzana'
// spiderman.nemesis = 'Duende verde'
// spiderman.comida = 'Duende verde'

// console.log(spiderman.comidaFavorita)
// console.log(spiderman)



// Persona._conteo = 2
// console.log('Conteo estático: ' + Persona._conteo)
// console.log(Persona.conteo)



Persona.mensaje()

// Persona.propiedadExterna = 'Hola Mundo'
// console.log(Persona.propiedadExterna)



