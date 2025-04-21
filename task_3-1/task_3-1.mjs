"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

let wakeUpTime = 9;
const bussTime = 7;
const trainTime = 8;
if (wakeUpTime <= bussTime) {
  printOut("I can take the bus to school.");
}
else if(bussTime < wakeUpTime && wakeUpTime <= trainTime){
  printOut("Can't take the buss, but you can take the train.");
}
else{
  printOut("Can't take the bus or the train, so I have to take the car.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

let numberForThisPart = 0;
const NumberOfZero = 0;

if (numberForThisPart < NumberOfZero) {
 printOut("Negative"); 
} 
else if(numberForThisPart > NumberOfZero) {
  printOut("Positive");
}
else{
  printOut("Zero");
}
printOut(newLine);

printOut("--- Part 6, 7 --------------------------------------------------------------------------------------------");

let imageSize = Math.floor(Math.random() * 8) + 1;
const minimalImageSize = 4;
const maximumImageSize = 6;

printOut("Image size = " + imageSize.toString());
if(minimalImageSize > imageSize){
  printOut("The Image is too small");  
}
else if(imageSize > maximumImageSize){
 printOut("Image is too large");
}
else{
  printOut("Thank You!");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList =["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Month is " + monthName);

if(monthName.includes("r")){
  printOut("You must take Vitamin D!");
}
else{
  printOut("You to not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let daysInMonth = 0;

switch (monthName){
  case "January":
  daysInMonth += 31;
    break;
  case "February":
  daysInMonth += 29;
    break;
  case "Mars":
  daysInMonth += 31;
    break;
  case "April":
  daysInMonth += 30;
    break;
  case "Mai":
  daysInMonth += 31;
    break;
  case "Jun":
  daysInMonth += 30;
    break;
  case "Juli":
  daysInMonth += 31;
    break;
  case "August":
  daysInMonth += 31;
    break;
  case "September":
  daysInMonth += 30;
    break;
  case "October":
  daysInMonth += 31;
    break;
  case "November":
  daysInMonth += 30;
    break;
  case "December":
  daysInMonth += 31;
    break;
}
printOut("There is " + daysInMonth + " days in " + monthName);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

if(monthName === "Mars" || monthName === "Mai"){
  printOut("The art gallery is closed in " + monthName + ".");
}
else if(monthName === "April"){
  printOut("In April. The Art gallery is temporary in the building next door.");
}
else{
  printOut("In " + monthName +". The art gallery is open.");
}
printOut(newLine);
