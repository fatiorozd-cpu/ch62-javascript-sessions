
console.log ("Sseión Js-04: Arrays y Bucles");

/* ===================
  Arrays (ARREGLOS)
  ====================

*/





  // ----- 1. Definición----
  // Sintaxis moderna : usamos corchetes [] (Array Literal)
  // Nota: Usamos `const` aunque el contenido cambie. Lo que es constante
  // es la referencia en memoria, no los datos internos.

const frutas = []; // empy array
const fruits = new Array (); // array using constructor (less common)

const nuemros = [ 5 ]; // array with one element
const numbers = new Array (5); // array with 5 empy slots [ <5 empy items ]

// ---- 2. Acceso a Elementos---
// Los índices comienzan en 0 (Zero-based indixing).
// [0] -> Primer elemento
// [length -1] -> último elemento

const techStack = ["HTML", "CSS", "JavaScript"];

// Acceder al primer elemento
console.log(techStack.length); // 3
console.log(`Accediendo al primer elemento: ${techStack[0]}`);

// Accediendo al segunod elemento
console.log(`Accediendo al segundo elemento: ${techStack[1]}`);

// Accediendo al ultimo elemento
console.log (`Accediendo al último elemento: ${techStack[2]}`); // o techStack.length-1


// ---3 Modificación de Elemntos---
techStack[1] = "Sass"; // cambio de "CSS por "Sass
console.log ("Despues de la modificación:" techStack), // ["HTML, "Sass", "JavaScript"]

// Agrgar un nuevo elemento al final
// techStack
techStack[ techStack.length ] = "TypeScript"; // ["HTML", "Sass", "JavaScrip", "TypeScript"]

/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];


// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]


// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]

// --- Eliminar Elementos ---

// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);

// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"