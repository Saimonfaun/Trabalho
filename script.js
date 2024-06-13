const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { enunciado: "Você conhece todas as lendas do folclore brasileiro?", alternativas: ["Sim", "Não sei"] },
    { enunciado: "Deseja conhecer", alternativas: ["Sim", "Não"] },
    { enunciado: "Aqui estão algumas referências. Agora que você sabe, deseja continuar?", alternativas: ["Sim", "Não"] },
    { enunciado: "A cuca vai te pegar!!", alternativas: ["0","0"] },
    { enunciado: "É uma pena ", alternativas: ["0","0"] },
    { enunciado: "Tem certeza?", alternativas: ["Não", "Sim"] },
    { enunciado: "Dentre essas lendas, quais você prefere?", alternativas: ["CUCA", "SACI", "BOI TATÁ"] },
    { enunciado: "Aponte a principal característica do Saci", alternativas: ["Tem uma só perna", "Sequestra crianças, cobra de fogo com inúmeros olhos"] },
    { enunciado: "Aponte a principal característica do Boi Tatá", alternativas: ["Tem uma só perna", "Sequestra crianças, cobra de fogo com inúmeros olhos"] },
    { enunciado: "Aponte a principal característica da cuca", alternativas: ["Tem uma só perna", "Sequestra crianças, cobra de fogo com inúmeros olhos"] },
    { enunciado: "Parabéns, você acertou! Deseja continuar?", alternativas: ["Sim", "Não"] },
    { enunciado: "Uma pena, você errou. Deseja continuar?", alternativas: ["Sim", "Não"] },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);

    }
}
mostraPergunta();
