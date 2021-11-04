export function creaBombe() {
    let numeroRandom = randomNumber(), array = [];
    generaArrayRandom(array, numeroRandom);
    return array;
}

function randomNumber() {
    return Math.random() * 100 | 0;
}

function generaArrayRandom(array, numeroRandom) {
    while (array.length < 20 ) {
        if (!array.includes(numeroRandom)) {
            array.push(numeroRandom);
        }
        numeroRandom = randomNumber();
    }
}

let bombe = creaBombe();

export default bombe;