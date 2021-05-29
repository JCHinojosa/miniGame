 let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
    // una funcion flecha que arroja el numero aleatorio.
    //usamos math random para generar el numero aleatorio.
    //usamos size para que sea de los 400 que mide la imagen que ya definimos.
    //todo detro de math.flor para qu el numero que arroje no sea decimal - 
    //si no entero ya que randon() arroja numeros decimales,-
    //funciona de un decimal entre 0 y 1 y lo multiplica por size
    //y arroja el numero entero con floor.
 }

 let getDistance = (e, target) => { //la funcion recibe como parametro el evento que en este caso es un click y el target que es donde se encuentra el tesoro.
     let diffX = e.offsetX - target.x ;//creamos variable dif.x igualamos al evento.en el ejex y le restamos la ubicacion del tesoro en x.
     let diffY = e.offsetY - target.y ;//igual que en x es para y .
     return Math.sqrt((diffX * diffX) + (diffY * diffY));//teorema de pitagoras para la distancia del click respecto a la ubicacion del tesoro.
     //offset XY ya lo da javascript recordar que es con mayuscula.
 }

 let getDistanceint = distance => { //declaramos una variable y la igualamos a el numero entero que recibimos de getDistance.
     if(distance < 30){
         return "Hirviendo";    // aqui trabajamos los diferentes casos y regremos una frase para que el usuario se ubique y sepa que tan lejos o cerca esta.
     }else if(distance < 40){
         return "Muy Caliente"; // todo con if y else sencillo.
     }else if (distance < 60){
         return "Caliente";
     }else if (distance < 100){
         return "Tibio";
     }else if (distance < 180){
         return " Frio";
     }else if (distance < 360){
         return " Muy Frio";
     }else {
         return "Congelado";
     }
 }