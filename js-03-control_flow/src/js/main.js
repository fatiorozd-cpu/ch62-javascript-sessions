


















let isActive = true;

if (isActive === true) console.log("El usuario está activo");

// Bloque de código:
// Conjunto de sntencias agrupadas entre las llaves {...}
{
    let firtsName = "Juan";
    let lastName = "Perez";
    var alias = "Juampi";
    let age = 28;
   
    console.log(firtsName,lastName,alias); // Juan Perez Juampi
    { //Bloque anidado
      let firtsName = "Sergio";
      let lastName = "Torres";
      var alias = "Serch";
      var alias = "Serchmo";       
     console.log(firtsName,lastName,alias, age); // Sergio Torres Serch 28
     
    }
    console.log(firtsName,lastName,alias, age); // Juan Perez Serchmo 28
    
}
//console.log(firtsName,lastName,alias, age); // firtsName is not defined
console.log(alias); // Serchmo

/*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".
 Imprimir el valor del retorno por consola.
*/

let temperatura = (a) => { 
    if (a > 25) {return "Hace calor";}
    else {  return "hace frío";}
     
    }

console.log(`El dia de hoy: ${temperatura(20)}`);

/*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code   Description
    0           Clear sky
    1, 2, 3     Mainly clear, partly cloudy, and overcast
    45, 48      Fog and depositing rime fog
    
*/
const weatherCode = (codigo) => {
    let message = "";
    if (codigo == 0 ){
        message = "Clear sky";
    } else if (codigo == 1 && codigo == 2 && codigo ==3 ) {
        message = "Mainly clear, partly cloudy, and overcast";
    } else if ( codigo == 45 && codigo == 48){
        message = "Fog and depositing rime fog";
    }
    return message ;

    }
console.log(weatherCode(1));


