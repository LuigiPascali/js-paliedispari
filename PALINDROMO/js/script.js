/* 
    Chiedo all'utente di inserire una parola
    Creo una funzione per verificare se la parola è palindroma
    Per vedere se una parola è palindroma confronto la parola scritta con la sua versione invertita
        SE la parola è palindroma, stampo "La parola è palindroma"
        ALTRIMENTI la parola non è palindroma, stampo "La parola non è palindroma"
*/

// // VERSIONE 1: 

// // Chiedo all'utente di inserire una parola:

// let word = prompt("Inserisci una parola: ");

// // Creo una funzione per verificare se la parola è palindroma:

// function isPalindrome(word) {
//     // Confronto la parola scritta con la sua versione invertita:
//     return word === word.split("").reverse().join("");
// }

// // Verifica e stampa del risultato in console: 

// if (!isNaN(parseFloat(word)) && isFinite(word)) { 
//     // Creo un alert in caso non venga inserito un valore testuale:
//     alert("Numeri non accettati!");  
// } else {
//     if (isPalindrome(word)) {
//         console.log(word + " è palindroma!");
//     } else { 
//         console.log(word + " non è palindroma!");
//     }
// }

// VERSIONE 2: 

function isPalindrome(word) {
    // Confronta la parola originale con la parola invertita accettando anche le iniziali maiuscole
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}

function checkPalindrome() {
    // Ottieni l'elemento di input HTML con l'id "wordInput"
    let wordInput = document.getElementById("wordInput");

    // Ottieni il valore inserito nell'input
    let word = wordInput.value;

    // Verifica se la parola è vuota o composta solo da spazi
    if (word.trim() === "") {
        // Mostra un avviso se la parola è vuota
        alert("Inserisci una parola!");
    } else if (!isNaN(parseFloat(word)) && isFinite(word)) {
        // Mostra un avviso se la parola è un numero
        alert("Numeri non accettati!");
    } else {
        // Controlla se la parola è palindroma utilizzando la funzione isPalindrome
        if (isPalindrome(word)) {
            // Mostra un messaggio se la parola è palindroma
            alert(word + " è palindroma! Infatti per parola palindroma si intende: verso, frase, parola o cifra che letta in senso inverso mantiene immutato il significato.");
        } else { 
            // Mostra un messaggio se la parola non è palindroma
            alert(word + " non è palindroma!");
        }
    }
}











