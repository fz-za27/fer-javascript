/**
 * 
 * @param {String} carta - Ej. '9H'...
 * @param {Number} turno - 0 (jugador), 1 (computadora)
 * @param {NodeListOf<HTMLDivElement>} divCartasJugadores
 */
export const crearImgCarta = (carta, turno, divCartasJugadores) => {
  const imgCarta = document.createElement('img')
  imgCarta.classList.add('carta')
  imgCarta.src = `assets/cartas/${carta}.png`

  divCartasJugadores[turno].append(imgCarta)
}