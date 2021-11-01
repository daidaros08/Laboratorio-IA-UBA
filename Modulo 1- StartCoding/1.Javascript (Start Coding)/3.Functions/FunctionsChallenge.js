//  EJERCICIOS

/*
1) Crear un programa que le pida al usuario que ingrese un numero
y le devuelva un mensaje indicando si el numero es positivo, negativo
o es 0
*/

function getTypeOfNumber (number){
    let type;
    const realNumber = +number;
    if (!realNumber && realNumber !==0){
        type = "Ingreso no valido";
    }
    else if (realNumber > 0){
        type = "Positivo";
    }
    else if (realNumber <0){
        type = "Negativo";
    }
    else if (realNumber===0){
        type = "Cero";
    }
    return type;
}

let userInput = prompt("ingrese su numero");
console.log(getTypeOfNumber(userInput));


/*
2) Crear un programa que pida un número al usuario y le devuelva un mensaje si 
el número es primo o no 
Aclaración: los números primos son aquellos que tienen exactamente 4 divisores enteros
*/

function isPrimeNumber(number){
    const parsedNumber = +number;

    if(!parsedNumber && parsedNumber!==0){
        return "El valor agregado no es numero";
    }
    else if(parsedNumber<2){
        return false;
    }
    for (let i = 2;i<parsedNumber;i++){
        if (parsedNumber%i === 0){
            return false;
        }
        
    }
    return true;

}
let userNumber = prompt ("Ingrese un numero");
let chosenNumber = isPrimeNumber(userNumber);
if(chosenNumber !== undefined){
    if (chosenNumber){
    console.log("Su numero es primo");
    }
    else {
    console.log("su numero no es primo");
    }
}

/*
3) Crear un programa que convierta la temperatura de grados Celcius a Fahrenheit y viceversa.
El usuario debera ingresar la temperatura y a que unidad la quiere convertir.
*/
function conversionOfDegrees(degree, scale){
    let convertDegree;
    let parsedDegree= +degree;
    newScale =scale.toLowerCase();
    if(!parsedDegree && parsedDegree!==0){
        return "el numero ingresado no es correcto";
    } else if (newScale === "fahrenheit"||newScale === "f"){
        convertDegree = (degree*9/5)+32;
        
    }else if (newScale === "celsius"|| newScale ==="c"){
        
        convertDegree= (parsedDegree-32)*5/9;
    }
    else {
        return "el formato ingresado no es valido";
    }
    return convertDegree;
}

let userDegree = prompt("ingrese los grados");
let userScale = prompt ("ingrese la unidad de medida");

console.log(conversionOfDegrees(userDegree,userScale));

/*
4) Crear un programa para calcular el total de una compra. Para ello, se le debe pedir al usuario que
ingrese el precio de cada producto y, cuando termine, que ingrese la palabra 'total' devolverle el total de la compra.
*/

function calculateTotal(){
    let totalCost = 0;
    let subTotal;
    do{
        subTotal = prompt("Ingrese precio del producto");
        const parsedSubtotal = +subTotal;
        if (parsedSubtotal){
            totalCost += parsedSubtotal;
        }
        else if (subTotal !=="total"){
            console.log("el valor ingresado no es correcto");
        }

    }
    while (subTotal.toLowerCase()!== "total") {
        

}
    return totalCost;
}


console.log(`el total de su compra es ${calculateTotal()}`);