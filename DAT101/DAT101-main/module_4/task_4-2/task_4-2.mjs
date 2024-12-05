"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let text = "";
for(let index = 0; index < numbers.length; index++){
    text += numbers[index] + " ";
 
}
printOut(text)

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(numbers.join(" , "))




printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const grating = "hei på deg, hvordan har du det?";
const myArray = grating.split(" "); 

for (let i = 0; i < myArray.length; i++) {
    printOut (i + " " + " " + (i+1) + " " + myArray[i]);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid","Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth" , "Kristin"];
function removeElement(Array, nameToRemove){
    const array = Array.indexOf(nameToRemove); 
    if (array !== -1){ 
      Array.splice(array, 1); 
      return`${nameToRemove} was removed from the array.`;
    }else{
      return`${nameToRemove} does not exist in the array.`;
    }
}

printOut(removeElement(girls, "Marit"));
printOut(girls.join(", "))
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

  const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
  
 const allNames =[...boyNames, ...girls];
allNames.forEach(allNames => printOut(allNames));
  
  
  
  
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


class TBook {
 
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
toString() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
  }
}

//Creat an array that contains three instances of the Tbook  class from different authors.
const books = [
  new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"),
  new TBook("1984", "George Orwell", "9780451524935"),
  new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084")
];


for (let i = 0; i < books.length; i++) {
  printOut(books[i].toString());
}

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag"},
  WeekDay7: { value: 0x40, name: "Søndag", type: "Helligdag" },
  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const keys = Object.keys(EWeekDays); //Dette gir oss alle nøklene i objektet EWeekDays
printOut("Keys: " + keys.join(", ")); // Her printer vi ut alle nøklene i objektet EWeekDays
const values = Object.values(EWeekDays); //Dette gir oss alle verdiene i objektet EWeekDays
printOut("Values: " + values.join(", ")); // Her printer vi ut alle verdiene i objektet EWeekDays
let valueKeys = Object.values(EWeekDays[keys[7]]); //Her ser vi på verdien til nøkkelen Workdays (7)
printOut("ValueKeys: " + valueKeys.join(", ")); // Her printer vi ut verdien til nøkkelen Workdays (7)

//Vi går igjennom alle nøklene til objektet EWeekDays
for(let index = 0; index < keys.length; index++) {
  let text = "";
  //Vi henter ut navnet på nøkkelen (f.eks. WeekDay1)
  const key = keys[index];
  text = key + ": ";
  //TODO: Skriv ut alle nøklene og verdiene til nøklene
  const keyObject = EWeekDays[key]; //Henter vi objektet til nøkkelen (f.eks. WeekDay1)
  const keyObjectKeys = Object.keys(keyObject); //Her henter vi alle nøklene til for eksempel WeekDay1
  for(let i = 0; i < keyObjectKeys.length; i++){
    const keyObjectKey = keyObjectKeys[i]; //Her henter vi ut nøkkelen (f.eks. value)
    const keyObjectValue = keyObject[keyObjectKey]; //Her henter vi ut verdien til nøkkelen (f.eks. 0x01)
    text += " " + keyObjectKey + ": " + keyObjectValue;
  }
  printOut(text);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

/*
Create an array that contains 35 random numbers from 1 to 20 (inclusive).
Sort these arrays in ascending and descending order.
To get full credit for this task, it must be solved with "callback" functions
that you use in the .sort(...) method of this array.
*/
const randomValues = [];
for(let i = 0; i < 35; i++){
  const randomValue = Math.ceil(Math.random() * 20); //Math.floor(Math.random() * 20) + 1;
  randomValues.push(randomValue);
}
printOut("Random values: " + randomValues.join(", "));
//TODO: Sorter tabellen i stigende rekkefølge, og bruk en callback-funksjon
//1. Hva er en callback-funksjon?
//2. Hvordan sorterer du en tabell
//3. Hvordan velge rekkefølgen på sorteringen

randomValues.sort(sortRandomValues);
printOut("Tabellen i stigende rekkefølge: " + randomValues.join(", "));
randomValues.reverse(); //Flipper rekkefølgen på tabellen, ingen sortering. Må sorteres først.
printOut("Tabellen i synkende rekkefølge: " + randomValues.join(", "));

function sortRandomValues(aValue1, aValue2){
  return aValue1 - aValue2;
}

/*
Pilfunksjoner: ((argumenter)=>{body})
Ikke navngitte funksjoner: function(argumenter){body}
vanlige navngitte funksjoner: function navn(argumenter){body}
*/


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

const freq = {};
for(let i = 0; i < randomValues.length; i++){
  const value = randomValues[i];
  // Hva skjer hvis freq[value] ikke er definert?
  if(freq[value]){// Husk at undefined er false
    freq[value]++;
  }else{
    freq[value] = 1;
  }
}
//Her er alle tallene og frekvensen til tallene i objektet freq
//Sorter denne listen slik at de mest frekvente tallene kommer først
let freqKeys = Object.keys(freq);
freqKeys.sort(sortFreq);//Sorterer listen med callback-funksjonen sortFreq

function sortFreq(aValue1, aValue2){
  //Her sorter vi listen basert på frekvensen til tallene
  const freq1 = freq[aValue1];
  const freq2 = freq[aValue2];
  return freq2 - freq1;
}

text = ""; //Klargjør teksten som skal skrives ut (tømmer den)
for(let i = 0; i < freqKeys.length; i++){
  const freqKey = freqKeys[i]; //Hjelpevariabel for å hente ut nøkkelen
  const freqValue = freq[freqKey];//Hjelpevariabel for å hente ut verdien
  text += freqKey + ": " + freqValue + ", ";//Legger til tall og frekvens i teksten
}
printOut(text);//Skriver ut teksten
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

/*Create an array that contains rows and columns (2 dimensions, 5x9). Start with an empty array. Use "for"
loops to create rows and columns, respectively. In each "cell," create a text that shows which row and
column the "cell" is in. Then create two new sets of "for" loops to print the array itself.
  ○ Hint: For each round in the outer loop for the rows, you create a column. And for each round in the
          columns, you write the "cell" value.
*/

const myTabel = []
for(let row = 0; row < 5; row++){
  const columns = [];
  for(let column = 0; column < 9; column++){
    const cell =  row  + ", " + column;
    columns.push(cell);
   }
  myTabel.push(columns);
}

text = "";
for(let row = 0; row < myTabel.length; row++){
  const columns = myTabel[row];
  for(let column = 0; column < columns.length; column++){
    const cell = columns[column];
    text += "[" + cell + "]";
  }
  printOut(text);
  text = "";
}
printOut(newLine);

