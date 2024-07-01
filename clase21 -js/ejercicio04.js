const texto = document.getElementById('texto');
const contar = document.getElementById('contar');

//se activa cuando se suelta la tecla
texto.addEventListener('keyup',function(){ 
    contar.innerText = texto.value.length;
}) 