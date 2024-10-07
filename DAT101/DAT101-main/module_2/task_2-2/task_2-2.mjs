"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

let result = 2 + (3*(2-4))*6;
printOut("Here is result:" + result); 


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters/inch */
/*
    (25.4 / 1000) * 25.34m 
*/

const millInInch = 25.4;
const millInMeters = 1000;
const metres = 25.34;
const answer = (metres  * millInMeters) / millInInch;
const exactAnswer = answer.toFixed(2); 

printOut("exactAnswer = " + exactAnswer.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

/*
Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes
*/
const secondsInMinutes = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part2_Answer =
    (3 * hoursInDay * minutesInHour) +
    (12 * minutesInHour) +
    14 +
    (45/secondsInMinutes);
printOut("part2_Answer =  " + part2_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*
Convert 6,322.52 minutes to days, hours, minutes, and seconds.
*/
const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24); 
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinutes;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Seconds);
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*
Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".
*/

const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut( amountUSD + " dollars is " + amountNOK + " kroner");
amountUSD = Math.round(amountNOK * USD);
printOut( amountNOK + " kroner is " + amountUSD + " dollars");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let text = "There is much between heaven and earth that we do not understand.";

printOut("Number of characters:" + text.length);
printOut("Character at position 19:" + text.charAt(19));
printOut("Characters from position 35 (8 forward):" + text.substr(35, 8));
printOut('Index of "earth":' + text.indexOf("earth")); 
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

// 1. Is 5 greater than 3?
printOut("Is 5 greater than 3?" + Boolean (5 > 3)); 


// 2. Is 7 greater than or equal to 7?
printOut("Is 7 greater than or equal to 7?" + Boolean (7 >= 7));

// 3. Is 'a' greater than 'b'?
printOut("Is 'a' greater than 'b'?" + Boolean('a' > 'b'));

// 4. Is '1' less than 'a'?
printOut("Is '1' less than 'a'?" + Boolean ('1' < 'a'));

// 5. Is '2500' less than 'abcd'?
printOut("Is '2500' less than 'abcd'?" + Boolean ('2500' < 'abcd'));

// 6. 'arne' is not equal to 'thomas'.
printOut("Is 'arne' not equal to 'thomas'?" + Boolean ('arne' !== 'thomas'));

// 7. (2 equals 5) is this statement true?
printOut("Is 2 equal to 5?" + Boolean (2 === 5));

// 8. ('abcd' is greater than 'bcd') is this statement false?
printOut("Is 'abcd' greater than 'bcd' false?"  + Boolean ('abcd' > 'bcd'));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

// 1. Convert text "254" to a number using +
let num1 = +"254";
printOut('"254" to a number:', num1);

// 2. Convert text "57.23" to a number using +
let num2 = +"57.23";
printOut('"57.23" to a number:', num2);

// 3. Convert text "25 kroner" to a number using parseInt with +
let num3 = +parseInt("25 kroner");
printOut('"25 kroner" to a number:', num3);

let x = "254";
let y = "57.73";
let z = "25 kroner";

printOut(x.valueOf())
printOut(y.valueOf())
printOut(z.valueOf())
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Create a variable "r" and generate a random number between 1 and 360

let r = Math.floor(Math.random() * 360) + 1;

printOut(r + "");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalDays = 131;
let weeks = Math.floor (totalDays / 7);
let days = totalDays % 7;

printOut("How many weeks and days are in 131 days? " + weeks + "weeks" + days + "days");

printOut(newLine);