// EJERCICIOS

/* 
1) Pedir al usuario que ingrese su nombre. Guardar ese nombre en una variable y utilizarlo para saludar al usuario (por ejemplo: "Hola Sebas").
*/

const name1 = prompt ("Enter your name please");
alert (`Hola ${name1}!, bienvenido`); //alt+96 for backtick

/*
2) Pedirle al usuario que ingrese dos numeros y devolverle la suma de dichos numeros
*/
let numberOne = prompt("Enter the first number");
let numberTwo = prompt ("Enter the second number");
alert(`${numberOne} plus ${numberTwo} equals to:
${+numberOne + +numberTwo}`);//+number transform String to Number

/*
3) Pedirle a un usuario que ingrese dos numeros y devolverle el doble de la suma de dichos numeros
*/ 
let number1 = prompt ("Enter the first number");
let number2 = prompt ("Enter the second number");
alert (`${(+number1 + +number2) * 2} `)

/*
4) Pedirle a un usuario que ingrese el alto y el ancho de una habitación y calcular la superficie
*/
let roomHeight= prompt ("Enter your room's height");
let roomWidth = prompt ("Enter your room's width");
alert (`Your room's area is ${+roomHeight * +roomWidth} m2`)

/*
5) Pedirle al usuario que ingrese su nombre y devolverle el nombre en minusuculas
*/
let name2 = prompt ("Enter your name");
alert (`Your name in lower case is ${name2.toLowerCase()}`);


/*
6) Pedirle al usuario que ingrese su apellido y devolverle el apellido en mayusculas
*/
let lastName = prompt ("Enter your lastname");
alert (`Your name in lower case is ${lastName.toUpperCase()}`);


/*
7) Pedirle al usuario el nombre, el apellido y la edad. Mostrar el siguiente mensaje:
Nombre: Juan
Apellido: Perez
Edad: 20
*/

let name3=prompt("Enter your name");
let surname=prompt ("Enter your surname");
let age=prompt ("Enter your age");
alert(`Name: ${name3}
Surname: ${surname}
Age: ${age}`);
