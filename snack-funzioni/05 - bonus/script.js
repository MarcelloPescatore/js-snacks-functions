/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function myFunction(string){
    const d = new Date();
    let hour = d.getHours();
    if (hour <= 13){
        return `buongiorno ${string}`
    } else if (hour > 13 && hour <= 17) {
        return `buon pomeriggio ${string}`
    } else {
        return `buonasera ${string}`
    }
}

let myFunctionArrow = (string) => {
    const d = new Date();
    let hour = d.getHours();
    if (hour <= 13){
        return `buongiorno ${string}`
    } else if (hour > 13 && hour <= 17) {
        return `buon pomeriggio ${string}`
    } else {
        return `buonasera ${string}`
    }
}

// Invoca la funzione qui e stampa il risultato in console
let greeting = myFunction(name);
console.log(greeting);

let greetingArrow = myFunctionArrow (name)
console.log(greetingArrow);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.