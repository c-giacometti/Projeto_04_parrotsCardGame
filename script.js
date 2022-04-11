// array com todos os parrots 2x
let bobross = {nome: "bobross", img:"bobrossparrot.gif", status: "fechado"}
let explody = {nome: "explody", img:"explodyparrot.gif", status: "fechado"}
let fiesta = {nome: "fiesta", img:"fiestaparrot.gif", status: "fechado"}
let metal = {nome: "metal", img:"metalparrot.gif", status: "fechado"}
let revertit = {nome: "revertit", img:"revertitparrot.gif", status: "fechado"}
let triplets = {nome: "triplets", img:"tripletsparrot.gif", status: "fechado"}
let unicorn = {nome: "unicorn", img:"unicornparrot.gif", status: "fechado"}
let bobross2 = {nome: "bobross", img:"bobrossparrot.gif", status: "fechado"}
let explody2 = {nome: "explody", img:"explodyparrot.gif", status: "fechado"}
let fiesta2 = {nome: "fiesta", img:"fiestaparrot.gif", status: "fechado"}
let metal2 = {nome: "metal", img:"metalparrot.gif", status: "fechado"}
let revertit2 = {nome: "revertit", img:"revertitparrot.gif", status: "fechado"}
let triplets2 = {nome: "triplets", img:"tripletsparrot.gif", status: "fechado"}
let unicorn2 = {nome: "unicorn", img:"unicornparrot.gif", status: "fechado"}

let baralho = [bobross, bobross2, explody, explody2, fiesta, 
              fiesta2, metal, metal2, revertit, revertit2, triplets, 
              triplets2, unicorn, unicorn2];

//define contadores
let i = 0;
let jogadas = 0;
let par = 0;

//prompt inicial
let num = prompt("Com quantas cartas você quer jogar?");

//repete o prompt até obter um numero de cartas válido
while (num < 4 || num > 14 || num % 2 !== 0){
    num = prompt("Com quantas cartas você quer jogar?");
}

//corta o baralho de acordo com o numero de cartas e embaralha
baralho = baralho.slice(0,num);
baralho.sort(comparador);

//coloca na mesa o numero de cartas pedido
let jogo = document.querySelector(".cards");

while(i < num){
    jogo.innerHTML += `<div class="card" onclick="abrir(this)">
                            <img src="Imagens/front.png"/>
                            <span>${i}</span>
                            <img class="hidden" src="Imagens/${baralho[i].img}"/>
                       </div>`;
   i++;
}


let cronometro = document.querySelector(".timer");
let pararTimer = setInterval(timer, 1000);

//embaralha
function comparador (){
    return Math.random() - 0.5;
}

// vira a carta
function abrir(elemento){

    let mostrar = elemento.querySelector(".hidden");
    mostrar.classList.remove("hidden");
    
    i = elemento.querySelector("span").innerHTML;
    baralho[i].status = "aberto";

    let esconder = elemento.querySelector("img");
    esconder.classList.add("hidden");

    jogadas++;

    definirSePar();

    return(jogadas);

}

//verifica 2 a 2 se as cartas com status "aberto" são iguais
function definirSePar(){

        let cartasAbertas = [];
    
    for(let k = 0; k < baralho.length; k++){

        if(baralho[k].status === "aberto"){
            cartasAbertas.push(baralho[k].nome);
        }

    }

    if(cartasAbertas.length > 1){

        if(cartasAbertas[0] === cartasAbertas[1]){

            for(let k = 0; k < baralho.length; k++){

                if(baralho[k].status === "aberto"){
                    baralho[k].status = "pareado";
                    par++;
                    if(par === baralho.length){
                        setTimeout(ganhou, 500);
                    }
                }

            }

            cartasAbertas.length = 0;

        } else {

            for(let k = 0; k < baralho.length; k++){

                if(baralho[k].status === "aberto"){
                    baralho[k].status = "fechado";
                }

            }

            cartasAbertas.length = 0;
            setTimeout(abertoOuFechado, 1000); //caso sejam diferentes, chama a função que fecha

        }
    }

}

//função que fecha as cartas
function abertoOuFechado(){

    jogo.innerHTML = "";
    i = 0;
    
    while(i < num){
        if(baralho[i].status === "fechado"){
            jogo.innerHTML += `<div class="card" onclick="abrir(this)">
                                <img src="Imagens/front.png"/>
                                <span>${i}</span>
                                <img class="hidden" src="Imagens/${baralho[i].img}"/>
                           </div>`;
        }
        if(baralho[i].status === "pareado"){
            jogo.innerHTML += `<div class="card" onclick="abrir(this)">
                                <img class="hidden" src="Imagens/front.png"/>
                                <span>${i}</span>
                                <img src="Imagens/${baralho[i].img}"/>
                           </div>`;
        }
       i++;
    }
}

function ganhou(){
    clearInterval(pararTimer);
    alert(`Você ganhou em ${jogadas} jogadas e ${cronometro.innerHTML} segundos!`);
    let simOuNao;

    while (simOuNao !== "sim" || simOuNao !== "não"){
        simOuNao = prompt("Gostaria de reiniciar? (sim ou não)");
        break;
    }

    if(simOuNao === "sim"){
        jogo.innerHTML = "";
        location.reload();
    } 

    if(simOuNao === "não") {
        jogo.innerHTML = "";
    }
}

function timer() {
    cronometro.innerHTML ++;
}