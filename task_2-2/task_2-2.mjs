"use strict";
import { initPrintOut, printOut, newLine } from "../lib/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const firstPargrafPart1 = 2;
const secondPargrafPart1 = (3*(2-4));
const thirdPargrafPart1 = 6
const part1Solution = firstPargrafPart1 + secondPargrafPart1 * thirdPargrafPart1;
printOut("2 +(3*(2-4))* 6 = " + part1Solution);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*Konvertere 25 menter og 34 cm til tommer en tomme er 25.4 millimeter*/
const inches = 2.54;
const cmInMeters = 100;
const ItemInMeters = 25.34;
const answer = (ItemInMeters * cmInMeters) / inches;
const exactAnswer = answer.toFixed(2)
printOut("Answer = " + exactAnswer);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*Converter 3 dager, 12 timer 14 minutter og 45 sekunder til minutter */
const secondsInMinute = 60;
const minutesInHours = 60;
const hoursInDay = 24;

const TotalHours = 3 * hoursInDay + 12;
const hoursToMinutes = TotalHours * minutesInHours;
const TotalSeconds = 45 / secondsInMinute;
const TotalMinutes = hoursToMinutes + 14 + TotalSeconds;
printOut("Answer = " + TotalMinutes.toString());
printOut(newLine);
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* 
Converter 6322.52 minutter til dager, timer, minutes and seconds
Ved bruken av variabelene på oppgave 3 kan jeg svare oppgaven.
*/
const part4TotalMinutes = 6322.52;
let totalVariablePart4 = part4TotalMinutes / (minutesInHours * hoursInDay);
const daysFromPart4 = Math.floor(totalVariablePart4);
printOut("Days = " + daysFromPart4);

totalVariablePart4 = totalVariablePart4 - daysFromPart4;
totalVariablePart4 = totalVariablePart4 * hoursInDay;
const hoursFromPart4 = Math.floor(totalVariablePart4);
printOut("Hours = " + hoursFromPart4);

totalVariablePart4 = totalVariablePart4 - hoursFromPart4;
totalVariablePart4 = totalVariablePart4 * secondsInMinute;
const minutesFromPart4 = Math.floor(totalVariablePart4);
printOut("Minuttes = " + minutesFromPart4);

totalVariablePart4 = totalVariablePart4 - minutesFromPart4;
totalVariablePart4 = totalVariablePart4 * secondsInMinute;
const secondsFromPart4 = Math.floor(totalVariablePart4);
printOut("Sekunder = " + secondsFromPart4);
printOut(newLine);
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Konvertere fra amerikanskeDollar til norske kroner*/
let TotalAmountInUSD = 54;
const USDtoNOK = 76 / 8.6;
const NOKtoUSD = 8.6 / 76;
const TotalAmountInNOK = Math.round(TotalAmountInUSD * USDtoNOK);
printOut(TotalAmountInUSD + " dollar is " + TotalAmountInNOK + " kroner.");

TotalAmountInUSD = Math.round(TotalAmountInNOK * NOKtoUSD)
printOut(TotalAmountInNOK + " kroner is " + TotalAmountInUSD + " dollars.");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

let part6Text = "There is much between heaven and earth that we do not understand.";
const count = part6Text.replace(/\s+/g,"").length;
const charPos = part6Text.charAt(19);
const sliceStart = 35;
const sliceEnd = sliceStart + 8;
const charBetween = part6Text.substring(sliceStart, sliceEnd);
const earthIndex = part6Text.indexOf("earth"); 


printOut(part6Text);
printOut("Antall bokstaver i teksten: " + count.toString());
printOut("Boksaven i posisjon 19 er: " + charPos);
printOut("Bokstavene mellom 35 og 8 er: " + charBetween);
printOut("Indeksen til earth er: " + earthIndex);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Print vediene om de er san eller uasant uten if*/
let p7a = 5 > 3;
let p7b = 7 <= 7;
let p7c = "a" > "b";
let p7d = 1 < "a";
let p7e = "2500" < "abcd";
let p7f = "arne" !== "thomas";
let p7g = (2 === 5) === true;
let p7h = ("abcd" > "bcd") === false;

printOut("5 > 3 is " + p7a.toString());
printOut("7 >= 7 is " + p7b.toString());
printOut("a > b is " + p7c.toString());
printOut("1 < a is " + p7d.toString());
printOut("2500 < abcd is " + p7e.toString());
printOut("arne !== thomas is " + p7f.toString());
printOut("(2 === 5) === true is " + p7g.toString());
printOut("(abcd > bcd) === false is " + p7h.toString());

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*Convert and pritn  */
let part8TaskA = "254";
let part8TaskB = "57.23";
let part8TaskC = "25 Kroner";
printOut("254 = " + Number(part8TaskA));
printOut("57.23 = " + Number(part8TaskB));
printOut("25 Kroner = " + parseInt(part8TaskC));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let r = (Math.random() * 360) + 1; 

printOut("(Math.random() * 360) + 1 = " + r.toFixed());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let totalDays = 131;

let weeks = Math.floor(totalDays / 7);
let days = totalDays % 7; 

printOut("131 days is " + weeks + " weeks and " + days + " days.");

printOut(newLine);