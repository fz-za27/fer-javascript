import _ from 'underscore'

// export const miNombre = 'Fabian'

/**
 * 
 * @param {Array<string>} deck - Mazo principal de cartas
 * @param {Array<string>} tiposDeCarta - ['C', 'H', 'S', 'D']
 * @param {Array<string>} tiposEspeciales - ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} Retorna las cartas barajeadas
 */
export const crearDeck = (deck, tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0) 
    throw new Error('tiposDeCarta is required')
  
  if (!tiposEspeciales || tiposEspeciales.length === 0) 
    throw new Error('tiposEspeciales is required')
  
  
  deck = []

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo)
    }
  }

  for (let especial of tiposEspeciales) {
    for (let tipo of tiposDeCarta) {
      deck.push(especial + tipo)
    }
  }

  return _.shuffle(deck)
}

// export default crearDeck