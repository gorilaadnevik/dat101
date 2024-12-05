"use strict";

import { printOut } from "../../common/script/utils.mjs";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {

//TODO: hent verdier fra input-feltene, prøv å finne ut riktig id'er

const txtRectWidth = document.getElementById("txtRectWidth");
const txtRectHeight = document.getElementById("txtRectHeight");

const Hight = Number (txtRectHeight.value);
const Width = Number (txtRectWidth.value);
//
const perimeter = (Hight + Width + Hight + Width);
const area = (Hight * Width)



console.log("Hight: " + Hight + "Width: " + Width);
console.log("Hight er av typen: " + typeof Hight);
console.log("width er av typen: " + typeof Width);
const txtTask1Output = document.getElementById("txtTask1Output");
txtTask1Output.innerHTML = "omkrets: " + perimeter + "&nbsp; Areal: " + area;

}

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return"!*/

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
let task2Words = []

const txtTask2Output = document.getElementById("txtTask2Output");

function txtTask2WordKeyPress(aEvent){
  const key = aEvent.key;
  switch(key){
    case "Enter":
      const words = txtTask2Word.value.split(" ");
      txtTask2Word.value = "";
     task2Words = task2Words.concat(words);
     txtTask2Output.innerHTML = "Number of words: " + txtTask2Output + "<br>" + task2Words.join(" ");
    console.log(task2Words);
    break;

  }
}
//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswer);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = ""; //Tømmer teksten, gjør klart til ny utskrift.
  function cmbTask3CheckAnswerClick() {
    const chkTask3 = document.getElementsByName("chkTask3");
    for(let i= 0; i < chkTask3.length; i++) {

const checkBox = chkTask3[i];
      if(checkBox.checked){
      const value = checkBox.value;
      if(value === "4"){
        text += "Du har valgt nummer " + value + ".<br />"
        
         }else{
          text += "Du har valgt nummer " + value + ".<br />"
         }
      }
    }
    txtTask3Output.innerText = text;
    text = ""; //Rømmer teksten, klargjør til neste klikk!
  }


//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
