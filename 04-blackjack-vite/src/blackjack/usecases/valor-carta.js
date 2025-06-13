
/**
 * 
 * @param {String} carta Ej. '10J', 'AK'...
 * @returns {Number}
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1)

  return (isNaN(valor))
    ? (valor === 'A') ? 11 : 10
    : valor * 1 // retorna el valor: 11, 3, 5...
}