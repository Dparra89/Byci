const frutas =['manzana', 'bananas', 'palta', 'pera'];

console.log(frutas);
// document.write(frutas);
console.log(frutas[1]);

/*objetivo es que imprima tenemos manzanas ...tenemos bananas */

for(let i = 0; i< frutas.length; i++){
    console.log('Tenemos ' + frutas[i]);
    document.write('tenemos' + frutas[i] + "</br>");
    }
