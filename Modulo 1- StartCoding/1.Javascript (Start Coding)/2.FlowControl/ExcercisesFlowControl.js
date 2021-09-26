/*
        EJERCICIOS
        
        
1) Triangulo de #. Para este ejercicio, construir un programa que una vez concluido nos permita ver en consola un triangulo
formado con #, de la siguiente manera:
#
##
###
####
#####
 
(PISTA: Recuerden que yo puedo agarrar una variable, tomar su valor y concatenarla con otra cosa asi
=> miVariable = miVariable + 'algoMas")
*/
let triangle="#"
for(i=0;i<5;i++){
    console.log(triangle);
    triangle+="#";
}


/*2) Numeros pares e impares. Hacer un programa que itere por los numeros del 0 al 10 y, por cada uno de ellos, imprima el numero y
nos diga si es par o impar. 
Ejemplo:
0 es par
1 es impar
2 es par
...*/
let number=0;
while (number<11){
    if (number % 2=== 0){
        console.log(`${number} is even`);
        number++;
    }
    else{
        console.log(`${number} is odd`);
        number++;
    }
}


/*3) FizzBuzz. Generar un programa que itere del 1 al 15. Por cada iteracion, mostrar por consola lo siguiente:
1- Si el numero es multimo de 3, mostrar la palabra "Fizz"
2- Si el numero es multiplo de 5, mostrar la palabra "Buzz"
3- Si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
4- En los demas casos, mostrar el numero
*/
let fizz="Fizz";
let buzz="Buzz"
for (i=1; i<16; i++){
    if (i%3===0 && i%5===0){
        console.log(fizz+buzz);
    }
    else if(i%3 === 0){
        console.log(fizz);
    }
    else if (i%5===0){
        console.log(buzz);
    }
    else {
        console.log(i);
    }
}