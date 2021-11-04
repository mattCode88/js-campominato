import { creaBombe } from "./init-bomb.js";
import creaCampoMinato from "./init-campo.js";

function retryGame(e, DOM, elementiDiGioco) {
    resettaElementi(elementiDiGioco);
    creaCampoMinato(DOM);
    risettaDom(DOM);
}

function resettaElementi(elementiDiGioco) {
    elementiDiGioco.arrayControllo = [];
    elementiDiGioco.countLimitrofi = 0;
    elementiDiGioco.bombe = creaBombe();
}

function risettaDom(DOM) {
    DOM.risultato.innerText = ``;
    DOM.sconfitta.classList.replace('show', 'hide');
    DOM.vittoria.classList.replace('show', 'hide');
    DOM.campoMinato.classList.replace('hide', 'show-flex');
}

export default retryGame;