"use strict"
import { initPrintOut, printOut } from "../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("dette er en test")

/* lag en løkke sm telller fra 0 til 10,
skriv ut alle tallene på en linje!*/

let result = "";
for(let i = 0; i < 10; i++) {
    result+= i.toString() + ", ";
    
}
printOut(result.toString());

let text = "";
for(let x = 0; x < 10; x++){
  text += x.toString();
  if(x < 9) {
  text += ", "; 
}
}
printOut(text)

/* 
lag en tabell med fem bilmerker 
*/

const cars =["Toyota", "Ford", "BMW", "Mercedes", "Tesla", "Opel"];
text = "";
for(let index = 0; index < cars.length; index++){
    text += cars[index]
    if(index < cars.length - 1){
        text += ", "

    }
}
printOut(text);
text="";
cars.forEach(checkCar);
printOut(text);
function checkCar(aCar, aIndex){

   text += aCar;
   if(aIndex < cars.length - 1){
    text += " ," 
   }
    
}

const value = cars.find(findCar);
printOut(value);

function findCar(aCar){
printOut(aCar);
  if(aCar === "Mercedes"){
  printOut("Sorry, Mercedes is not supose to be here!");
    return true;
}
 return false;
}

const filter = cars.filter(filterCars);
printOut(filter.join(", "));

function filterCars(aCar){
    if(aCar.toUpperCase().includes('O')){
        return true;
    }
    return false;
}
//cars.filter(filterCars);


