$(document).ready(function(){ //cuando esta preparando el documento
    $window = $(window);//como llama jquery al elemento

    $('#intro').heigth($window.height());//intro es la 1 img > alto
    $window.scroll(function(){ //tengo en cuenta el movim del scroll de los otros 3 div con la clase background > each es por cada elemento
        $('div.background').each(function(index, item){
            const $scroll = $(item);
            const yPos = -($window.scrollTop()/$scroll.data('speed'));//eje coordenadas - es para arriba . y la segun la veloci declarada se va moviendo
            const coords = '50%' + yPos + 'px'; //x > 50% y posic y sale dinamicamente segun valor / velocidad (data-speed)
            $scroll.css({backgroundPosition: coords});//se lo aplico por css

        })//fin de la tercera función

        

    }) //fin de la segunda función
}) //fin de la función
