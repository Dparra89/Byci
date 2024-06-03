const nombre = prompt('Ingrese su nombre','');
const nota = parseInt(prompt('Ingrese su nota',''));

if(Number.isNaN(nota)){
    document.write(`La nota ingresada no es válida`)
} else if (nota>=4){
    document.write(`${nombre} estas aprobade con un ${nota}`);
    console.log(`${nombre} estas aprobade con un ${nota}`);
} else {
    document.write(`${nombre} estas desaprobade con un ${nota}`);
    console.log(`${nombre} estas desaprobade con un ${nota}`)
}