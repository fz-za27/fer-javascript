// let a = 1

// if (a >= 10) {
//     console.log('A es >= 10')
// } else {
//     console.log('A es < 10')
// }

// console.log('Fin de programa')



// const hoy = new Date()
// let dia = hoy.getDay() // 0: domingo, 1: lunes, 2: martes...

// // console.log(hoy)
// console.log({dia})

// if (dia === 0) {
//     console.log('DOMINGO')
// } else if (dia === 1) {
//     console.log('LUNES')


//     // if (dia === 1) {
//     //     console.log('LUNES')
//     // } else {
//     //     console.log('NO ES LUNES NI DOMINGO')
//     // }
// } else if (dia === 2) {
//     console.log('MARTES')
// } else {
//     console.log('NO ES DOMINGO, LUNES, MARTES...')
// }



const hoy = new Date()
const dia = hoy.getDay()

// const dias = {
//     1: () => 'LUNES - 1',
//     2: () => 'MARTES - 2',
//     3: () => 'MIERCOLES - 3',
//     4: () => 'JUEVES - 4',
//     5: () => 'VIERNES - 5',
//     6: () => 'SABADO - 6',
//     0: () => 'DOMINGO - 0',
// }

// console.log(dias[dia]() || 'DIA NO DEFINIDO')


const diasArr = [
    'DOMINGO - 0',
    'LUNES - 1',
    'MARTES - 2',
    'MIERCOLES - 3',
    'JUEVES - 4',
    'VIERNES - 5',
    'SABADO - 6',
]

console.log(diasArr[dia] || 'DIA NO DEFINIDO')