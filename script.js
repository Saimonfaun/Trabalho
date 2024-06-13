const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { enunciado: "Você conhece todas as lendas do folclore brasileiro?", alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ]},
    { enunciado: "Deseja conhecer",  alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ] },
    { enunciado: "Aqui estão algumas referências. Agora que você sabe, deseja continuar?",  alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ] },
    { enunciado: "É uma pena ",alternativas:[ {texto:"voltar",afirmacao:1}]},
    { enunciado: "Tem certeza?",  alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ] }, 
    { enunciado: "Dentre essas lendas, quais você prefere?",alternativas:[ {texto:"CUCA",afirmacao:1},{texto:"SACI",afirmacao:2},{texto:"BOI TATÁ",afirmacao:3} ] },
    { enunciado: "Aponte a principal característica do Saci",alternativas:[ {texto:"Tem uma só perna",afirmacao:1},{texto:"Sequestra crianças",afirmacao:2},{texto:"cobra de fogo com inúmeros olhos",afirmacao:3}]},
    { enunciado: "Aponte a principal característica do Boi Tatá",alternativas:[ {texto:"Tem uma só perna",afirmacao:1},{texto:"Sequestra crianças",afirmacao:2},{texto:"cobra de fogo com inúmeros olhos,",afirmacao:3} ] },
    { enunciado: "Aponte a principal característica da cuca",alternativas:[ {texto:"Tem uma só perna",afirmacao:1},{texto:"Sequestra crianças",afirmacao:2},{texto:"cobra de fogo com inúmeros olhos,",afirmacao:3} ] },
    { enunciado: "Parabéns, você acertou! Deseja continuar?", alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ] },
    { enunciado: "Uma pena, você errou. Deseja continuar?",alternativas:[ {texto:"sim",afirmacao:1},{texto:"não",afirmacao:2} ] },
];

let atual = 0;
let perguntaAtual;


function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
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
    atual++;

    if (atual === 1 && afirmacoes === 1) {
        atual = 5;
    } 
    if (atual === 2 && afirmacoes === 2) {
        atual = 3;
    } 
    
    mostraPergunta();
}



mostraPergunta();
