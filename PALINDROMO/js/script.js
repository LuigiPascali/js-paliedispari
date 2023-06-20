/* 
    Chiedo all'utente di inserire una parola
    Creo una funzione per verificare se la parola è palindroma
    Per vedere se una parola è palindroma confronto la parola scritta con la sua versione invertita
    SE la parola è palindroma, stampo "La parola è palindroma"
    ALTRIMENTI la parola non è palindroma, stampo "La parola non è palindroma"
*/

// VERSIONE 1: 

// Chiedo all'utente di inserire una parola:

let word = prompt("Inserisci una parola: ");

// Creo una funzione per verificare se la parola è palindroma:

function isPalindrome(word) {
    // Confronto la parola scritta con la sua versione invertita:
    return word === word.split("").reverse().join("");
}

// Verifica e stampa del risultato in console: 

if (isPalindrome(word)) {
    console.log(word + " è palindroma!");
    } else { 
    console.log(word + " non è palindroma!");
}