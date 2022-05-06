// ---FUNZIONI---

//funzione che ritorna true se la parola e' palindroma
function isPalindroma(word) {
    const array = word.split('');
    let indexUp = 0;
    let indexDown = array.length - 1;
    console.log(indexDown, indexUp);
    
    while (indexUp <= indexDown) {
        if (array[indexUp] === array[indexDown]) {
            indexUp++;
            indexDown--;
        }else{
            return false;
        } 
    }
    return true;
}


// --- PROGRAMMA---

//parrola in input dall'utente
const userInput = prompt('Inserisci una parola')
//chiamo la funzione
const result = isPalindroma(userInput);
//stampo il risultato
console.log(result);