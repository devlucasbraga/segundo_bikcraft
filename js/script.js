// Ativar links da pagina sempre selecionado.
const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLinks);

// Ativar itens do orçamento
const parametro = new URLSearchParams(location.search);

function ativarParametros(parametros) {
  const elemento = document.getElementById(parametros);
  if (elemento) {
    elemento.checked = true;
  }
}
parametro.forEach(ativarParametros);

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button ");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("area-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-controls", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagem img ");
const galeriaContainer = document.querySelector(".bicicleta-imagem");

function trocaImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocaImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
