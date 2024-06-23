function allParrafo(){
    
    const all = document.getElementsByTagName('p');
    console.log(all)

    const num = all.length;

    console.log(num)

    alert(`Hay ${num} elementos p dentro de este documento`)

}

//allParrafo();


function caja1P(){

    const caja1 = document.getElementById('caja1');
    console.log(caja1) //caja con el borde azul

    const caja1p= caja1.getElementsByTagName('p');
    console.log(caja1p)//las p dentro de la caja borde azul

    const num = caja1p.length;
    console.log(num);//5

    alert(`Hay ${num} elementos p dentro de la caja 1`)

}

caja1P();

function caja2P(){

    const caja2 = document.getElementById('caja2');
    console.log(caja2) //caja con el borde rojo

    const caja2p= caja2.getElementsByTagName('p');
    console.log(caja2p)//las p dentro de la caja borde azul

    const num = caja2p.length;
    console.log(num);//5

    alert(`Hay ${num} elementos p dentro de la caja 2`)

}

caja2P();
