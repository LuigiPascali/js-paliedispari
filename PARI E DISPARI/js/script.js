/* 
    Chiedo all'utente di scegliere tra pari o dispari e di inserire un numero da 1 a 5
        Inserisco un alert in caso venga inserito un valore numerico al posto di pari o dispari
        Inserisco un alert in caso venga inserito del testo o un numero superiore a 5 o negativo quando chiedo di inserire un numero
    Genero un numero random per il computer
    Sommo i due numeri
    Stabilire se la somma dei due numeri è pari o dispari con una funzione
        SE il risultato è quello scelto dall'utente => Utente vince
        ALTRIMENTI => il computer vince
*/

// // VERSIONE 1:

// let userChoice = prompt("Scegli pari o dispari");
// if (userChoice !== "pari" && userChoice !== "dispari") {
//     alert ("Inserisci solo 'pari' o 'dispari'");
// }

// let userNumber = parseInt (prompt("Inserisci un numero da 1 a 5"));
// if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
//    alert ("Inserisci solo un numero da 1 a 5");
// }

// // Genero un numero random per il computer:

// let cpuNumber = Math.floor(Math.random() * 5) + 1;

// // Sommo i due numeri: 

// let sum = userNumber + cpuNumber;

// // funzione per stabilire se la somma dei due numeri è pari o dispari:
// function isEven(number) {
//     return number % 2 === 0;
// }

// let result = isEven(sum) ? "pari" : "dispari";

// // Dichiaro il vincitore: 

// if (result === userChoice) {
//     console.log ("User ha vinto!");
// } else {
//     console.log("Computer ha vinto!")
// }



// VERSIONE 2:

function isEven(number) {
    return number % 2 === 0;
}

let userNumber = Math.floor(Math.random() * 5) + 1;
let cpuNumber = Math.floor(Math.random() * 5) + 1;

document.getElementById("play-button").addEventListener("click", function() {
    let userChoice = prompt("Scegli pari o dispari");
    if (userChoice!== "pari" && userChoice!== "dispari") {
        alert ("Inserisci solo 'pari' o 'dispari'");
        return;
    }

    let userNumber = parseInt (prompt("Inserisci un numero da 1 a 5"));
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
       alert ("Inserisci solo un numero da 1 a 5");
       return;
    }

    let cpuNumber = Math.floor(Math.random() * 5) + 1;

    let sum = userNumber + cpuNumber;
    let result = isEven(sum)? "pari" : "dispari";

    let winner = "";
    if (result === "pari") {
      winner = "Tizio Incognito";
    } else {
      winner = "Computer";
    }

    document.getElementById("user-choice").textContent = userChoice;
    document.getElementById("user-number").textContent = userNumber;
    document.getElementById("cpu-number").textContent = cpuNumber;
    document.getElementById("winner").textContent = winner;
});


