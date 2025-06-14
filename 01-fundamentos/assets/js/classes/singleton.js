class Singleton {
    static #instancia // undefined o la primera instancia

    constructor(nombre = '') {
        
        // const a = undefined
        // console.log(a)
        // console.log(!a)
        // console.log(!!a)

        if (!!Singleton.#instancia) {
            return Singleton.#instancia
        }

        Singleton.#instancia = this
        this.nombre = nombre

        // return this -> es opcional y lo hace el constructor de la clase
    }
}

const instancia1 = new Singleton('Ironman')
const instancia2 = new Singleton('Spiderman')
const instancia3 = new Singleton('Black Panther')

console.log(`Nombre en la instancia 1, es: ${instancia1.nombre}`)
console.log(`Nombre en la instancia 2, es: ${instancia2.nombre}`)
console.log(`Nombre en la instancia 3, es: ${instancia3.nombre}`)