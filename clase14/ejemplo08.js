function validarForm(){
    const nombreValido = true;
    const passWordValido = validarLargo(document.form.text1.value, 5);

const resultado = nombreValido && passWordValido;
if(resultado){
    alert ('ES VALIDO')
} else{
    alert('NOOO ES VALIDO')
}
}


function validarLargo(texto, largoRequerido){
    return texto.length >= largoRequerido
}