// Ejercicios

/* 
Dada la siguiente lista de invitados en ese orden:
Lucas,
Matias,
Jose,
Pedro,
Martina,
Marcelo,
Esteban,
Marcela,
Martin
*/

/*
1) informar por consola el numero de invitados
*/
let guests = ["Lucas", "Matias", "Jose", "Pedro", "Martina", "Marcelo", "Esteban", "Marcela", "Martin"];
console.log(`la cantidad de invitados es ${guests.length}`);

/*
2) Imprimir por consola el nombre del ultimo invitado
*/

console.log(`el ultimo invitado es ${guests[guests.length-1]}`);

/*
3) A ultimo momento, se invito a Pedro a la fiesta, por lo que hay que agregarlo al final de la lista
*/
guests.push("Pedro")



/*
4) Media hora antes de empezar Marcela confirmo que no podia asistir.
 Generar una nueva lista que contenga los invitados que confirmaron su
 presencia.
 */

 guests.splice(guests.indexOf("Marcela"),1);
 let confirmedAttendance = guests;
 console.log(`de todos los invitados, los que confirmaron son: ${confirmedAttendance}`);

 /*
 5)  Suponiendo que los invitados consumieron la siguente cantidad de platos
    Lucas: 3 platos
    Esteban: 1 platos
    Jose: 1 plato
    Los restantes: 4 platos
Calular el numero total de platos consumidos al final de la fiesta
*/

function dishesEated(){
    
    let dishes = 0;
    
    for(let i=0;i<guests.length;i++){     
        
        if(guests[i] === "Lucas"){
            dishes +=3;
        }
        else if (guests[i]=== "Esteban"|| guests[i] === "Jose"){
            dishes++;
        }
        else {
            dishes+=4;
        }
       
        
    }
    
    return dishes;
}



console.log(`la cantidad de platos que comieron todos los invitados es ${dishesEated()}`);



/*
6) Acomodar los invitados por orden alfabetico.
*/



let sortedGuests= guests.sort();
console.log (`los invitados ordenados alfabeticamente son: ${sortedGuests}`);
