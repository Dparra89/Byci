const boton2 = document.getElementById('boton'); //boton2 es la variable

boton2.addEventListener('click',function(e){
    alert(e.currentTarget.innerText);
})