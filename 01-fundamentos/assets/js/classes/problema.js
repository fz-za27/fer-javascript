// const fabian = {
//     nombre: 'Fabian',
//     edad: 10,
//     imprimir() {
//         console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
//     }
// }

// const pedro = {
//     nombre: 'Pedro',
//     edad: 20,
//     imprimir() {
//         console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
//     }
// }

// fabian.imprimir()



function Persona(nombre, edad) {
    console.log('Se ejecuto esta línea')

    this.nombre = nombre
    this.edad = edad

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

// const maria = new Persona('Maria', 10)
// console.log({maria})
// maria.imprimir()


const fabian = new Persona('Fabian', 15)
console.log({fabian})
fabian.imprimir()