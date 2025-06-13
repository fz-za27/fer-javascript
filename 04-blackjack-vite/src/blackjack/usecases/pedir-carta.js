/**
 * 
 * @param {Array<String>} deck
 * @returns {String}
 */

export const pedirCarta = (deck) => {
  if (deck.length === 0) throw 'No hay cartas en el deck'

  return deck.pop() // retorna la carta: '10K', '9C'...
}