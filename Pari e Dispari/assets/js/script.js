/*

1- attraverso un prompt far scegliere all'utente "pari o dispari"
2- attraverso un secondo prompt far inserire all'utente un numero tra 1 e 5
3- generare con math.random un numero casuale tra 1 a 5
4- sommare i due numeri ottenuti e stabilire se la somma tra questi è pari o dispari
    (%2)
5- Dichiarare se il vincitore è l'utente o il computer in base alla scelta iniziale
    compiuta dall'utente
*/

const oddOrEven = prompt('Scegli tra Pari e Dispari', 'Pari');
const chooseNum = parseInt(prompt('Scegli un numero tra 1 e 5', '3'));
const computerRandom = getRandomNum (1,5);

    console.log('pari o dispari? -->', oddOrEven);
    console.log('numero scelto -->', chooseNum);
    console.log('numero casuale -->', computerRandom);
    

function getRandomNum (min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1 ) + min);


    return randomNum;
}

let somma = chooseNum + computerRandom;

    console.log('somma tra i due numeri -->',somma);

const risultato = !(somma % 2) ? 'Pari' : 'Dispari';

    console.warn(risultato);

document.getElementById('output').innerHTML = 
`
The Winner is: 
<br>
<em>${risultato}</em>
<br>
<img src="https://media.tenor.com/wQpssY8j8MkAAAAC/cant-decide-never-decide.gif" alt="morra-cinese">
`;