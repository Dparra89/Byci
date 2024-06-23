//let now = new Date();
//alert(now);

//const dia = new Date();
//const hours = dia.getHours();

//console.log(hours);

const nombre = prompt ('Escribir tu nombre', '');

const today = new Date();

const hrs = today.getHours();

if(hrs >= 6 && hrs <12){
    document.write('Buenos días ' + nombre + '!!')
    console.log(`Buenos días ${nombre} !!`)
    } else if(hrs >=12 && hrs <=19){
        document.write('Buenas tardes ' + nombre + '!!')
        console.log(`Buenas tardes ${nombre} !!`)    
    } else {
    document.write('Buenas noches ' + nombre + '!!')
    console.log(`Buenas noches ${nombre} !!`)
    }

