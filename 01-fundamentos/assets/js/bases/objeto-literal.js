const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 12345,
        lng: -12345,
    },
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
    direccion: {
        zip: '1010, 9090',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
}

// console.log(personaje)
// console.log('Nombre', personaje.nombre)
// console.log('Edad', personaje['edad'])
// console.log('Coordenadas', personaje.coords)
// console.log('Lat', personaje.coords.lat)

// console.log('No. Trajes:', personaje.trajes.length)
// console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1])

// const x = 'vivo'
// console.log('Vivo:', personaje[x])

// console.log('Ultima pelicula:', personaje['ultima-pelicula'])



// Más detalles
// personaje.edad = null
// delete personaje.edad -> elimina una propiedad del objeto
// console.log(personaje)

// const entriesPares = Object.entries(personaje) -> convierte el objeto en unos arreglos de pares de valores
// console.log(entriesPares)



// ** USO DEL FREEZE **
// Object.freeze(personaje) -> evita que se modifiquen los atributos y valores y evita que se inserten nuevos datos
// personaje.casado = true
// console.log(personaje)

// ** AQUI NO FUNCIONA EL FREEZE **
// personaje.direccion.ubicacion = 'Panama'
// console.log(personaje)



// ** USO DE GETOWNPROPERTIES Y VALUES **
// const propiedades = Object.getOwnPropertyNames(personaje)
// const valores = Object.values(personaje)
// console.log({propiedades, valores})