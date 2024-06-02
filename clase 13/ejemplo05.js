const num1 = parseInt(prompt('Ingrese el primer número'));//150
const num2 = parseInt(prompt('Ingrese el segundo número'));//89
const num3 = parseInt(prompt('Ingrese el tercer número'));//56

console.log(num1,num2,num3);


if (num1 > num2 && num1 > num3) {
    document.write(`el mayor es ${num1}`);
} else if (num2 > num3){
    document.write(`el mayor es ${num2}`);
} else {
    document.write(`el mayor es ${num3}`);
}