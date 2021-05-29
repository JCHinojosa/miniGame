//archivo principal del juego

const WIDTH = 400;
const HEIGH = 400;

let target = { // declaramos target creamos las propiedes de xy.
    x : getRandomNumber(WIDTH), //llamamos la funcion getRandomNumber y recibe como parametro el tamaño declarado arriba
    y : getRandomNumber(HEIGH)
};
console.log(target); //aqui mostramos en consola la posicion generada del tesoro.

let $map = document.getElementById('map'); //guardamos en una variable $map se usa el signo dolar para referirse a un elemento HTML y se obtiene el elemento con el id map con getelemntById.
let $distance = document.getElementById('distance');
let click = 0;

$map.addEventListener('click', function (e){
console.log('click works');
click++;

    let distance = getDistance(e, target);
    console.log(distance + " distancia del tesoro");

    let distanceInt = getDistanceint(distance);
    console.log(distanceInt + " is working");

    $distance.innerHTML = distanceInt;

    if (distance < 15){
        alert("Encontraste el Tesoro, perra !"+ " en " + click + " clicks." );
        location.reload();
    }

});

