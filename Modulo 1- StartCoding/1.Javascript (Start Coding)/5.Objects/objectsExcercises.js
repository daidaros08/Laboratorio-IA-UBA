//      EJERCICIOS
/*
1) Crear una clase Deportes, que reciba el atributo nombre
y un metodo que permita mostrar por consola ese nombre.
Ademas, crear un metodo que permita mostrar si el deporte es
individual o por equipos.
Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre, 
el numero de integrantes que deben formar parte de ese equipo. 
Crear un metodo para
mostrar el siguiente mensaje: 
"Para jugar al futbol necesitas 11 jugadores por equipo".
 Tener en cuenta que 'futbol' y 11 son valores que 
 pueden variar dependiedo
 del deporte (por ejemplo, si fuese basket, seria 5 jugadores)
 Futbol
 Basket
 Tenis
PARA ESTA ACTIVIDAD, USAR LO VISTO RESPECTO DE CLASES Y OBJETOS
*/

class Sports{
    constructor (name,isTeamPlay){
        this.name=name;
        this.isTeamSport=isTeamPlay;
    }
    sportName(){
        console.log(this.name);
    }
    isTeamPlay(){
        let message;
        if(this.isTeamSport){
            message=`${this.name} es un deporte de equipo`;
        } else {
            message=`${this.name} no es un deporte de equipo`;
        }
        console.log(message);
        }
        
}

class TeamSport extends Sports{
    constructor (name,isTeamPlay,players){
        super(name,isTeamPlay);
        this.players=players;
    }
    sizeOfTeam(){
        console.log(`Para jugar al ${this.name} necesitas ${this.players} jugadores por equipo`);
    }
}

let futbol = new TeamSport("Futbol", true, 11);
let tenis = new Sports("Tennis",false);
let basquet = new TeamSport("Basquet", true, 5);

console.log(futbol.isTeamPlay());
console.log(futbol.sizeOfTeam());
console.log(tenis.isTeamPlay());
console.log(basquet.isTeamPlay());
console.log(basquet.sizeOfTeam());


/*2) Andrea y Martin deciden hacer un picnic al aire libre.
Andrea propone llevar una bolsa con 2 cervezas, 2 sandwiches y 1 bolsa
de papas fritas. Por su parte, Martin lleva 1 porcion de torta, una gaseosa
y 1 paquete de galletitas dulces.
CREAR UN OBJETO QUE REPRESENTE CADA UNA DE LAS BOLSAS,
DONDE CADA PRODUCTO TENGA LA CANTIDAD QUE LLEVO CADA UNO.
REALIZAR LAS SIGUIENTES TAREAS:
a) Mostrar por consola los productos que llevo cada uno
(solo el nombre del producto)
b) En el camino al picnic, la bolsa de Andrea se rompio, 
por lo que tuvieron que poner todo en la bolsa de Martin.
Realizar el cambio correspondiente para que la bolsa de Martin
tenga el total de los productos del picnic.
c) Calcular el total de productos que llevaron al picnic
*/

class Bag{
    constructor(){

    }
}
class AndreaBag extends Bag {
    constructor (cantCerv,cantSand,cantPapas){
        super();
        this.cervezas=cantCerv;
        this.sandwiches=cantSand;
        this.papasFritas=cantPapas;
    }
}
class MartinBag extends Bag {
    constructor (cantTorta,cantGaseosa,cantGallet){
        super();
        this.tortas =cantTorta;
        this.gaseosas = cantGaseosa;
        this.galletitas = cantGallet;
    }
}
let andreaBag = new AndreaBag(2,2,1);
let martinBag = new MartinBag(1,1,1);

console.log("Bolsa de Andrea: ");
for (let i=0;i<Object.keys(andreaBag).length;i++){
    console.log(Object.keys(andreaBag)[i]);
    
}
console.log("-------------");
console.log("Bolsa de Martin: ");
for (let i=0;i<Object.keys(martinBag).length;i++){
    console.log(Object.keys(martinBag)[i]);
    
}
Object.assign(martinBag,andreaBag);
console.log(martinBag);

let numberOfProducts=0;
for(let i=0; i<Object.keys(martinBag).length;i++){
    numberOfProducts+=Object.values(martinBag)[i];

}
console.log(`La cantidad de cosas que llevaron para comer es: ${numberOfProducts}`  );



