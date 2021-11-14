/*      VALORES

Los valores son datos, es la información que nos sirve de base par construir la aplicacion 
y realizar las operaciones que necesitamos

En js existen dos grandes tipos de valores, los primitivos y los objetos

    PRIMITIVOS

        -NUMBER (Enteros, decimales, infinity y NaN)
            Infinity representa un valor infinito
            NaN representa un valor que no es numerico 
    
        -STRING (cadena de caracteres, cadena de texto)

        -BOOLEANOS (valores verdaderos o falsos)

        -UNDEFINED (valores no asignados, valor vacio)
            Se utliza cuando una variable no tiene un valor
        
        -NULL (valor no válido)
            Cuando una variable tiene un valor pero ese valor no es valido

        -SIMBOL (ES6) 
            valor unico que no puede modificarse

        -BIGINT (ES2020)
            numeros que exceden la capacidad de number

*/

/*      Valores y Tipos     */

//      Number
 console.log(typeof 3);
 console.log(3.5);
// el metodo typeof devuelve el tipo de valor
console.log(typeof Infinity);
console.log(typeof NaN);

//      Strings
console.log(typeof "Hola Mundo");
console.log("3"); //es un string, no un number

//      Booleanos
console.log(typeof true);
console.log(typeof false);

//      Null y Undefined
console.log(typeof undefined);  //variable sin valor asignado
console.log(typeof null);       //variable con valor asignado erroneo.
let miVariable;
console.log(miVariable); //undefined
miVariable = null;
console.log(miVariable); //null




 //      Tipado Dinamico


 /* las variables no tienen un tipo estricto... pueden cambiar de tipo sin que le digamos explicitamente
En el ejemplo empieza siendo un String, luego pasa a null y luego pasa a ser Number
*/

let miVariable = "hello world";
console.log(typeof miVariable);
miVariable = null;
console.log(miVariable);
miVariable = 3;
console.log(typeof miVariable);





//      Expresiones y declaraciones

//      Expresiones
// Las expresiones producen un valor y pueden ser escritas en cualquier lugar donde se espere un valor

let miVariable = 3;
console.log(miVariable);
console.log(2 + 3);
function saludar() {
   return "Hola";
}
console.log(saludar());

//      Declaraciones
//Las declaraciones ejecutan una accion sin producir un valor. Pueden ser reemplazadas por una expresion

let miVariable = false;
if (miVariable === true) {
   console.log("Verdadero");
} else {
   console.log("Falso");
}


//      Metodos del Navegador
// Son métodos que se usan para mostrar respuestas o capturar informacion del usuario
alert("hello world"); //abre una ventana de alerta
let nombre = prompt("Ingresa tu nombre"); //abre una ventana de input
console.log(nombre);
console.log(confirm("Estas seguro?"));//ventana de confirmacion, que devuelve true o false



//      Manipulacion de Tipos

//      Valores literales
/* Los valores literales son aquellos que van directo en el código.
 No dependen del input de usuario o de datos de terceros */
let nombre = "Alexis";
console.log(nombre);

//      Conversion de string a Number
//Hay tres alternativas para pasar de string a number: Number(), parseInt() y +

/*
Tanto Number() como + tratan de convertir TODO el string completo. Si no puede con todo el string tira error (NaN).
En cambio, parseInt() convierte a numero desde el primer caracter, cuando se encuentra con un caracter
que no puede ser convertido va a devolver lo que sí pudo convertir
*/

let string = "123hola";
console.log(Number(string)); //
console.log(parseInt(string)); //
console.log(+string); //

// Conversion de Number a String
// Existen los métodos numero.toString(). 
let number = 2;
number.toString(); // "2"

//Podemos cambiar los String a mayuscula o minuscula
nombre.toLowerCase(); //"alexis"
nombre.toUpperCase(); //"ALEXIS"

//      Concatenacion

let nombre = "Alexis";
console.log("Hola" + nombre); //"HolaAlexis"
console.log("Hola" + " " + nombre); //"Hola Alexis"

//Conversion a Booleano
/*Existen los métodos Boolean() y !!. Esto se llama coercion, que permite "obligar" a js que vuelva
booleano un valor que no lo es*/
let string = "2";
let number = 0;
console.log(Boolean(string)); //True
console.log(Boolean(number)); //False
console.log(!!string); //True
console.log(!!number); //False

//Conversion implicita
/*
La conversion implicita consiste en que js permite operar, en ciertos casos, con tipos que no se corresponden. Por ejemplo, un numero y un string. 
Para poder realizar estas operaciones hace una conversion implicita, una conversion de los tipos que no esta declarada 

Si tenemos un signo + y valores de tipo Number y String JS convertira a String
En todos los demas casos (-,*,/,%) covertira a Number el String
*/
let string = "2";
let number = 2;
let otroNumber = 3;
console.log(number + otroNumber + string); // "52" 2+3=5 5+"2"= "52"
console.log(string + number + otroNumber); //"223"
console.log(otroNumber + string + number); //"322"





//Operadores

//Aritmeticos: Operaciones matematicas

/*  Unarios (-. +, typeof)
Son aquellos que necesitan solamente un valor para operar
*/
console.log(typeof "hola mundo");
console.log(+"123");
console.log(-"123");
console.log(-"tres");

/* Binarios
Son aquellos que requieren al menos dos valores para operar.
Pueden ser mas, pero minimo 2 valores
*/
console.log(2 + 3);
console.log(3 - 3);
console.log(2 * 3);
console.log(6 / 3);
console.log(7 % 3);

//Logicos: comparaciones

//Binarios

// Mayor y Menor

console.log(2 > 3); //False
console.log(2 < 3); //True
console.log(3 >= 3); //True
console.log(3 <= 3);//True

// === y ==
/* 
=== es un comparador estricto: compara tipo y valor
== compara solamente valor, sin tener en cuenta el tipo.
*/
console.log(2 === "2"); //false
console.log(3 == "3"); //true
console.log(2 === 3); //false
console.log(2 == 3); //false
console.log(3 !== "3"); //true
console.log(3 != "3"); //false

// AND, OR, NOT

//AND
/*
Para que de true deben cumplirse necesariamente todas las condiciones, si alguna es falsa da false
*/
console.log("AND");
console.log(2 === 2 && 2 > 0);
console.log(2 === "2" && 2 > 0);
console.log(2 === 2 && 2 < 0);
console.log(2 === "2" && 2 < 0);

//OR
/*
Para que de true tiene que cumplirse al menos una condicion, solamente da false si ambas son falsas
*/
console.log("OR");
console.log(2 === 2 || 2 > 0);
console.log(2 === "2" || 2 > 0);
console.log(2 === 2 || 2 < 0);
console.log(2 === "2" || 2 < 0);

//TERNARIO
/*
Consiste en realizar una validacion y en base a eso devolver un resultado si la validacion es true y otro si la validacion es false

en el ejemplo:si la edad es mayor o igual a 18 devuelve "Podes manejar", si es false devuelve 
"no tenes edad para manejar"
*/
let edad = 17;
console.log(edad >= 18 ? "Podes manejar" : "No tenes edad para manejar");


//      VARIABLES
//palabras reservadas para declarar una variable
// var, let y const
/*
Una variable es un operador que permite almacenar en memoria un valor, que pueden ser de diferentes tipos. Hay diferentes maneras de almacenar variables.
    - let: es el metodo principal para declarar variables, este operador permite sobreescribir una variable
    - cons: operador para declarar constantes, es decir, variables que una vez declaradas no pueden ser modificadas
    - var: metodo antiguo para declarar variables, equivale a let pero tiene tendencia a generar errores (porque tiene un scope diferente, osea, un rango de vida. El scope de var es mas amplio, por lo que tiene esa tendencia a errores)
*/

var miVariable = 6;
let otraVariable = 2;
const otraVariableMas = 5;
console.log(miVariable); //6
console.log(otraVariable); //2
console.log(otraVariableMas); //5
otraVariable = 10; //sobrescribe
otraVariableMas = 20; //sobreescribe
console.log(otraVariable);
console.log(otraVariableMas);
const unaVariable;
console.log(unaVariable);
unaVariable = "Hola";
console.log(unaVariable);
let unaVariable = 2;
let firstName = "Alexis";
let address = "";



//Operator Precedence
/*
La precedencia de operadores hace referencia a el orden en que los operadores son interpretados en Js.
Es decir, que operadores se ejecutan antes que los otros.
El orden de precedencia es (), new, function, ++, --, !(negacion), +(unario),-(unario), typeof, void, delete, *, /, %, +, -, <, <=, >, >=, in, instanceof, ==, !==, ===, !==, &&, ||, ? : : (ternario), =, +=, -=, *=, /=, %=.
*/
console.log((30 + 20) / 2); //40
let nombre = "Alexis";
let x, y;
console.log(x, y);
x = y = 10;
console.log(x, y);
x = y;
y = 10;
console.log(x, y);


//Template Literals
/*
Los template literals(``) son comillas especiales que permiten insertar strings (como "") pero tambien permiten insertar dentro varibales o valores de funciones con el operador ${}
*/
const firstName = "Alexis";
const job = "Desarrollador";
const favouriteNumber = 7;

// Hola, soy Alexis, soy Desarrollador
// y mi numero favorito es el 7 hecho sin template literals
console.log(
"Hola, soy" +
    " " +
     firstName +
     ", soy " +
     job +
     "y mi numero favorito es el " +
     favouriteNumber
);
// Hola, soy Alexis, soy Desarrollador
// y mi numero favorito es el 7 hecho con template literals
console.log(
   `Hola, soy ${firstName},
   soy ${job} y
 mi numero favorito es el ${3 + 4}`
);
