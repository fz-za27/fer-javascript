// function crearPersona(nombre, apellido) {
//     return { nombre, apellido }
// }

// const crearPersona = (nombre, apellido) => ({ nombre, apellido })

// const persona = crearPersona('Fabian', 'Zam')
// console.log( persona )



// function imprimeArgumentos() {
//     console.log( arguments )
// }

// const imprimeArgumentos2 = (edad, ...args) => {
//     // console.log({edad, args})

//     return args
// }

// imprimeArgumentos(10, false, true, 'Fabian', 'Sayonara')
// const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, false, true, 'Fabian', 'Sayonara')
// console.log({casado, vivo, nombre, saludo})



// const crearPersona = (nombre, apellido) => ({nombre, apellido})
// const { apellido: nuevoApellido } = crearPersona('Fabian', 'Zam')
// console.log(nuevoApellido)



const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
}

// const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
//     edad = edad || 0
    
//     console.log({nombre}) 
//     console.log({codeName}) 
//     console.log({vivo}) 
//     console.log({edad}) 
//     console.log({trajes})
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 10, trajes }) => {
    console.log({nombre}) 
    console.log({codeName}) 
    console.log({vivo}) 
    console.log({edad}) 
    console.log({trajes})
}

imprimePropiedades(tony)