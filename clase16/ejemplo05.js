const alternar = document.getElementsByClassName('alternar')[0];

//console.log(alternar);
alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo');
})

//por qué aca usamos la e?

//classList: representa una lista de clase asignadas a un elemento en este caso: alternar y activo.
//la clase activo esta declarado en el css
//toggle: nos permite "prender" o apagar una clase del objeto .cambio
//classList: add, remove. 