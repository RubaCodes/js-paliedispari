// ---FUNZIONI---

//funzione che ritorna true se la parola e' palindroma
function isPalindroma(word) {
    const array = word.split('');
    let indexUp = 0;
    let indexDown = array.length - 1;
    console.log(indexDown, indexUp);
    
    while (indexUp <= indexDown) {
        if (array[indexUp++] === array[indexDown--]) {
        }else{
            return false;
        } 
    }
    return true;
}


// --- PROGRAMMA---

//parrola in input dall'utente
const userInput = prompt('Inserisci una parola')
//se la parola immessa e' palindroma stampa e' palindroma altrimenti stampa non e' palindroma
if (isPalindroma(userInput)) {
    console.log(`La parola ${userInput} e' palindroma`);
}
else{
    console.log(`La parola ${userInput}  non e' palindroma`);
}