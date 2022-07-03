export default function initWritingEffect(){
  const titulo = document.querySelector('h1.writing');
  function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 120 * i)
    });
}
typeWriter(titulo);
}


