"use strict";

import { printOut } from "../../common/script/utils.mjs";

const carTypes = [
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

const movieGenre = [
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
/*
Part 3: Checkbox Evaluation (15 points)
Create a click event function to check which of the checkboxes are selected.
And print the result in txtTask3Output.
*/
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = ""; //Tømmer teksten, gjør klar til ny utskrift.
function cmbTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3");
  for(let i = 0; i < chkTask3.length; i++) {
    /*
    TODO: Sjekk om checkboxen er huket av. og skriv ut resultatet i txtTask3Output
          Skriv også ut hvilken checkbox som er huket av, og hva verdien er.
          Det er også mulig å skrivet hele teksten til hver checkbox i txtTask3Output.
    */
   const checkBox = chkTask3[i];
   if(checkBox.checked){
    const value = checkBox.value;
    if(value === "4"){
      text += "Du har valgt nummer " + value + ". Dette kan du ikke mene!!???<br />"

    }else{
      text += "Du har valgt nummer " + value + ".<br />"
    }
   }

  }
  txtTask3Output.innerHTML = text;
  text = ""; //Rømmer teksten, klargjør til neste klikk!
}





//--- Part 4 ----------------------------------------------------------------------------------------------
 

const CarTypes = ["Sedan", "SUV", "Truck", "Convertible"];


const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");


for (let i = 0; i < CarTypes.length; i++) {
    
    const label = document.createElement("label");
    label.textContent = CarTypes[i];

    
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carType"; 
    radio.value = CarTypes[i];

    
    radio.addEventListener("click", () => {
        txtTask4Output.textContent = `Selected car: ${radio.value}`;
    });


    divTask4Cars.appendChild(radio);
    divTask4Cars.appendChild(label);

    
    divTask4Cars.appendChild(document.createElement("br"));
}


//--- Part 5 ----------------------------------------------------------------------------------------------

const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", () => {

    const selectedAnimal = selectTask5Animals.value;


    txtTask5Output.textContent = `Selected animal: ${selectedAnimal}`;
});


//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const girlsNames = ["Sophia", "Olivia", "Emma", "Ava", "Charlotte", "Amelia", "Isabella", "Mia", "Evelyn", "Harper"];
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

GirlsNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    selectTask6Girls.appendChild(option);
});


selectTask6Girls.addEventListener("change", () => {
    const selectedName = selectTask6Girls.value;
    txtTask6Output.textContent = `You selected: ${selectedName}`;
});

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const MovieGenre = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];
const selectMovieGenre = document.getElementById("selectMovieGenre");
const btnAddMovie = document.getElementById("cmbAddMovie");
const movieTable = document.getElementById("tblMovies");


MovieGenre.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    selectMovieGenre.appendChild(option);
});


btnAddMovie.addEventListener("click", () => {
    const title = document.getElementById("txtMovieTitle").value;
    const genre = selectMovieGenre.value;
    const director = document.getElementById("txtMovieDirector").value;
    const rating = document.getElementById("txtMovieRate").value;

    if (!title || !director) {
        alert("Please fill in all the fields.");
        return;
    }

    const tableBody = movieTable.querySelector("tbody") || document.createElement("tbody");
    if (!movieTable.querySelector("tbody")) {
        movieTable.appendChild(tableBody);
    }

    const row = document.createElement("tr");

    const nrCell = document.createElement("td");
    nrCell.textContent = tableBody.rows.length + 1;
    row.appendChild(nrCell);

    const titleCell = document.createElement("td");
    titleCell.textContent = title;
    row.appendChild(titleCell);

    const genreCell = document.createElement("td");
    genreCell.textContent = genre;
    row.appendChild(genreCell);

    const directorCell = document.createElement("td");
    directorCell.textContent = director;
    row.appendChild(directorCell);

    const ratingCell = document.createElement("td");
    ratingCell.textContent = rating;
    row.appendChild(ratingCell);

    tableBody.appendChild(row);
});
