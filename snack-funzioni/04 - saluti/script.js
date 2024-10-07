/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function myFunction(string){
    return `Ciao ${string}`;
}


// Invoca la funzione qui e stampa il risultato in console
let greeting = myFunction(name);
console.log(greeting);

//Risultato atteso se si passa 'Mario': // ciao Mario