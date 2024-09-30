/* 
    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    *   il prezzo del biglietto è definito in base ai km (0.21 € al km)
     *   va applicato uno sconto del 20% per i minorenni
      *  va applicato uno sconto del 40% per gli over 65.
       *  L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


//preparazione
//dichiariamo la prima variabile
let age;
//dichiariamo la seconda variabile
let distance;
//dichiaro la variabile  dove salvare il messaggio finale
let message;

//seconda fase : raccogliamo i dati
//utilizzo un prompt per salvare l'input inserito nella variabile
age = prompt('Ciao, inserisci la tua età qui sotto:');
//mostro in console l'input ricevuto
console.log(age);
//utilizzo un prompt per salvare l'input inserito nella variabile
distance = prompt('Ciao, inserisci la distanza che vuoi percorrere:');
//mostro in console l'input ricevuto
console.log(distance);


//trza fase : elaborare i dati

//quarta fase : mostrare output in console