import { pedirCarta, acumularPuntos, crearImgCarta } from './index'

/**
 * 
 * @param {Number} ptsJugador1 - Puntos obtenidos del jugador
 * @param {Array<Number>} puntosJugadores - Ej. [0, 0] (jugador, computadora)
 * @param {Array<String>} deck - Ej. ['10H', '2S'...]
 * @param {() => string} pedirCarta - Ej. '9C', 'AH'...
 * @param {NodeListOf<HTMLElement>} smallsElement - Lista de elementos <small>
 * @param {() => void} determinarGanador - Determina el resultado del juego
 */

export const turnoComputadora = (ptsJugador1, puntosJugadores, deck, smallsElement, determinarGanador, divCartasJugadores) => {
    
    do {
        if (puntosJugadores[puntosJugadores.length - 1] === 21) break

        const carta = pedirCarta(deck)
        acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, smallsElement)

        crearImgCarta(carta, puntosJugadores.length - 1, divCartasJugadores)

    } while ((puntosJugadores[puntosJugadores.length - 1] <= ptsJugador1) && ptsJugador1 <= 21)

    determinarGanador()
}