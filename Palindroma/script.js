// ---FUNZIONI---

//funzione che ritorna true se la parola e' palindroma
function isPalindroma(word){
    return word.split('');
}


// --- PROGRAMMA---

//parrola in input dall'utente
const userInput = prompt('Inserisci una parola')
//chiamo la funzione 
const result = isPalindroma(userInput);
//stampo il risultato
console.log(result);