/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function myFunction(string){
    let counter = 0;
    const vowels = 'aeiou'
    for (let i = 0; i < word.length; i++){
        if (vowels.includes(string[i])){
            counter += 1 ;
        }
    }
    return counter
}

// Invoca la funzione qui e stampa il risultato in console
let vowelsCount = myFunction(word)
console.log(vowelsCount);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)