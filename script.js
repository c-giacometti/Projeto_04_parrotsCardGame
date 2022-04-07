// array com todos os parrots 2x
let baralho = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", 
"explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif",
"metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif",
"tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"];

//define contador
let i = 0;

//prompt inicial
let num = prompt("Com quantas cartas você quer jogar?");

//repete o prompt até obter um numero de cartas válido
while (num < 4 || num > 14 || num % 2 !== 0){
    num = prompt("Com quantas cartas você quer jogar?");
}

//corta o baralho de acordo com o numero de cartas e embaralha
baralho = baralho.slice(0,num);
baralho.sort(comparador);

let jogo = document.querySelector(".cards");

while(i < num){
    jogo.innerHTML += `<div class="card">
                            <img class="notHidden" src="Imagens/front.png"/>
                            <img class="hidden" src="Imagens/${baralho[i]}"/>
                       </div>`;
   i++;
}

function comparador (){
    return Math.random() - 0.5;
}



