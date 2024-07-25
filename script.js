const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { enunciado: "Você conhece todas as lendas do folclore brasileiro?", alternativas:[ {texto:"sim",afirmacao:"s"},{texto:"não",afirmacao:"n"} ]},
    { enunciado: "Deseja conhecer?",  alternativas:[ {texto:"sim",afirmacao:"s"},{texto:"não",afirmacao:"n"} ] },
    { enunciado: "Aqui estão algumas referências.https://www.todamateria.com.br/folclore-brasileiro/ (copie o link e coloque na url) Agora que você sabe, deseja continuar?",  alternativas:[ {texto:"sim",afirmacao:"s"},{texto:"não",afirmacao:"n"} ] },
    { enunciado: "A cuca vai te pegar!!! ",alternativas:[ {texto:"voltar",afirmacao:"v"}]},
    { enunciado: "Tem certeza?",  alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ] }, 
    { enunciado: "Dentre essas lendas, quais você prefere?",alternativas:[ {texto:"CUCA",afirmacao:"c"},{texto:"SACI",afirmacao:"S"},{texto:"BOI TATÁ",afirmacao:"B"} ] },
    { enunciado: "Aponte a principal característica do Saci",alternativas:[ {texto:"Tem uma só perna",afirmacao:1},{texto:"Sequestra crianças",afirmacao:2},{texto:"cobra de fogo com inúmeros olhos",afirmacao:3}]},
    { enunciado: "Aponte a principal característica do Boi Tatá",alternativas:[ {texto:"Tem uma só perna",afirmacao:1},{texto:"Sequestra crianças",afirmacao:2},{texto:"cobra de fogo com inúmeros olhos,",afirmacao:3} ] },
    { enunciado: "Aponte a principal característica da cuca",alternativas:[ {texto:"Tem uma só perna",afirmacao:1},{texto:"Sequestra crianças",afirmacao:2},{texto:"cobra de fogo com inúmeros olhos,",afirmacao:3} ] },
    { enunciado: "Parabéns, você acertou! Deseja refazer?", alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ] },
    { enunciado: "Uma pena, você errou. Deseja refazer?",alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ] },
    
];

let atual = 0;
let perguntaAtual;


function mostraPergunta() {
    if (atual >= perguntas.length) {
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    let afirmacoes = opcaoSelecionada.afirmacao;

    if (atual === 0 && afirmacoes === "s"||atual===2 && afirmacoes==="s") {
        atual = 5;
    } else if (atual === 1 && afirmacoes === "n") {
        atual = 3;
    } else if (atual === 3 && afirmacoes === "v"){
        atual = 0;
    }else if(atual ===5 && afirmacoes === "c"){
        atual = 8;
    }else if(atual ===5 && afirmacoes === "S" ){
        atual = 6;
    } else if(atual===5 && afirmacoes === "B" ){
        atual = 7;
    }else if(atual===6 && afirmacoes === 1 ){
        atual= 9;
    }else if(atual ===6 && afirmacoes=== 2 || atual===6 && afirmacoes===3){
        atual=10;
    }else if(atual===7 && afirmacoes === 3){
        atual= 9;
    }else if(atual ===6 && afirmacoes=== 1 || atual===6 && afirmacoes===2){
        atual=10;
    }else if(atual===8 && afirmacoes === 2){
        atual= 9;
    }else if(atual ===8 && afirmacoes=== 1 || atual===6 && afirmacoes===3){
        atual=10;
    }else if (atual===9 && afirmacoes ===1){
        atual=5;
    }else if(atual ===9 && afirmacoes ===2){
        atual=3;
    }else if(atual===10 && afirmacoes ===1){
        atual=5;
    }else if(atual===10 && afirmacoes ===2){
        atual=3;
    }else {
        atual++;
    }
    
    mostraPergunta();
}





mostraPergunta();
