function creaCampoMinato(DOM) {
    distruggiCampo(DOM);
    let span;
    for (let i = 0; i < 100; i++) {
        span = document.createElement('SPAN');
        span.setAttribute('data-index', i);
        span.classList.add('casella');
        DOM.campoMinato.appendChild(span);
    }
    DOM.caselleCampoMinato = document.querySelectorAll('#campo-minato > span');
}

function distruggiCampo(DOM) {
    if (DOM.caselleCampoMinato) {
        DOM.caselleCampoMinato.forEach(caselle => {
            caselle.remove();
        });
    }
}
export default creaCampoMinato;