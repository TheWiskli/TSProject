import { initPrintOut, printOut, newLine} from "../../lib/utils.ts";
initPrintOut(document.getElementById("txtOut")!);


printOut("------Part 1, 2, 3 ---------------------------------------------------------------------");

let wakeUpTime: number = 9;
const bussTime: number = 7;
const trainTime: number = 8;

if(wakeUpTime <= bussTime) {
    printOut("You can take the bus to work.");
}
else if(bussTime < wakeUpTime && wakeUpTime <= trainTime) {
    printOut("Can't take the buss, butt you can take the train.");
}
else{
    printOut("You have to walk to work.");
}
printOut(newLine);

printOut("------Part 4, 5---------------------------------------------------------------------");

let numberForThisPart: number = 0;
const NumberOfZero: number = 0;

if(numberForThisPart < NumberOfZero) {
    printOut("The number is negative.");
}
else if(numberForThisPart > NumberOfZero) {
    printOut("The number is positive.");
} else {
    printOut("The number is zero.");
}
printOut(newLine);

printOut("------Part 6, 7---------------------------------------------------------------------");

let imageSize: number = Math.floor(Math.random() * 8) + 1;
const minimalImageSize: number = 4;
const maximalImageSize: number = 6;

printOut("The image size is: " + imageSize.toString());
if(minimalImageSize > imageSize) {
    printOut("The image is too small.");
}
else if(imageSize > maximalImageSize) {
    printOut("The image is too big.");
} else {
    printOut("The image size is ok.");
}

printOut(newLine);

printOut("------Part 8---------------------------------------------------------------------");
const monthList: string[] = ["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth: number = monthList.length;
const monthName: string = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("The month is: " + monthName);

if(monthName.includes("r")){
    printOut("You need Vitamin D!");
}
else {
    printOut("You don't need Vitamin D!");
}
printOut(newLine);

printOut("------Part 9---------------------------------------------------------------------");
let daysInMonth: number = 0;

switch(monthName) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        daysInMonth = 31;
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        daysInMonth = 30;
        break;
    case "February":
        daysInMonth = 28;
        break;
}
printOut("The month " + monthName + " has " + daysInMonth.toString() + " days.");
printOut(newLine);

printOut("------Part 10---------------------------------------------------------------------");

if(monthName == "Mars" || monthName == "Mai"){
    printOut("The art Gallery is closed in " + monthName + ".");
}
else if(monthName == "April"){
    printOut(" In April. The Art Gallery is temporarily open in the side building.");
}
else{
    printOut("The Art Gallery is open in " + monthName + ".");
}
printOut(newLine);