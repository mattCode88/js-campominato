import creaCampoMinato from './init-campo.js';
import bombe from './init-bomb.js';
import inizioGioco from './init-game.js';
import retryGame from './retry-game.js';

const DOM = {
    campoMinato: document.getElementById('campo-minato'),
    vittoria: document.getElementById('vittoria'),
    sconfitta: document.getElementById('sconfitta'),
    risultato: document.getElementById('risultato'),
    tryBtn: document.getElementById('retry-btn')
}

const elementiDiGioco = {
    bombe,
    arrayControllo: [],
    countLimitrofi: 0,
    arrayLati: [1, 2, 3, 4, 5, 6, 7, 8, 10, 20, 30, 40, 50, 60, 70, 80, 19, 29, 39, 49, 59, 69, 79, 89, 91, 92, 93, 94, 95, 96, 97, 98],
    arrayAngoli: [0, 9, 90, 99],
}

export default () => {
    creaCampoMinato(DOM);
    DOM.campoMinato.addEventListener('click', e => inizioGioco(e, DOM, elementiDiGioco));
    DOM.tryBtn.addEventListener('click', e => retryGame(e, DOM, elementiDiGioco));
}