//      OBJETOS

/*
Los objetos en Javascript son una coleccion de valores desordenados, javascript no nos garantiza el orden de los valores en los objetos.
Para buscar los valores almacenados lo hacemos a través de la dualidad {key: value} (llave:valor).
Así se almacena la información en los objetos de js


{firstName: "Alexis"}

    DECLARAR UN OBJETO en JS
*/

//Declaracion literal
const literalObject = {
  firstName: "Alexis",
  cityResidence: "Buenos Aires",
  job: "Developer",
};
//Declaracion a través de instanciar un nuevo objeto (new object)
const normalObject = new Object(); //objeto sin propiedades, atributos
//agrego atributos
normaObject.firstName="Sebastian";
normalObject.cityResidence="Ctes";
normalObject.job="Developer";

console.log(normalObject);
literalObject.favouriteColor = "Blue";
console.log(literalObject.job);
console.log(literalObject.favouriteColor);
literalObject.favouriteColor = "Red";
console.log(literalObject.favouriteColor);

/*
clase PERSONA
3 propiedades : firstName, city, job
La clase permite crear innumerables objetos especificos, sin utilizar la declaracion literal
*/
const firstName = "Jose";

class Persona {
  //constructor define la estructura de la clase
  constructor(firstName, city, job) {
    this.firstName = firstName;
    this.city = city;
    this.job = job;
  }
  //metodo saludar de persona
  saludar() {
    console.log(`Hola, soy ${this.firstName}`);
  }
}

//Creo instancias de la clase personas
const Alexis = new Persona("Alexis", "Buenos Aires", "Developer");
const Juan = new Persona("Juan", "Cordoba", "Arquitecto");
const Martin = new Persona("Martin", "Rosario", "Abogado");

console.log(Alexis, Juan, Martin);
console.log(Alexis.saludar());
Juan.saludar();
Alexis.saludar();
Martin.saludar();



//Extender una subclase desde una clase original
//Perro extiende de animal
class Animal {
  constructor(name, isDomestic) {
    this.name = name;
    this.isDomestic = isDomestic;
  }

  speak() {
    console.log(`${this.name} hace un ruido`);
  }
}

class Dog extends Animal {
  constructor(name, age, isDomestic) {
    //si usas un constructor en una subclase es necesario traer el comando super,
    //que trae el constructor de la superclase
    super(name, isDomestic);
    this.age = age;
  }

  speak() {
    console.log(
      `${this.name} ladra y ${this.isDomestic ? "es domestico" : "es salvaje"}`
    );
  }

  sayAge() {
    console.log(`${this.name} tiene ${this.age}`);
  }
}

const dog = new Dog("Rulo", 5, true);
dog.speak();
dog.speak();
console.log(dog.name);
Object.key(), Object.values(),
Object.assign(), Object.entries()

const person = {
    firstName: "Alexis",
    city: "Buenos Aires",
    job: "Developer",
};
  

//  Aceder a un elemento
console.log(person.firstName);
  
// Modificar un elemento
person.city = "Cordoba";
console.log(person.city);
  
//Object.key() devuelve un array con los nombres de las keys (atributos) del objeto
const keys = Object.keys(person);
keys.forEach((key) => console.log(person[key])); //recorro las key con un forEach (este metodo se puede usar solo con arrays, no con objetos)
  
//For in
for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    console.log(person[key]);
  }
}
  
// Object.values() permite acceder a los valores de los objetos, devuelve array
const values = Object.values(person);
console.log(values);
  
// Object.assign(DondeCopia,loQueSeCopia) permite asignar valores a un objeto proveniente de otro objeto
const developer = {
  skills: "Javascript",
  city: "Cordoba",
};
  
Object.assign(person, developer);
//otra manera de hacer el assignment
const modifiedPerson = { ...person, ...developer };
console.log(person);
console.log(modifiedPerson);

  
//Object.entries() devuelve una matriz (array multidimensional) con estructura [key,value] por cada elemento del objeto
const entries = Object.entries(person);
console.log(entries);
  