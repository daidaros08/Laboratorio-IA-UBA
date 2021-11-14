//DECLARACION DE LA FUNCION
// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

//INVOCAR LA FUNCION (LLAMAR LA FUNCION)
// sum(2, 3);
// sum(4, 3);
// sum(4, 43);

//RETURN

// function sum(num1, num2) {
//   return num1 + num2;
// }

// const result = sum(2, 3);

// const result = function (num1, num2) {
//   return num1 + num2;
// };

// const result = (num1, num2) => {
//   return num1 + num2;
// };

// const result = (num1, num2) => num1 + num2;

// console.log(result(2, 3) + 5);

// console.log(result(2, 3) + 20);

//SCOPE

// var isValid = true;

// function validatePermission(role) {
//   let validRole = "admin";
//   var isValid = true;

//   if (role === validRole) {
//     let isValid = true;
//     console.log("Dentro del if", isValid);
//   } else {
//     console.log("Dentro del else", isValid);
//     var isValid = false;
//   }

//   console.log("Dentro de la funcion", isValid);
// }

// validatePermission("adminn");

// console.log("A nivel global", isValid);

//HOISTING

// console.log(year);
// console.log(color);
// console.log(firstName);

// console.log(sayHelllo());
// console.log(sayGoodBye);
// console.log(sum);
// console.log(sum(2, 3));

// console.log(sum(12, 3));
// console.log(year);
// const result = sum(year, 10);
// console.log(result + 20);

// var year = 2021;
// let color = "red";
// const firstName = "Alexis";

// function sayHelllo() {
//   return "Hola Mundo";
// }

// const sayGoodBye = function () {
//   return "Bye Bye";
// };

// const sum = (num1, num2) => num1 + num2;

// function sum(num1, num2) {
//   return num1 + num2;
// }