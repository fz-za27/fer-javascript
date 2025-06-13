const carros = ['Ford', 'Mazda', 'Honda', 'Toyota']
// let i = 0

// WHILE

// while (i < carros.length) {
//     console.log(carros[i])

//     // i = i + 1
//     // i+=2
//     i++
// }

// se considera falso el: undefined, null, false
// while (carros[i]) {
//     // if (i === 1) break -> se detiene cuando el 'i' === 1
//     if (i === 1) {
//         i++

//         continue
//     }

//     console.log(carros[i])
//     i++
// }



// DO WHILE
let j = 0

do {
    console.log(carros[j])
    j++

} while(carros[j])