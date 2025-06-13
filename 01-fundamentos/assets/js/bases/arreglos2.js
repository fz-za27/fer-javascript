let juegos = ['Zelda', 'Mario', 'Metroit', 'Chrono']
// console.log('Largo:', juegos.length)



// let primero = juegos[2 - 2]
// let ultimo = juegos[juegos.length - 1]
// console.log({primero, ultimo})



// juegos.forEach((value, index, arr) => {
//     console.log({value, index, arr})
// })

// let nuevaLongitud = juegos.push('F-Zero') -> inserta un elemento al final
// let nuevaLongitud = juegos.unshift('F-Zero') -> inserta un elemento al inicio
// console.log({nuevaLongitud, juegos})



// console.log(juegos)
// let juegoBorrado = juegos.pop() // elimina el último elemento y lo retorna
// console.log({ juegoBorrado, juegos })



// let posicion = 1
// let juegoBorrado = juegos.splice(posicion, 1) // elimina un elemento del arreglo en la posición marcada y retorna el eliminado
// console.log({juegoBorrado, juegos})



let metroitIndex = juegos.indexOf('Metroit')
console.log({metroitIndex})