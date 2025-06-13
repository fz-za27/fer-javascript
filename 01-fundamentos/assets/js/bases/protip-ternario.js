// const elMayor = (a, b) => (a > b) ? a : b

// const tieneMembresia = (miembro) => miembro ? '2$' : '10$'

// console.log( elMayor(110, 11) )
// console.log(tieneMembresia(false))



// const amigo = false
// const amigosArr = [
//     'Peter',
//     'Tony',
//     'Dr Strange',
//     amigo ? 'Hulk' : 'Capitan America',
//     (() => 'Nick Fury')(),
//     elMayor(10,20)
// ]

// console.log({ amigosArr })



const nota = 82.5 // A+, A, B+, B
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F'
              
console.log({nota, grado})