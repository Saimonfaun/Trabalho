const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {enunciado: "Você conhece todas as lendas do folclore brasileiro?",alternativas: ["Sim","Não sei"]},
    {enunciado: "Deseja conhecer",alternativas: ["Sim","Não"]},
    {enunciado: "Aqui está algumas referências https://mundoeducacao.uol.com.br/folclore/lendas-e-personagens-do-folclore-brasileiro.htm#:~:text=Algumas%20importantes%20lendas%20e%20personagens,de%20ouro%2C%20guaran%C3%A1%20e%20mandioca."+"Agora que você sabe deseja continuar? ",alternativas: ["Sim","Não"]},
    {enunciado: "A cuca vai te pegar!!",alternativas: [""]},
    {enunciado: "É uma pena ",alternativas: [""]},
    {enunciado: "Tem certeza?",alternativas: ["Não","Sim"]},
    {enunciado: "Dentre dessas lendas quais você prefere?",alternativas: ["CUCA","SACI","BOI TATÁ"]},
    {enunciado: "Aponte a principal caracteristica do Saci",alternativas: ["Tem uma só perna","Sequestra crianças,cobra de fogo com inúmeros olhos"]},
    {enunciado: "Aponte a principal caracteristica do Boi Tatá",alternativas: ["Tem uma só perna","Sequestra crianças,cobra de fogo com inúmeros olhos"]},
    {enunciado: "Aponte a principal caracteristica da cuca",alternativas: ["Tem uma só perna","Sequestra crianças,cobra de fogo com inúmeros olhos"]},
    {enunciado: "Parabéns você acertou deseja continuar?",alternativas: ["Sim","Não"]},
    {enunciado: "Uma pena você errou deseja continuar?",alternativas: ["Sim","Não"]},
                ];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();               
