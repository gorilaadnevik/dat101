"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Complete the given "if" in the task_3-3.mjs file at part 1, statement so that it matches this: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8).*/

printOut("Task 1, 2 and 3");

let wakeUpTime = 9;
const haveTowakeUpTime = 7;
const wakeUpTime1 = 8;
const wakeUpTime2 = 6;

if (wakeUpTime <= haveTowakeUpTime) {
  printOut("I can take the bus to school because i woke up by " + haveTowakeUpTime ); 
} 
else {
  printOut("I have to take the car to school");
} 
{
  printOut("if i wake up at exactly " + wakeUpTime1, "i can take the bus to school, otherwise if i woke up at exactly" + wakeUpTime2, "i can take the train to school, otherwise i have to take the car to school")
} 


printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement*/

let integer = 3;

printOut("Value = " + integer.toString()); 
if (integer <0) {
  printOut(" Value is Negative"); 
  } else if (integer ==0) {
printOut("Value is Zero");
  } else {
    printOut("Value is Positive");
  } 

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const imageMinSize = 4;
const imageSize = Math.ceil(Math.random() * 8);
printOut("The image size is: " + imageSize + "MP.");
if(imageSize >= imageMinSize) {
  printOut("Thank you");
}else {
  printOut("The image is too small");
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Submitted File Size: " + imageSize.toString());
if (imageSize >=6) {
  printOut("Image is too large");
} else if (imageSize >=4) {
printOut("Thank you")
} else {
  printOut("The image is too small")
}
printOut(newLine);


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];

  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

  printOut("Month Is = " + monthName);

  if (monthName.includes("r")) {
printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let daysOfMonth = null;
switch (monthName) {
  case "January":
  case "Mai":
  case "Mars":
  case "Juli":
  case "August":
  case "October":
  case "December":
    daysOfMonth = 31;
break;
  case "April":
  case "Jun":
  case "September":
  case "November":
   daysOfMonth = 30;
  break;
  default:
    "february"

    daysOfMonth = 28;
}
printOut("There is " + daysOfMonth  + " Days In  " + monthName);




/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthlist =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];

const noofMonth = monthlist.length;
const monthname = monthlist[Math.floor(Math.random() * noofMonth)];



if (monthname.includes("r")) {
printOut("Gallery is not open in " +monthname);

} else {
  printOut("Gallery is open in " + monthname + " , welcome!");
}



printOut(newLine);
