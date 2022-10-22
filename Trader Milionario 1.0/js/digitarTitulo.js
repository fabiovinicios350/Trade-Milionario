function escrever(elemento){
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout(function() {
      elemento.innerHTML += letra;
    }, 120*i);	
  });
}
const titulo = document.getElementById('titulo');
escrever(titulo);