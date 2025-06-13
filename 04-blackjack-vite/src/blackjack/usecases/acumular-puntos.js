import { valorCarta } from './index'

/**
 * 
 * @param {String} carta - Ej. '9H'...
 * @param {Number} turno - Ej. 0 (jugador), 1 (computadora)
 * @param {Array<String>} puntosJugadores - Ej. [0, 0] (jugador, computadora)
 * @param {NodeListOf<HTMLSmallElement>} smallsElement - Lista de elementos <small>
 */
export const acumularPuntos = (carta, turno, puntosJugadores, smallsElement) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
  smallsElement[turno].innerText = puntosJugadores[turno]
}