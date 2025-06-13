/**
 * Dias de la semana, abre a las 11
 * Pero, los fines de semana are a las 9
 */

const dia = 1 // 0: domingo, 1: lunes...
const horaActual = 12

let horaApertura
let mensaje // "Esta abierto" o "Está cerrado, hoy abrimos a las XX"

// if (dia === 0 || dia === 6) {
// if ( [0,6].includes(dia) ) {
//     console.log('Fin de semana')
//     horaApertura = 9
// } else {
//     console.log('Día de semana')
//     horaApertura = 11
// }

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
// } else {
//     mensaje = `Esta cerrado, abrimos a las ${horaApertura}`
// }



horaApertura = ( [0,6].includes(dia) ) ? 9 : 11
mensaje = horaActual >= horaApertura ? 'Esta abierto' : `Esta cerrado, abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje})