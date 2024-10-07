/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function myFunction(array){
    const result = []
    for (let i = 0; i < array.length; i++){
        let firstChar = array[i][0]
        result.push(firstChar)
    }
    return result
}

// Invoca la funzione qui e stampa il risultato in console
let initials = myFunction(names)
console.log(initials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]