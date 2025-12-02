
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
console.log("Despues de la modificación:",techStack); // ["HTML, "Sass", "JavaScript"]

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


// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("Colores iniciales:" , colors.toString()); // "Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"
console.log("Colores iniciales:" , colors.join(" -")); // 

// Aagragar 2 elementos en el indice 2 sin eliminar otros elementos
colors.splice(2, 0, "Rosa", "Cian");
console.log("Despues de agregar con splice:", colors.toString());

// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

const guestList = ["Fernando", "Pablo"];
guestList.splice(2, 0, "Sebastián");
console.log ("Agregar un invitado al final:", guestList.join(" -"));
guestList.splice(0, 0, "Luis" );
console.log ("Agragar un invitado al inicio:", guestList.join(" -"));
guestList.splice(1, 1, "Iván");
console.log("Eliminar y agregar invitado en índice 1:", guestList.join(" -")); 


/*================================================================
   BLOQUE 3: ESTRUCTURAS DE DATOS - PILAS Y COLAS 
   ================================================================
   Las pilas y colas son estructuras de datos que organizan cómo se 
   almacenan y acceden a los elementos.
   1. LIFO (Last-In, First-Out) - Pila (Stack)
   Concepto: El último elemento en entrar es el primero en salir.
*/
// Navegamos a sitios (push)
const historyStack = [];
historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");
console.log("Historial actual:", historyStack); //["google.com", "youtube.com", "guthub.com"]

// al poner + el argumento se convierte en string y concarena, sin la neceidad  de llamar tosrting

console.log("Historial actual:" + historyStack); //["google.com", "youtube.com", "guthub.com"]

// Presiono el botón de "atrás"

console.log(`Regresando a: ${historyStack.pop()}`); // "github.com"

/* 2.FIFO (First-In, First-Out) - Cola (Queue)
   Concepto:El primer elento en entrar es el primero en salir.
*/

const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)

/* ================================================================
  Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/

//1
const taskList = []; 
//2
taskList.push(`Tirar la basura`);
taskList.push(`Lavar los trastes`);
taskList.push(`Lavar la ropa`);
console.log ("Mostrar lista de tareas:",taskList.join(", ")); //2
// 3. FIFO i 3.1
console.log (`Pimera taera completada es:${taskList.shift()}`);
// 4 y 5 
taskList.unshift("Hacer la comida")
console.log(`La lista actualizada es es: ${taskList.join(", ")}`);
//6
console.log("La tarea urgente fue atendida:",taskList.shift());
console.log("la lista final es:", taskList.join(", "));


/* ================================================================
   BLOQUE 3: BUCLES (LOOPS) 
   ================================================================
   Estructuras que repiten un bloque de código mientras una condición sea verdadera.
*/
// --- 1. Ciclo FOR (Controlado) ---
// Úsalo cuando sabes cuántas veces quieres repetir algo (ej. recorrer un array).
// Sintaxis: for (expresión_inicial; condición; expresión_final) { ... }

// Imprimier los números del 1 al 5

for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
}

/* ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

*/
for(let i = 1; i <=10 ; i++ ) {
    if(i === 6) {
        console.log("¡Se alcanzó el número 6");
        break; 
    }
      console.log(`(con break) Número ${i}`);
}


// =============================================
let iteracion = 0;
for (  ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0 , 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// =====================================================
let myIteration; 
for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); // 0 , 1, 2
     if( myIteration === 2) break;  
}
console.log("Final", myIteration); //  2

// =====================================================
 let jiteration;
for ( jiteration = 0; jiteration < 3; jiteration++ ) {
   console.log("For loop", jiteration ); //
}
console.log("Final", jiteration); //

// =====================================================
let k;
for ( k = 0; k < 5; k++ )         ; 
{
   console.log("Valor de", k ); // 5
}
console.log("Final", k); // 5

// --- 2. Ciclo WHILE (Basado en condición) ---
// Úsalo cuando NO sabes cuántas veces se repetirá, depende de algo externo.
// Cuidado: Si la condición nunca es falsa, creas un bucle infinito (Infinite Loop).

while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random(); // 0....1.0(sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar");

// Imprime los número del 1 al 5 (usando While)

let i = 1;
while(i<=5){
   console.log("Valor de i es:", i);
   i++
}

//================

const countries = ["México", "USA", "Canada", "Japón"];
// Usando FOR LOOP
for (let index = 0; index < countries.length; index++) {
  const element = countries[index];
  console.log(`(for) País en indice ${index}: ${element}`);

}

// Usando For OF (ES6+)
for (const country of countries){
  console.log(`(for of) País: ${country}`);

}


// TODO: RETO FINAL (Simulación de Cajero)
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.

const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;
for (const movimientos of transactions){
  console.log(`(for of) Movimiento: ${movimientos}`);
}
for (const total of transactions){
  totalBalance += total
}
console.log("El total es:",totalBalance);

// Usando For-each
transactions.forEach ((transaction, index, array)=> totalBalance += transaction);



