var metros = prompt("Ingrese los metros");

if(metros >= 0 && metros <=100000){
    if(metros >=0 && metros <=1000){
        alert("el transporte adecuado es: a pie");
    } else if (metros >=1000 && metros <=10000){
        alert("el transporte adecuado es: la bicicleta");
    }
}