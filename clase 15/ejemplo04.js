const items = document.getElementsByClassName('item');

console.log(items)

function cambiarVisibilidad(numItem){

    const item = items[numItem];

    if(item.style.visibility == ''){
        item.style.visibility = 'hidden';
    } else{
        item.style.visibility = '';
    }
}

cambiarVisibilidad(2);

function cambiarDisplay (numItem)
{
    const item = items [numItem];

    if (item.style.display == ''){
        item.style.display = 'none';
    } else{
        item.style.display = '';
    }
}