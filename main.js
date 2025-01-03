// ESERCIZIO 1:
// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri contenuti nell'array. 
// Esempio: let array = [1, 5 ,7 ,12]; Output = 25; 

let numbers = [1, 5, 7, 12];
let sommaArray = numbers.reduce((acc, num) => acc + num, 0);
console.log(sommaArray);

// ESERCIZIO 2:
// Scrivi un programma che dato un array di numeri, restituisca in output la media e tutti i valori minori della media.
// Esempio: Input: a = [3, 5, 10, 2, 8] Output: media = 5.6, valori minori = [3, 5, 2] 


let numbers2 = [3, 5, 10, 2, 8]
let somma = numbers2.reduce((acc,num)=>acc + num);
let media = somma / numbers2.length;
let valoriMinori = numbers2.filter(num => num < media);

console.log(media);
console.log(valoriMinori);

// ESERCIZIO 3:
// Scrivi un programma che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare una delle seguenti operazioni:  addizione, sottrazione, moltiplicazione, divisione e di eseguire il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio. 
// Esempio: 
// Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" 
// Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

let numbers3 = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
let numbers4 = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];

let somma1 = numbers3.map((num,i)=>num + numbers4[i]);
let sottrazione1 = numbers3.map((num,i)=>num - numbers4[i]);
let moltiplicazione1 = numbers3.map((num,i)=>num * numbers4[i]);
let divisione1 = numbers3.map((num,i)=>num / numbers4[i]);

console.log(somma1);
console.log(sottrazione1);
console.log(moltiplicazione1);
console.log(divisione1);

//ESERCIZIO 4:
//Scrivere un programma che permetta di filtrare soltanto le parole all'interno di un array:
// let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php'] il risultato dovrà dare,
//let filtered = ['hackademy, 'Javascript', 'php']
//HINT: provate a filtrare in base al tipo di dato (operatore typeof) oppure puoi utilizzare il metodo .includes()

let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php'];

let filtered = mixArray.filter(el => typeof el === 'string');

console.log(filtered);


//RUBRICA
//Replicare l'oggetto smartphone visto a lezione e provare a implementare il metodo "rimuovi contatto" se avete tempo provate ad aggiungere altre funzionalità.

let smartphone = {
    "marca": "Samsung",
    "modello": "s24",
    "prezzo": 1000,
    "disponibilità": true,
    "contatti": ["Fabrizio", "Barbara", "Antonio", "Lucy"],
    "call": function(){
        console.log("sto chiamando...")
    },
    "mostraContatti": function(){
        this.contatti.forEach(contatti => console.log(contatti))
    },
    "aggiungiContatto": function(nome){
        this.contatti.push(nome)
    },
    "rimuoviContatto": function(nome){
        this.contatti = this.contatti.filter(contatto => contatto !== nome);
        console.log(`Il contatto ${nome} è stato rimosso`);
        this.mostraContatti();
    },
}

smartphone.mostraContatti();
smartphone.rimuoviContatto("Antonio");


// **ESERCIZIO 1:**

// Realizzare un oggetto che rappresenti un garage: 

// - Dovrà contenere una lista di automobili. Ciascuna automobile dovrà avere una marca (es. Fiat) ed un modello (es. Panda). 

// - Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

const garage = {
    automobili: [],

    aggiungiAutomobile: function (marca, modello) {
        this.automobili.push({ marca, modello });
    },

    stampaModelliPerMarca: function (marca) {
        const modelli = this.automobili
            .filter(auto => auto.marca.toLowerCase() === marca.toLowerCase())
            .map(auto => auto.modello);

        if (modelli.length > 0) {
            console.log(`Modelli della marca ${marca}: ${modelli.join(', ')}`);
        } else {
            console.log(`Nessun modello della marca ${marca} trovato nel garage.`);
        }
    }
};

garage.aggiungiAutomobile("Fiat", "Panda");
garage.aggiungiAutomobile("Fiat", "500");
garage.aggiungiAutomobile("Toyota", "Corolla");
garage.aggiungiAutomobile("Ford", "Focus");

garage.stampaModelliPerMarca("Fiat");
garage.stampaModelliPerMarca("Toyota");
garage.stampaModelliPerMarca("BMW");