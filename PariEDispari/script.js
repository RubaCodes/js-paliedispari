// ---FUNZIONI---
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). *****implementazione generale con min e max
function randomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//funzione che restituisce true se il numero passato come argomento e' pari, falso altrimenti
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}


// ---MAIN PROGRAM---
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice;
do{
    userChoice = prompt('Inserire pari o dispari').toLowerCase();
}while((userChoice != 'pari') && (userChoice != 'dispari') )

//e inserisce un numero da 1 a 5
let number;
do {
    number = Number(prompt('Inserire un numero da 1 a 5'))
} while (isNaN(number) || number < 1 || number > 5);

//Sommiamo i due numeri
const sum = number + randomNumberRange(1, 5);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)**** se pari vince user, altrimenti vince il pc******
if(isEven(sum) && userChoice == 'pari' || !isEven(sum) && userChoice == 'dispari'){
    console.log(` Hai scelto ${userChoice} e la somma  vale ${sum} quindi HAI VINTO!!!`);
}
else {
    console.log(` Hai scelto ${userChoice} e la somma  vale ${sum} quindi HAI PERSO!!!`);
}