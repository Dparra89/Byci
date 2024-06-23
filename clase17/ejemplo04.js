const frutas = ['palta', 'sandia', 'banana', 'manzana'];

//console.log(frutas)
console.log(frutas.sort())

const frutasordenadas = frutas.sort();

console.log(frutasordenadas); //a la z

const frutasordenadasreves = frutas.sort().reverse();

console.log(frutasordenadasreves); //z a la 

const numeros = [56, 34, 78, 3, 23, 5];

//console.log(`num de menor a mayor ` + numeros.sort());

const numerosordenados = numeros.sort(function (a,b) {
    return a - b
})

console.log(numerosordenados);//de menor a mayor

const numerosordenadosreves = numeros.sort(function (a,b) {
    return b - a
})

console.log(numerosordenadosreves);//de mayor a menor