const elementos = {
    caixaPrincipal: document.querySelector(".caixa-principal"),
    caixaPerguntas: document.querySelector(".caixa-perguntas"),
    caixaAlternativas: document.querySelector(".caixa-alternativas"),
    caixaResultado: document.querySelector(".caixa-resultado"),
    textoResultado: document.querySelector(".texto-resultado"),
};

const perguntas = [
    { enunciado: "Você conhece todas as lendas do folclore brasileiro?", alternativas: [{ texto: "sim", afirmacao: "s" }, { texto: "não", afirmacao: "n" }] },
    { enunciado: "Deseja conhecer?",  alternativas: [{ texto: "sim", afirmacao: "s" }, { texto: "não", afirmacao: "n" }] },
    { enunciado: "Aqui estão algumas referências.https://www.todamateria.com.br/folclore-brasileiro/ (copie o link e coloque na url) Agora que você sabe, deseja continuar?",  alternativas: [{ texto: "sim", afirmacao: "s" }, { texto: "não", afirmacao: "n" }] },
    { enunciado: "A cuca vai te pegar!!! ", alternativas: [{ texto: "voltar", afirmacao: "v" }] },
    { enunciado: "Tem certeza?",  alternativas: [{ texto: "sim", afirmacao: 1 }, { texto: "não", afirmacao: 2 }] },
    { enunciado: "Dentre essas lendas, quais você prefere?", alternativas: [{ texto: "CUCA", afirmacao: "c" }, { texto: "SACI", afirmacao: "S" }, { texto: "BOI TATÁ", afirmacao: "B" }] },
    { enunciado: "Aponte a principal característica do Saci", alternativas: [{ texto: "Tem uma só perna", afirmacao: 1 }, { texto: "Sequestra crianças", afirmacao: 2 }, { texto: "cobra de fogo com inúmeros olhos", afirmacao: 3 }] },
    { enunciado: "Aponte a principal característica do Boi Tatá", alternativas: [{ texto: "Tem uma só perna", afirmacao: 1 }, { texto: "Sequestra crianças", afirmacao: 2 }, { texto: "cobra de fogo com inúmeros olhos,", afirmacao: 3 }] },
    { enunciado: "Aponte a principal característica da cuca", alternativas: [{ texto: "Tem uma só perna", afirmacao: 1 }, { texto: "Sequestra crianças", afirmacao: 2 }, { texto: "cobra de fogo com inúmeros olhos,", afirmacao: 3 }] },
    { enunciado: "Parabéns, você acertou! Deseja refazer?", alternativas: [{ texto: "sim", afirmacao: 1 }, { texto: "não", afirmacao: 2 }] },
    { enunciado: "Uma pena, você errou. Deseja refazer?", alternativas: [{ texto: "sim", afirmacao: 1 }, { texto: "não", afirmacao: 2 }] },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        return;
    }
    perguntaAtual = perguntas[atual];
    elementos.caixaPerguntas.textContent = perguntaAtual.enunciado;
    elementos.caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    perguntaAtual.alternativas.forEach((alternativa) => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        elementos.caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;

    switch (atual) {
        case 0:
        case 2:
            if (afirmacao === "s") atual = 5;
            break;
        case 1:
            if (afirmacao === "n") atual = 3;
            break;
        case 3:
            if (afirmacao === "v") atual = 0;
            break;
        case 5:
            if (afirmacao === "c") atual = 8;
            else if (afirmacao === "S") atual = 6;
            else if (afirmacao === "B") atual = 7;
            break;
        case 6:
            if (afirmacao === 1) atual = 9;
            else if (afirmacao === 2 || afirmacao === 3) atual = 10;
            break;
        case 7:
            if (afirmacao === 3) atual = 9;
            else if (afirmacao === 1 || afirmacao === 2) atual = 10;
            break;
        case 8:
            if (afirmacao === 2) atual = 9;
            else if (afirmacao === 1 || afirmacao === 3) atual = 10;
            break;
        case 9:
        case 10:
            if (afirmacao === 1) atual = 5;
            else if (afirmacao === 2) atual = 3;
            break;
        default:
            atual++;
            break;
    }
    
    mostraPergunta();
}

mostraPergunta();
