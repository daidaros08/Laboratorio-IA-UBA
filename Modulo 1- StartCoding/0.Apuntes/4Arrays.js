//ARRAYS
//1- Formas de declarar un Array
const otroArray = new Array();
const miArray = ["Mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
console.log(miArray[2]);
const otroNuevoArray = [["Juan", 30, {}], "Alexis", 2, true, {}, () => {}];

//Ver la longitud del array
console.log(otroNuevoArray.length);

// Acceder a los elementos de un array
const elemento = miArray[0];
console.log(`En ese casillero esta guardada la ${miArray[0]}`);
console.log(miArray[0]);
miArray[0] = "La cartera de Juliana";
console.log(miArray[0]);

//Acceder al primer elemento
const miArray = ["Alexis", "Juan", "Pedro", "Marcelo", "Luis", "Armando"];
const firstElement = miArray[0];
console.log(firstElement);

//Acceder al ultimo
const lastElement = miArray[miArray.length - 1];
console.log(lastElement);

//Buscar el indice de un elemento
const elemento = "Martina";


// metodo indexOf
const index = miArray.indexOf(elemento);
//Si no esta el elemento en el array, el valor devuelto es -1
console.log(index);
console.log(miArray[index]);
miArray[miArray.indexOf("Alexis")] = "Martina";
console.log(miArray);

//Agregar un elemento al final del Array.
//PUSH
const newLength = miArray.push("Jorge");
console.log(newLength);
console.log(miArray);

//Remover un elemento del final del array
//POP
const removedElement = miArray.pop();
console.log(removedElement);
console.log(miArray);


// Agregar un elemento al principio del array
//Unshift
const newLength = miArray.unshift("Jorge");
console.log(newLength);
console.log(miArray);


//Remover un elemento del principio del array
//SHIFT
const removedElement = miArray.shift();
console.log(removedElement);
console.log(miArray);

//SPLICE
console.log(miArray);
console.log(miArray.splice(1, 1));
console.log(miArray);

//SLICE
const newArray = miArray.slice(1, 3);
console.log(newArray);
console.log(miArray);

//Iterar sobre un array
const miArray = [
   "Alexis",
   "Juan",
   "Pedro",
   "Marcelo",
   "Luis",
   "Armando",
   "Martina",
];

//length
//Iterar sobre un array con FOR
for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}

//Iterar sobre un array con forEach
miArray.forEach((name, index) => {
  console.log(miArray[index]);
  console.log(name);
});
console.log(variable);

// MAP

//Sin map
const newArray = [];
miArray.forEach((name) => {
  const newString = `Nombre: ${name}`;
  console.log(newString);
  newArray.push(newString);
});
console.log(newArray);

// //Con map
const newArrayWithMap = miArray.map((name) => `Nombre: ${name}`);
console.log(newArrayWithMap);

//FILTER
const namesArray = [
  "Alexis",
  "Juan",
  "Armando",
  "Pedro",
  "Marcelo",
  "Luis",
  "Armando",
  "Alexis",
  "Martina",
  "Armando",
  "Alexis",
];
const filteredArray = namesArray.filter((name) => name === "Nicolas");
console.log(filteredArray);


//FIND
const existingElement = namesArray.find(
  (name) => name.toLowerCase() === "martina"
);
console.log(existingElement);
if (existingElement) {
  console.log("El nombre esta en la lista");
} else {
  console.log("El nombre no esta en la lista");
}

//SORT
const miArray = [
  "Alexis",
  "Juan",
  "Pedro",
  "Marcelo",
  "Luis",
  "Armando",
  "Martina",
];
const numbers = [10, 20, 30, 40];
const orderedArray = miArray.sort();
console.log(orderedArray.reverse());
const orderedArray = numbers.sort((a,b)=>{});
console.log(orderedArray.reverse());

//REDUCE
const numbers = [10, 20, 30, 40];

//Sin reduce
let total = 0;
numbers.forEach((number) => (total += number));

//Con reduce
const total = numbers.reduce((acumulador, valorActual) => {
    console.log("Acumulador", acumulador);
    console.log("Valor Actual", valorActual);
    console.log("Aca termina la iteracion");
    return acumulador + valorActual;
}, 0);
const total = numbers.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0
);
console.log(total);