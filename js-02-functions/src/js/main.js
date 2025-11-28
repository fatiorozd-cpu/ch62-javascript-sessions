/*
------Funciones expresadas-----
Son funciones  declarasd dentro de la asignación de una variables.
Estas  funciones pueden ser anónimas ( no tienen nombre).
Las funciones expresadas no tienen hoisting, porque no se
crga en memoria hasta que se utilice.

sintaxis:
const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
        }
 */ 


/** esto es un comentario de funcion      
 *Función que recibe nombre y apellido y retorna el nombre completo
 *@param {string} firstName nombre de la persona
 *@param {string} lastName apellido de la persona
 *@returns concatenación del nombre y apellido de la persona en la cohorte Ch62
 */
const printFullName = function (firstName, lastName){
    return `${firstName} ${lastName} estudiante de la ch62`;
    
};

console.log( printFullName("Johan","Gonzalez"));

/*
------------ Funciones flecha -----------------------
(arrow functions)
Funciones similares a las funciones expresadas pero:
- No requiere la palabra reservada function
- Si tiene una sola instrucción no requiere las llaves {}
- Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
const nombreVariable = (parametros) => instrucción;
Con una instruccion no se necesita utilizar llaves ni return, tembién se puede ometir los corchetes si se tiene un parámetro.
const nombreVariable = (parametros) => {
    instrucción;
    return expresión;
    }
    */
   
   // Convertir la funcion printFullName a función flecha
   
   const NombreCompleto = (primerNombre, primerApellido) => `${primerNombre} ${primerApellido} estudiante de la ch62`;


/*
------------ Parámetros por defecto -----------------------
(default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
*/
const makeCoffe = ( type = "Americano" ) => `Preparando un café ${type}`;
console.log( makeCoffe("Latte") ); // Preparando un café Latte
console.log (makeCoffe()); // Preparando un café Americano

// TODO: generar una función que calcule el área de un rectángulo
// usando parámetros por defecto para largo y ancho.


const areaRectangulo = (base,altura) => (base*altura);
console.log(`El area del rectangulo es:${areaRectangulo (9,3)}`);

// Ejemplo de uno de default parameters
console.log
console.log


/*
  Pase de datos:
    - Por valor: Se crea una copia independiente del dato. 
      Si modificas la copia, el original NO cambia.
    - Por referencia: Se pasa la dirección de memoria (referencia), 
      no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
 */


/*
---------Funciones de Callbakc------
Es una función (definida, expresada, arrow, anónima) que se pasa
a otra función como argumento.
Se pasa en el argumento como referencia (sin oarentesis).
*/

// Mal diseño: Cada vez que quieras una operación nueva, modificas esta función.
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtract") return a - b;
    // Si quiero dividir, tengo que editar este archivo y agregar otro if...
};
console.log( calculateBad(5, 3, "sum") ); // 8
console.log( calculateBad(5, 3, "subtract") ); // 2

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};

// console.log(`Usando incorrectamente la función: ${calculate( 5, 3, "sum")}`); Uncaught TypeError: operationFunction is not a function

// 2. Definimos operaciones básicas
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const summation = (a,b) => a+b;
const divide = (a,b) => a/b;


// Crear una función que sume dos números

console.log(`Realizando una resta: ${calculate (5,3,subtract)}`); //2
console.log(`Realizando una multiplicacion: ${calculate (5,3,multiply)}`); //15
// Aplicar a la función calculate la función suma
console.log(`Realizando una suma: ${calculate (5,3,summation)}`); //8
console.log(`Realizando una division: ${calculate (6,3,divide)}`); //2
console.log(`Realizando una potencia : ${calculate (6,3,(a,b) => a**b )}`); //216  math.pow(a.b)

// Aplicar una función que calcule el residuo de una devisión, para saber si 6 es divisible entre 3

console.log (`Realizand una división: ${calculate (14,7,(a,b) => a%b)}`);


var varA = 10;
let varB = 20;
const varC = 30;
const d = 40;
const e = 50;
const f = 60;
const g = 70;

const cambiarValores = (a, b, c) =>{
  a = 100;
  b = 200;
  c = 300;
  var d = 400;
  let e = 500;
  const f = 600;
  console.log(a,b,c);
}


