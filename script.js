const flashcards = [
  {
    pergunta: "O que é HTML?",
    resposta: "HTML é a linguagem usada para estruturar uma página web."
  },
  {
    pergunta: "Para que serve o CSS?",
    resposta: "O CSS é usado para definir a aparência e o estilo da página."
  },
  {
    pergunta: "O que é JavaScript?",
    resposta: "É uma linguagem usada para adicionar interatividade às páginas."
  },
  {
    pergunta: "O que faz a propriedade padding?",
    resposta: "Cria espaço interno dentro de um elemento."
  },
  {
    pergunta: "O que faz a propriedade margin?",
    resposta: "Cria espaço externo ao redor de um elemento."
  },
  {
    pergunta: "Para que serve uma class no HTML?",
    resposta: "Serve para identificar elementos e aplicar estilos neles."
  }
];

let indice = 0;
let virado = false;

const cartao = document.getElementById("cartao");
const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const contador = document.getElementById("contador");
const botaoVirar = document.getElementById("botaoVirar");
const botaoProximo = document.getElementById("botaoProximo");

function atualizarCartao() {
  pergunta.textContent = flashcards[indice].pergunta;
  resposta.textContent = flashcards[indice].resposta;
  contador.textContent = `${indice + 1} / ${flashcards.length}`;

  cartao.classList.remove("virado");
  virado = false;
  botaoVirar.textContent = "Mostrar resposta";
}

function virarCartao() {
  virado = !virado;
  cartao.classList.toggle("virado");

  if (virado) {
    botaoVirar.textContent = "Mostrar pergunta";
  } else {
    botaoVirar.textContent = "Mostrar resposta";
  }
}

function proximoCartao() {
  indice++;

  if (indice >= flashcards.length) {
    indice = 0;
  }

  atualizarCartao();
}

cartao.addEventListener("click", virarCartao);
botaoVirar.addEventListener("click", virarCartao);
botaoProximo.addEventListener("click", proximoCartao);

atualizarCartao();
