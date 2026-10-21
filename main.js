const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: "Acredito que a educação é a chave para transformar vidas. Busco aprender continuamente, desenvolver novas habilidades e compartilhar conhecimento para construir um futuro melhor."
      },
      {
        texto: "Saúde.",
        afirmacao: "Meu corpo merece amor, cuidado e respeito. Todos os dias, cultivo hábitos saudáveis, pensamentos positivos e equilíbrio. Eu me permito viver com mais saúde, paz e bem-estar."

      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "nvestindo em infraestrutura, inovação e tecnologia para construir um futuro mais sólido, eficiente e sustentável, com soluções inteligentes e visão de longo prazo."
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "Criando campanhas de conscientização para promover a educação, incentivar mudanças positivas e construir uma sociedade mais informada, consciente e sustentável."
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: “Uma cidade limpa começa com a consciência de cada cidadão: não jogue lixo na rua, cuide do meio ambiente e faça parte da mudança!”
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: ♻️ “Investir em reciclagem é investir em um futuro sustentável, reduzir a poluição e transformar resíduos em novas oportunidades para o planeta.” 
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: " Melhorar o transporte público.",
        afirmacao: “Investir na melhoria do transporte público é essencial para garantir viagens mais rápidas, confortáveis e acessíveis, reduzir o trânsito e construir cidades mais sustentáveis para todos.” 
      },
      {
        texto: "Construir novas vias.",
        afirmacao: “Construir novas vias e melhorar as estradas é essencial para reduzir congestionamentos, facilitar a mobilidade urbana e garantir um trânsito mais seguro e eficiente para todos.”
      }
    ]

  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: " A cidade ficou mais sustentável.",
        afirmacao: “Após quatro anos de investimentos e conscientização, a cidade tornou-se mais sustentável, com ruas mais limpas, mais reciclagem, transporte público melhor e uma infraestrutura preparada para o futuro.” 
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "A cidade cresceu economicamente, mas ainda precisa investir em sustentabilidade e preservação ambiental."

      }
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual>= perguntas.length){
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2030 ...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}


mostraPergunta();
