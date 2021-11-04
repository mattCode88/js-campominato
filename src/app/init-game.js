function inizioGioco(e, DOM, elementiDiGioco) {

    elementiDiGioco.countLimitrofi = 0;

    if (!elementiDiGioco.bombe.includes(Number(e.target.dataset.index)) && !elementiDiGioco.arrayControllo.includes(Number(e.target.dataset.index))) {

        if (controllaIndiciAngoli(e.target.dataset.index, 0) || 
            controllaIndiciAngoli(e.target.dataset.index, 9) || 
            controllaIndiciAngoli(e.target.dataset.index, 90) || 
            controllaIndiciAngoli(e.target.dataset.index, 99)) {
            
            let array = controllaLimitrofiAngoli(e.target.dataset.index);

            espandiCaselleFree(e, DOM, array, elementiDiGioco);
               
        } else if (controllaIndiciLati(e.target.dataset.index, 1, 2, 3, 4, 5, 6, 7, 8) || 
                    controllaIndiciLati(e.target.dataset.index, 19, 29, 39, 49, 59, 69, 79, 89) || 
                    controllaIndiciLati(e.target.dataset.index, 10, 20, 30, 40, 50, 60, 70, 80) || 
                    controllaIndiciLati(e.target.dataset.index, 91, 92, 93, 94, 95, 96, 97, 98)) {
             
            let array = controllaLimitrofiLati(e.target.dataset.index);

            espandiCaselleFree(e, DOM, array, elementiDiGioco);
            
        } else {
            
            let array = controllaLimitrofiCentro(e.target.dataset.index);

            espandiCaselleFree(e, DOM, array, elementiDiGioco);

        }

        if (!elementiDiGioco.arrayControllo.includes(Number(e.target.dataset.index))) elementiDiGioco.arrayControllo.push(Number(e.target.dataset.index));
        
        e.target.classList.add('mina-free');

        if (elementiDiGioco.arrayControllo.length === 80) {
            DOM.campoMinato.classList.add('hide');
            DOM.vittoria.classList.add('show');
            DOM.risultato.innerText = `Hai vinto!!! Sei riuscito a schivare tutte le bombe!!!`;
        }

    } else if (elementiDiGioco.arrayControllo.includes(Number(e.target.dataset.index))) {

        alert('Casella già selezionata!!!');

    } else {

        DOM.campoMinato.classList.add('hide');
        DOM.sconfitta.classList.add('show');
        DOM.risultato.innerText = `Peccato...${elementiDiGioco.arrayControllo.length} bombe schivate!`

    }
}

function controllaIndiciLati(element, num1, num2, num3, num4, num5, num6, num7, num8) {
    let numeroBase = Number(element);
    if (numeroBase === num1 || numeroBase === num2 || numeroBase === num3 || numeroBase === num4 || numeroBase === num5 || 
        numeroBase === num6 || numeroBase === num7 || numeroBase === num8) return true;
}

function controllaIndiciAngoli(element, num) {
    let numeroBase = Number(element);
    if (numeroBase === num) return true;   
}

function controllaLimitrofiAngoli(num) {
    let numero = Number(num), param1, param2, param3, array;
    switch (numero) {
        case 0:
            param1 = 1, param2 = 10, param3 = 11;
            break;
        case 9:
            param1 = 8, param2 = 18, param3 = 19;
            break;
        case 90:
            param1 = 80, param2 = 81, param3 = 91;
            break;
        case 99:
            param1 = 98, param2 = 88, param3 = 89;
            break;
    }
    array = [param1, param2, param3];
    return array;
}

function controllaLimitrofiLati(num) {
    let numero = Number(num), param1, param2, param3, param4, param5, array;
    if (numero === 1 || numero === 2 || numero === 3 || numero === 4 || numero === 5 || numero === 6 || numero === 7 || numero === 8) {
        param1 = numero - 1, param2 = numero + 1, param3 = numero + 9, param4 = numero + 10, param5 = numero + 11;
    } else if (numero === 10 || numero === 20 || numero === 30 || numero === 40 || numero === 50 || numero === 60 || numero === 70 || numero === 80) {
        param1 = numero - 10, param2 = numero + 10, param3 = numero - 9, param4 = numero + 1, param5 = numero + 11;
    } else if (numero === 19 || numero === 29 || numero === 39 || numero === 49 || numero === 59 || numero === 69 || numero === 79 || numero === 89) {
        param1 = numero - 10, param2 = numero + 10, param3 = numero - 11, param4 = numero - 1, param5 = numero + 9;
    } else {
        param1 = numero - 1, param2 = numero + 1, param3 = numero - 11, param4 = numero - 10, param5 = numero - 9;
    }
    array = [param1, param2, param3, param4, param5];
    return array;
}

function controllaLimitrofiCentro(num) {
    let numero = Number(num), param1, param2, param3, param4, param5, param6, param7, param8, array;
    param1 = numero + 1, param2 = numero - 1, param3 = numero + 10, param4 = numero - 10, param5 = numero - 11, param6 = numero + 11,
    param7 = numero - 9, param8 = numero + 9;
    array = [param1, param2, param3, param4, param5, param6, param7, param8];
    return array;
}

function controllaLatoOcentroOAngolo(num, elementiDiGioco) {
    let array;
    if (!elementiDiGioco.arrayLati.includes(num) && !elementiDiGioco.arrayAngoli.includes(num)) {
        array = controllaLimitrofiCentro(num);
    } else if (elementiDiGioco.arrayLati.includes(num)) {
        array = controllaLimitrofiLati(num);
    } else {
        array = controllaLimitrofiAngoli(num);
    }
    return array;
}

function contaBombeLimitrofe(elementiDiGioco, array) {
    for (let bomb = 0; bomb < array.length; bomb++){
        if (elementiDiGioco.bombe.includes(array[bomb])) elementiDiGioco.countLimitrofi++;
    }
}

function inserisciNumeroBombe(DOM, elementiDiGioco, index) {
    elementiDiGioco.countLimitrofi !== 0 ? DOM.caselleCampoMinato[index].innerText = elementiDiGioco.countLimitrofi : DOM.caselleCampoMinato[index].innerText = '';
}

function controllaESelezionaCAsella(DOM, elementiDiGioco, index) {
    if(!elementiDiGioco.arrayControllo.includes(index)) elementiDiGioco.arrayControllo.push(index);
    DOM.caselleCampoMinato[index].classList.add('mina-free');
}

function espandiCaselleFree(e, DOM, parametri, elementiDiGioco) {

    contaBombeLimitrofe(elementiDiGioco, parametri);
    
    elementiDiGioco.countLimitrofi !== 0 ? e.target.innerText = elementiDiGioco.countLimitrofi : e.target.innerText = '';

    if (elementiDiGioco.countLimitrofi === 0) {
        let array2 = [];
        for (let a = 0; a < parametri.length; a++){

            controllaESelezionaCAsella(DOM, elementiDiGioco, parametri[a]);

            array2 = controllaLatoOcentroOAngolo(parametri[a], elementiDiGioco);

            elementiDiGioco.countLimitrofi = 0;

            contaBombeLimitrofe(elementiDiGioco, array2);
            inserisciNumeroBombe(DOM, elementiDiGioco, parametri[a]);
            
            if (elementiDiGioco.countLimitrofi === 0) {
                let array3 = [];
                for (let b = 0; b < array2.length; b++) {

                    controllaESelezionaCAsella(DOM, elementiDiGioco, array2[b]);

                    array3 = controllaLatoOcentroOAngolo(array2[b], elementiDiGioco);

                    elementiDiGioco.countLimitrofi = 0;

                    contaBombeLimitrofe(elementiDiGioco, array3);
                    inserisciNumeroBombe(DOM, elementiDiGioco, array2[b]);

                    if (elementiDiGioco.countLimitrofi === 0) {
                        let array4 = [];
                        for (let c = 0; c < array3.length; c++){

                            controllaESelezionaCAsella(DOM, elementiDiGioco, array3[c]);

                            array4 = controllaLatoOcentroOAngolo(array3[c], elementiDiGioco);
                            elementiDiGioco.countLimitrofi = 0;

                            contaBombeLimitrofe(elementiDiGioco, array4);
                            inserisciNumeroBombe(DOM, elementiDiGioco, array3[c]);

                            if (elementiDiGioco.countLimitrofi === 0) {
                                let array5 = [];
                                for (let d = 0; d < array4.length; d++){

                                    controllaESelezionaCAsella(DOM, elementiDiGioco, array4[d]);

                                    array5 = controllaLatoOcentroOAngolo(array4[d], elementiDiGioco);
                                    elementiDiGioco.countLimitrofi = 0;

                                    contaBombeLimitrofe(elementiDiGioco, array5);
                                    inserisciNumeroBombe(DOM, elementiDiGioco, array4[d]);
                                    
                                    if (elementiDiGioco.countLimitrofi === 0) {
                                        let array6 = [];
                                        for (let e = 0; e < array5.length; e++){

                                            controllaESelezionaCAsella(DOM, elementiDiGioco, array5[e]);

                                            array6 = controllaLatoOcentroOAngolo(array5[e], elementiDiGioco);
                                            elementiDiGioco.countLimitrofi = 0;

                                            contaBombeLimitrofe(elementiDiGioco, array6);
                                            inserisciNumeroBombe(DOM, elementiDiGioco, array5[e]);

                                            if (elementiDiGioco.countLimitrofi === 0) {
                                                let array7 = [];
                                                for (let f = 0; f < array6.length; f++){

                                                    controllaESelezionaCAsella(DOM, elementiDiGioco, array6[f]);

                                                    array7 = controllaLatoOcentroOAngolo(array6[f], elementiDiGioco);
                                                    elementiDiGioco.countLimitrofi = 0;

                                                    contaBombeLimitrofe(elementiDiGioco, array7);
                                                    inserisciNumeroBombe(DOM, elementiDiGioco, array6[f]);

                                                    if (elementiDiGioco.countLimitrofi === 0) {
                                                        let array8 = [];
                                                        for (let g = 0; g < array7.length; g++){

                                                            controllaESelezionaCAsella(DOM, elementiDiGioco, array7[g]);

                                                            array8 = controllaLatoOcentroOAngolo(array7[g], elementiDiGioco);
                                                            elementiDiGioco.countLimitrofi = 0;

                                                            contaBombeLimitrofe(elementiDiGioco, array8);
                                                            inserisciNumeroBombe(DOM, elementiDiGioco, array7[g]);

                                                            if (elementiDiGioco.countLimitrofi === 0) {
                                                                let array9 = [];
                                                                for (let h = 0; h < array8.length; h++){

                                                                    controllaESelezionaCAsella(DOM, elementiDiGioco, array8[h]);

                                                                    array9 = controllaLatoOcentroOAngolo(array8[h], elementiDiGioco);
                                                                    elementiDiGioco.countLimitrofi = 0;

                                                                    contaBombeLimitrofe(elementiDiGioco, array9);
                                                                    inserisciNumeroBombe(DOM, elementiDiGioco, array8[h]);

                                                                    if (elementiDiGioco.countLimitrofi === 0) {
                                                                        let array10 = [];
                                                                        for (let i = 0; i < array9.length; i++){

                                                                            controllaESelezionaCAsella(DOM, elementiDiGioco, array9[i]);

                                                                            array10 = controllaLatoOcentroOAngolo(array9[i], elementiDiGioco);
                                                                            elementiDiGioco.countLimitrofi = 0;

                                                                            contaBombeLimitrofe(elementiDiGioco, array10);
                                                                            inserisciNumeroBombe(DOM, elementiDiGioco, array9[i]);
                                
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 
        }
    } 
}

export default inizioGioco;






