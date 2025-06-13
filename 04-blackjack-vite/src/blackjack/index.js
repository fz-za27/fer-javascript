// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck'
// import crearDeck, { miNombre } from "./usecases/crear-deck"
import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearImgCarta } from './usecases'

/**
 * 2C - TWO OF CLUBS (TREBOLES)
 * 2H - TWO OF HEARTS (CORAZONES)
 * 2S - TWO OF SPADES (ESPADAS)
 * 2D - TWO OF DIAMONS (DIAMANTES)
 */

let deck = [],
  puntosJugadores = []
// puntosJugadores[0] -> jugador1
// puntosJugadores[puntosJugadores.length - 1] -> computadora

const tipos = ['C', 'H', 'S', 'D'],
  especiales = ['A', 'J', 'Q', 'K']

// REFERENCIAS DEL HTML
const btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
  btnPedirCarta = document.querySelector('#btnPedirCarta'),
  btnDetener = document.querySelector('#btnDetener')

const smallsElement = document.querySelectorAll('small')

const divCartasJugadores = document.querySelectorAll('.divCartas')

const inicializarJuego = (numJugadores = 1) => {
  puntosJugadores = []
  deck = crearDeck(deck, tipos, especiales)

  for (let i = 0; i <= numJugadores; i++) { // agrega la cantidad de jugadores. 0 -> jugador, 1 -> computadora
    puntosJugadores.push(0)
  }

  btnPedirCarta.disabled = false
  btnDetener.disabled = false

  smallsElement.forEach(elem => elem.innerText = 0)
  divCartasJugadores.forEach(elem => elem.innerHTML = '')
}



const determinarGanador = () => {
  // let ptsComputadora = puntosJugadores[puntosJugadores.length - 1]
  const [ptsJugador1, ptsComputadora] = puntosJugadores

  setTimeout(() => {
    if ((ptsJugador1 === ptsComputadora) && ptsJugador1 <= 21 && ptsComputadora <= 21)
      alert('Es un EMPATE!!!! 🥳')

    if (ptsJugador1 === 21 || (ptsJugador1 <= 21 && (ptsComputadora > 21 || ptsComputadora < ptsJugador1)))
      alert('Ganó el JUGADOR!!!! 😮')

    if (ptsComputadora === 21 || (ptsComputadora <= 21 && (ptsJugador1 > 21 || ptsJugador1 < ptsComputadora)))
      alert('Ganó la COMPUTADORA!!!! 🦾')
  }, 100)
}

// EVENTOS
btnPedirCarta.addEventListener('click', () => {
  const carta = pedirCarta(deck)

  acumularPuntos(carta, 0, puntosJugadores, smallsElement) // 0: jugador1

  crearImgCarta(carta, 0, divCartasJugadores)

  if (puntosJugadores[0] > 21) {
    btnPedirCarta.disabled = true
    btnDetener.disabled = true

    turnoComputadora(puntosJugadores[0], puntosJugadores, deck, smallsElement, determinarGanador, divCartasJugadores)

  } else if (puntosJugadores[0] === 21) {
    btnPedirCarta.disabled = true
    btnDetener.disabled = true

    turnoComputadora(puntosJugadores[0], puntosJugadores, deck, smallsElement, determinarGanador, divCartasJugadores)
  }
})

btnDetener.addEventListener('click', () => {
  btnPedirCarta.disabled = true
  btnDetener.disabled = true

  turnoComputadora(puntosJugadores[0], puntosJugadores, deck, smallsElement, determinarGanador, divCartasJugadores)
})

btnNuevoJuego.addEventListener('click', () => {

  inicializarJuego()
})