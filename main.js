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

//dichiaro e inizializzo la variabile  dove salvare il messaggio finale
let message = 'Il prezzo per il biglietto è:';


//seconda fase : raccogliamo i dati

//utilizzo un prompt per salvare l'input inserito nella variabile
age = Number(prompt('Ciao, inserisci la tua età qui sotto:'));

console.log(age); //mostro in console l'input ricevuto

//utilizzo un prompt per salvare l'input inserito nella variabile
distance = Number(prompt('Ciao, inserisci la distanza che vuoi percorrere:'));

console.log(distance); //mostro in console l'input ricevuto

//dichiaro e applico funzione  per variabile prezzo totale
let price = distance * 0.21;



//trza fase : elaborare i dati

//verificare che il viaggiatore sia minorenne
if (age < 18) {
    price = price - (price * 0.20);
}
//verificare che il viaggiatore sia over 65
else if (age > 65) {
    price = price - (price * 0.40);
}


//quarta fase : mostrare output in console

// Mostra output in console con il prezzo formattato a due decimali
console.log(message + ' ' + price.toFixed(2) + ' €');
