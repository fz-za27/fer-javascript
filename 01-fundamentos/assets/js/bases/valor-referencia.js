// let a = 10
// let b = a

// a = 30

// console.log({a, b})



// let juan = { nombre: 'Juan' }
// let ana = { ...juan }

// ana.nombre = 'Ana'

// console.log({ juan, ana })



// const cambiaNombre = ({...persona}) => {
//     persona.nombre = 'Tony'

//     return persona
// }

// let peter = { nombre: 'Peter' }
// let tony = cambiaNombre(peter)

// console.log({peter, tony})



// El mismo ejemplo, pero con arreglos
// const frutas = ['manzana', 'pera', 'piña']
// const otrasFrutas = [...frutas]

// otrasFrutas.push('naranja')

// console.log({ frutas, otrasFrutas })


const frutas = ['manzana', 'pera', 'piña']

console.time('SPREAD')
const otrasFrutas2 = frutas.slice()
console.timeEnd('SPREAD')

console.time('SLICE')
const otrasFrutas = frutas.slice()
console.timeEnd('SLICE')


otrasFrutas.push('naranja')
otrasFrutas2.push('mango')

console.log({ frutas, otrasFrutas })