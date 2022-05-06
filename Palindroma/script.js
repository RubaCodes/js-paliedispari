// ---FUNZIONI---
function isPalindroma(word){
    return word.split('');
}


// --- PROGRAMMA---
const userInput = prompt('Inserisci una parola')

const result = isPalindroma(userInput);
console.log(result);