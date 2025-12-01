


















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



/* ----- Funcion witch-------

*/
/**
 * Switch case con el patrón "single Entry, Single Exit"
 * @param {*} role 
 * @returns 
 */

const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevel("editor") ); // Acceso para editar contenido




/* Refactorizar la función getWeather usando switch-case
*/

const getWeatherSwitch = (codigo) =>{
     let message;
    switch (codigo) {
        case "0" :
         message ="Clear Sky";
         break;
        case "1" :
        case "2" :
        case "3" :
         message = "Mainly clear, partly cloudy, and overcast";
         break;
        case "45" :
        case "48" :
         message = "Fog and depositing rime fog";
         break;
         default:
            message = "no definido";
    }
    return message;
}
    
console.log( getWeatherSwitch ("45") );


/* 
Dado un número entero, imprimir:

 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 */
function clasificarNumeroIfElse(numero) {
    if (numero < 0) {
      return "Negativo";
    } else if (numero === 0) {
      return "Cero";
    } else if (numero > 0 && numero < 100) {
      return "Positivo";
    } else {
      return "Grande";
    }
  }
  
  console.log(clasificarNumeroIfElse(-5));   // Negativo
  console.log(clasificarNumeroIfElse(0));    // Cero
  console.log(clasificarNumeroIfElse(50));   // Positivo
  console.log(clasificarNumeroIfElse(100));  // Grande

  // ----- Function Switch ----------
function evaluarElNumeroSwitch(numero) {

    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};

console.log(evaluarElNumeroSwitch(-45) ); // Negativo
console.log(evaluarElNumeroSwitch(0) ); // Cero
console.log(evaluarElNumeroSwitch(45) ); // Positivo
console.log(evaluarElNumeroSwitch(100) ); // Grande

// ------------------------------ Operador ternario----------------
/*
Es el único operadr de JavaScript que tiene 3 operadores.
Generalmente se utiliza como opción a la sentencia if-else.

Sintaxis:
condición ? expresiónSiCondiciónEsVerdadera : espresiónSiCondiciónFalsa

*/


const votingEligibility = (age) => {
    return age >= 18 ? "Puede votar" : "No puede votar"
}

console.log (votingEligibility(20)); // Puede votar
console.log (votingEligibility(16)); // No puede votar

/*
 Realizar una función que reciba un número y retorne
 "Par" si el número es par o "Impar" si el número es impar.
 Usar el operador ternario.
*/

const tipoDeNumero = (numero) => {
    return numero % 2 ===0   ? "Par" : "Impar"
}

console.log (tipoDeNumero (56));
console.log (tipoDeNumero (13));


    