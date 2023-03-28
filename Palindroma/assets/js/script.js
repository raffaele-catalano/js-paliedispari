/*

1- chiedere con un *prompt* di inserire una parola qualsiasi
2- stabilire una funzione che legga la parola al contrario
3- con un operatore ternario stabilire che se la parola letta al contrario è uguale
    a quella inserita allora il valore è *true* altrimenti *false*
4- stampare in pagina l'output 
BONUS: stilare graficamente con .css

*/

const digitedWord = prompt('Inserisci una parola:', 'otto');
    console.log('parola digitata -->', digitedWord);

    // dividere una stringa in un array
const arrayLetters = digitedWord.split('');
    // invertire l'ordine degli elementi in un array
    arrayLetters.reverse()
        console.log('parola digitata reverse in array',arrayLetters);

    // trasformare un array in una stringa
let reverseWord = arrayLetters.join('');



document.getElementById('output').innerHTML = (digitedWord == reverseWord) 
? `
la parola inserita è <strong>Palindroma</strong>!
<br>
<img src="https://media.tenor.com/QXVs4QWLlzkAAAAC/spider-man.gif" alt="spider-man">
`
: `
la parola inserita NON è <strong>Palindroma</strong>!
<br>
<img src="https://media.tenor.com/fuiG0_pco2wAAAAC/confused-john-travolta.gif" alt="confused-john-travolta">
`;


// if (digitedWord == reverseWord) {
//     document.getElementById('output').innerHTML = 
//     `
//     la parola inserita è <strong>Palindroma</strong>!
//     <br>
//     <img src="https://media.tenor.com/QXVs4QWLlzkAAAAC/spider-man.gif" alt="spider-man">
//     `
//     console.log('palindroma');
// } else {
//     document.getElementById('output').innerHTML = 
//     `
//     la parola inserita NON è <strong>Palindroma</strong>!
//     <br>
//     <img src="https://media.tenor.com/fuiG0_pco2wAAAAC/confused-john-travolta.gif" alt="confused-john-travolta">
//     `
//     console.log('non palindroma');
// }



// R A F F A E L E
// 0 1 2 3 4 5 6 7

// for (let i = arrayLetters.length; i > arrayLetters.length; i--) {
//     const element = array[i];
//     console.warn(element);
// }