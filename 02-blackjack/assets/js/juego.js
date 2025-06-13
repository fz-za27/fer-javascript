const miModulo = (() => {
    'use strict'

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
        deck = crearDeck()

        for (let i = 0; i <= numJugadores; i++) { // agrega la cantidad de jugadores. 0 -> jugador, 1 -> computadora
            puntosJugadores.push(0)
        }

        btnPedirCarta.disabled = false
        btnDetener.disabled = false

        smallsElement.forEach(elem => elem.innerText = 0)
        divCartasJugadores.forEach(elem => elem.innerHTML = '')
    }

    const crearDeck = () => {
        deck = []

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo)
            }
        }

        for (let especial of especiales) {
            for (let tipo of tipos) {
                deck.push(especial + tipo)
            }
        }

        return _.shuffle(deck)
    }

    const pedirCarta = () => {
        if (deck.length === 0) throw 'No hay cartas en el deck'

        return deck.pop() // retorna la carta: '10K', '9C'...
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1)

        return (isNaN(valor))
            ? (valor === 'A') ? 11 : 10
            : valor * 1 // retorna el valor: 11, 3, 5...
    }

    const turnoComputadora = (ptsJugador1) => {

        do {
            if (puntosJugadores[puntosJugadores.length - 1] === 21) break

            const carta = pedirCarta()
            acumularPuntos(carta, puntosJugadores.length - 1)

            crearImgCarta(carta, puntosJugadores.length - 1)

        } while ((puntosJugadores[puntosJugadores.length - 1] <= ptsJugador1) && ptsJugador1 <= 21)

        determinarGanador()
    }

    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
        smallsElement[turno].innerText = puntosJugadores[turno]
    }

    const crearImgCarta = (carta, turno) => {
        const imgCarta = document.createElement('img')
        imgCarta.classList.add('carta')
        imgCarta.src = `assets/cartas/${carta}.png`

        divCartasJugadores[turno].append(imgCarta)
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
        const carta = pedirCarta()

        acumularPuntos(carta, 0) // 0: jugador1

        crearImgCarta(carta, 0)

        if (puntosJugadores[0] > 21) {
            btnPedirCarta.disabled = true
            btnDetener.disabled = true

            turnoComputadora(puntosJugadores[0])

        } else if (puntosJugadores[0] === 21) {
            btnPedirCarta.disabled = true
            btnDetener.disabled = true

            turnoComputadora(puntosJugadores[0])
        }
    })

    btnDetener.addEventListener('click', () => {
        btnPedirCarta.disabled = true
        btnDetener.disabled = true

        turnoComputadora(puntosJugadores[0])
    })

    // btnNuevoJuego.addEventListener('click', () => {
    //     inicializarJuego()
    // })

    return {
        nuevoJuego: inicializarJuego
    }
})()