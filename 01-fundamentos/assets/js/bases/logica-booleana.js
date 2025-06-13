const regresaTrue = () => true
const regresaFalse = () => false

// not o la negacion
// console.log(true)
// console.log(!true) // false
// console.log(!regresaFalse()) // true



// and -> true si todos los valores son verdaderos
// console.log(true && true) // true
// console.log(true && false) // false
// console.log(true && !false) // true

// console.log(regresaFalse() && regresaTrue()) // false



// or
// console.log(true || false)
// console.log(false || false)
// console.log(regresaTrue() || regresaFalse())
// console.log(true || true || true || false)



// asignaciones
const soyUndefined = undefined
const soyNull = null
const soyFalse = false

// const a1 = true && 'Hola mundo' && 150
// const a2 = 'Hola' && 'Mundo' && soyFalse && true
// const a3 = soyFalse || 'Ya no soyFalse'
// const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true
// const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true

// console.log({a1})
// console.log({a2})
// console.log({a3})
// console.log({a4})
// console.log({a5})

// if ( true || true || true || false ) {
//     console.log('Hola desde el IF')
// }