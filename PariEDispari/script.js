// ---FUNZIONI---
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). *****implementazione generale con min e max
function randomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}











// ---MAIN PROGRAM---
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let number;
do {
    number = Number(prompt('Inserire un numero da 1 a 5'))
} while (number > 5);

//Sommiamo i due numeri
const sum = number + randomNumberRange(1,5);
console.log(sum);