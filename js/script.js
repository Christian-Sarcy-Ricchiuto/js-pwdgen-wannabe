console.log('JS Ok');

/* TRACCIA
-Recupera l'elemento dal DOM
-Chiedi all'utente il suo nome
-Chiedi all'utente il suo cognome
-Chiedi il suo colore preferito
-Stampa "nomecognome21"
*/

/* Preparo suffisso finale */
const suffix = '21';

/* Recupero elemento dalla pagina */
const resultElement = document.getElementById('result');
console.log(resultElement);

/* Fase di raccolta dati */
const firstName = prompt('Qual\'è il tuo nome?', Christian);
const lasttName = prompt('Qual\'è il tuo cognome?', Ricchiuto);
const favColour = prompt('Qual\'è il tuo colore preferito?', Rosso);
console.log()

/* Operazione di generazione della password */
const = firstName + lasttName + favColour + suffix;
console.log(password);

/* Stampa "nomecognome21" */
resultElement.innerText = 'La tua Password è' ${password};

