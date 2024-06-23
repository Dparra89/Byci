function ocultarMensaje(){

    const mensaje = document.getElementById('mensaje');
    mensaje.style.display = 'none'
}
//ocultarMensaje()
setTimeout(ocultarMensaje,5000);
//5000 > 5 segundos
//se ejecuta solo una vez