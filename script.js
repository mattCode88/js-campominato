//VARIABILI DOM
const campo = document.querySelector("#section1 > div:first-of-type");
const bomba = document.querySelector("#section1 > div:nth-of-type(2)");
const applausi = document.querySelector("#section1 > div:last-of-type");
const sconfitta = document.getElementById("sconfitta");
const vittoria = document.getElementById("vittoria");
const gioca = document.getElementById("button");
const riprova = document.getElementById("button2");
const check = document.getElementsByClassName("radioCheck");
const messaggio = document.getElementById("messaggio");
const headerTop = document.getElementById("header-top");
const headerBottom = document.getElementById("header-bottom");

//VARIABILI
let div;
let divSconfitta;
// let count = 0;
let arrayRandom = [];
let arrayControl = [];

// FUNZIONI
const randomNumber = () => Math.floor(Math.random() * 100);

const messaggioInizio = () => {
    messaggio.innerText = '';
    headerTop.style.display = "none";
    headerBottom.style.display = "block";
    headerBottom.innerText ="Inizia a correre!!!"
};

const generaArrayRandom = (num) => {
    let array = [];
    let numeroRandom;
    while(array.length < num){
        numeroRandom = randomNumber();
        if(!array.includes(numeroRandom)){
            array.push(numeroRandom);
        }
    }
    return array;
};

const generaTabella = () => {
    for(let i = 0; i < 100; i++){
        div = document.createElement("div");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.innerText = [i];
        campo.appendChild(div);
        campo.style.display = "flex";
    }
};

const distruggiTabella = () => {
    let caselle = document.querySelectorAll("#section1 > div:first-of-type > div");
    caselle.forEach(element => {
        element.remove();
    });
};

const controlloMine = (element) => {
    if(Number(element.textContent) === 0){
        let count = 0;
        if(arrayRandom.includes(Number(element.textContent) + 1)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) + 10)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) + 11)){
            count += 1;
        }
        if(count !== 0){
            element.innerText = count;
            element.style.color = "black";
        }
    }else if(Number(element.textContent) === 90){
        let count = 0;
        if(arrayRandom.includes(Number(element.textContent) + 1)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) - 10)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) - 9)){
            count += 1;
        }
        if(count !== 0){
            element.innerText = count;
            element.style.color = "black";
        }
    }else if(Number(element.textContent) === 99){
        let count = 0;
        if(arrayRandom.includes(Number(element.textContent) - 1)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) - 10)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) - 11)){
            count += 1;
        }
        if(count !== 0){
            element.innerText = count;
            element.style.color = "black";
        }
    }else if(Number(element.textContent) === 9){
        let count = 0;
        if(arrayRandom.includes(Number(element.textContent) - 1)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) + 10)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) + 9)){
            count += 1;
        }
        if(count !== 0){
            element.innerText = count;
            element.style.color = "black";
        }
    }else if(Number(element.textContent) === 10 || Number(element.textContent) === 20 || Number(element.textContent) === 30 ||
    Number(element.textContent) === 40 || Number(element.textContent) === 50 || Number(element.textContent) === 60 || Number(element.textContent) === 70 ||
    Number(element.textContent) === 80){
        let count = 0;
        if(arrayRandom.includes(Number(element.textContent) + 1)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) - 10)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) - 9)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) + 10)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) + 11)){
            count += 1;
        }
        if(count !== 0){
            element.innerText = count;
            element.style.color = "black";
        }   
    }else if(Number(element.textContent) === 1 || Number(element.textContent) === 2 || Number(element.textContent) === 3 ||
    Number(element.textContent) === 4 || Number(element.textContent) === 5 || Number(element.textContent) === 6 || Number(element.textContent) === 7 ||
    Number(element.textContent) === 8){
        let count = 0;
        if(arrayRandom.includes(Number(element.textContent) + 1)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) - 1)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) + 9)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) + 10)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) + 11)){
            count += 1;
        }
        if(count !== 0){
            element.innerText = count;
            element.style.color = "black";
        }
    }else if(Number(element.textContent) === 19 || Number(element.textContent) === 29 || Number(element.textContent) === 39 ||
    Number(element.textContent) === 49 || Number(element.textContent) === 59 || Number(element.textContent) === 69 || Number(element.textContent) === 79 ||
    Number(element.textContent) === 89){
        let count = 0;
        if(arrayRandom.includes(Number(element.textContent) - 1)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) - 10)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) - 11)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) + 10)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) + 9)){
            count += 1;
        }
        if(count !== 0){
            element.innerText = count;
            element.style.color = "black";
        }
    }else if(Number(element.textContent) === 91 || Number(element.textContent) === 92 || Number(element.textContent) === 93 ||
    Number(element.textContent) === 94 || Number(element.textContent) === 95 || Number(element.textContent) === 96 || Number(element.textContent) === 97 ||
    Number(element.textContent) === 98){
        let count = 0;
        if(arrayRandom.includes(Number(element.textContent) - 1)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) + 1)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) - 11)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) - 10)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) - 9)){
            count += 1;
        }
        if(count !== 0){
            element.innerText = count;
            element.style.color = "black";
        }
    }else{
        let count = 0;
        if(arrayRandom.includes(Number(element.textContent) - 1)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) + 1)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) - 11)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) - 10)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) - 9)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) + 11)){
            count += 1;
        }
        if(arrayRandom.includes(Number(element.textContent) + 10)){
            count += 1;          
        }
        if(arrayRandom.includes(Number(element.textContent) + 9)){
            count += 1;
        }
        if(count !== 0){
            element.innerText = count;
            element.style.color = "black";
        }
    }
}

const controlStart = () => { 
    if(check[0].checked === false && check[1].checked === false && check[2].checked === false){
        messaggio.innerText = "Seleziona una difficoltà."
    }else if(check[0].checked){
        messaggioInizio();
        arrayRandom = generaArrayRandom(20);
        generaTabella();
        console.log(arrayRandom);
    }else if(check[1].checked){
        messaggioInizio();
        arrayRandom = generaArrayRandom(40);
        generaTabella();
        console.log(arrayRandom);
    }else{
        messaggioInizio();
        arrayRandom = generaArrayRandom(60);
        generaTabella();
        console.log(arrayRandom);
    }
};

const occhioAllaMina = (e) => {
    if(e.target.tagName === "DIV"){
        while(!arrayControl.includes(Number(e.target.textContent))){
            arrayControl.push((Number(e.target.textContent)));
        }
        if(arrayRandom.includes(Number(e.target.textContent))){
            campo.style.display = "none";
            bomba.style.display = "block";
            sconfitta.style.display = "block";
            riprova.style.display = "block";
            divSconfitta = document.createElement("div");
            headerBottom.innerText ="Corsa finita!!!"
            divSconfitta.innerText = `Hai schivato le mine per ben ${arrayControl.length - 1} volte!`;
            sconfitta.appendChild(divSconfitta);
        }else if(arrayControl.length === 100 - arrayRandom.length){
            console.log('hai vinto');
            campo.style.display = "none";
            vittoria.style.display = "block";
            applausi.style.display = "block";
            headerBottom.innerText ="Corsa finita!!!"
            riprova.style.display = "block";
        }else{
            e.target.style.backgroundColor = "green";
            e.target.style.color = "green";
            e.target.style.cursor = "not-allowed";
            controlloMine(e.target);
        }
    }
};

// EVENTI
gioca.addEventListener("click", () => {
    controlStart();
});

campo.addEventListener("click", occhioAllaMina);

riprova.addEventListener("click", () => {
    headerTop.style.display = "flex";
    headerBottom.style.display = "none";
    campo.style.display = "none";
    bomba.style.display = "none";
    sconfitta.style.display = "none";
    riprova.style.display = "none";
    vittoria.style.display = "none";
    applausi.style.display = "none";
    arrayRandom = [];
    arrayControl = [];
    if(divSconfitta){
        divSconfitta.remove();
    }
    distruggiTabella();
});


