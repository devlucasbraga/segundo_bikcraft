const formulario = document.querySelector(".form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      " <p class='fonte-1-m' style='grid-column: 1/-1; padding:1rem; borde-radius: 1px; background: #f7f7f7;' ><span style='colo:#317a00'; > Menssagem enviada com sucesso</span>, Em breve entraremos em contato. </p>";
  } else {
    formulario.innerHTML =
      " <p  class='fonte-1-m' style='grid-column: 1/-1; padding:1rem; borde-radius: 1px; background: #f7f7f7;'><span style='color:#E00000'; > Erro no envio </span>, você pode enviar para o nosso contato diretamento no: contato@bikcraft.com.br </p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector(".form .botao");
  botao.disabled = true;
  botao.innerHTML = "Enviando...";

  const data = new FormData(formulario);
  console.log(data.get("email"));

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
