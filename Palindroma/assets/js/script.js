/*

1- chiedere con un *prompt* di inserire una parola qualsiasi
2- stabilire una funzione che legga la parola al contrario
3- con un operatore ternario stabilire che se la parola letta al contrario è uguale
    a quella inserita allora il valore è *true* altrimenti *false*
4- stampare in pagina l'output 
BONUS: stilare graficamente con .css

*/

const digitedWord = prompt('Inserisci una parola:', 'tenet');
    console.log('parola digitata -->', digitedWord);

    // dividere una stringa in un array
const arrayLetters = digitedWord.split('');
    // invertire l'ordine degli elementi in un array
    arrayLetters.reverse()
        console.log('parola digitata reverse in array',arrayLetters);

    // trasformare un array in una stringa
let reverseWord = arrayLetters.join('');

document.getElementById('output').innerText = (digitedWord == reverseWord) 
? `la parola è palindroma` 
: `la parola non è palindroma`;


// if (digitedWord == reverseWord) {
//     console.log('palindroma');
// } else {
//     console.log('non palindroma');
// }


// for (let i = arrayLetters.length; i > arrayLetters.length; i--) {
//     const element = array[i];
//     console.warn(element);
// }

// R A F F A E L E
// 0 1 2 3 4 5 6 7