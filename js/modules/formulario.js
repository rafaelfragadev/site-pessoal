export default function initFormulario(){
const formulario = document.querySelector('form');

function formularioEnviado(resposta){
  if(resposta.ok) {
    formulario.innerHTML = '<p class="font-1-p cor-4" style="padding: 2rem; grid-column: 1 / -1; border-radius: 4px; background: var(--cor-0);"><span class="cor-p3 font-3-t">Mensagem enviada,</span><br>em breve entrarei em contato. Geralmente respondo em até 24 horas.</p>';
  } else {
    formulario.innerHTML = '<p class="font-1-p cor-4" style="padding: 2rem; grid-column: 1 / -1; border-radius: 4px; background: var(--cor-0);"><span class="cor-p1 font-3-t">Erro no envio,</span><br>você pode enviar diretamente para o nosso e-mail em: contato@rafaelfragawebdesigner.com.br</p>';
  }
}
function enviarFormulario(event){
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disable = true;
  botao.innerText = 'Enviando...';

  const data = new FormData(formulario);
  fetch('./enviar.php', {
    method: 'POST',
    body: data,
  }).then(formularioEnviado);

}

formulario.addEventListener('submit', enviarFormulario);
}

