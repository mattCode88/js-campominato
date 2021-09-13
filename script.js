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
let arrayRandom = [];
let arrayControl = [];

// FUNZIONI
const randomNumber = () => Math.floor(Math.random() * 20);

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
    for(let i = 0; i < 20; i++){
        div = document.createElement("div");
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

const controlStart = () => { 
    if(check[0].checked === false && check[1].checked === false && check[2].checked === false){
        console.log("seleziona");
        messaggio.innerText = "Seleziona una difficoltà."
    }else if(check[0].checked){
        messaggioInizio();
        arrayRandom = generaArrayRandom(2);
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
            divSconfitta.innerText = `Hai schivato le mine per ben ${arrayControl.length - 1} volte!`;
            sconfitta.appendChild(divSconfitta);
        }else if(arrayControl.length === 20 - arrayRandom.length){
            console.log('hai vinto');
            campo.style.display = "none";
            vittoria.style.display = "block";
            applausi.style.display = "block";
            riprova.style.display = "block";
        }else{
            e.target.style.backgroundColor = "green";
            e.target.style.color = "green";
            e.target.style.cursor = "not-allowed";
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


