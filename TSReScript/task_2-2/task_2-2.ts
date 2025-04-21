import { initPrintOut, printOut, newLine } from "../../lib/utils.ts";

initPrintOut(document.getElementById("txtOut")!);

printOut("----part 1----------------------------------------------------------------------");
const firstParagraph: number = 2;
const secondParagraph: number = (3*(2-4));
const thirdParagraph: number = 6;;
const part1Solution: number = firstParagraph + secondParagraph * thirdParagraph;
printOut("The solution to part 1 is: " + part1Solution);
printOut(newLine);
printOut("----part 2----------------------------------------------------------------------");

const inches: number = 2.54;
const cmInMeter: number = 100;
const ItemInMeter: number = 25.34;
const answer: number = (ItemInMeter * cmInMeter) / inches;
const exactAnswer: string = answer.toFixed(2);
printOut("The answer to part 2 is: " + exactAnswer);
printOut(newLine);

printOut("----part 3----------------------------------------------------------------------");
const secondsinMinute: number = 60;
const minutesinHour: number = 60;
const hoursinDay: number = 24;

const TotalHours: number = 3 * hoursinDay + 12;
const hoursToMinutes: number = TotalHours * minutesinHour;
const TotalSeconds: number = 45 / secondsinMinute;
const TotalMinutes: number = hoursToMinutes + 14 + TotalSeconds;
printOut("The answer to part 3 is: " + TotalMinutes.toFixed(2));
printOut(newLine);

printOut("----part 4----------------------------------------------------------------------");

const part4TotalMinutes: number = 6322.52;
let totalVariablePart4: number = part4TotalMinutes / (minutesinHour * hoursinDay);
const daysFromPart4: number = Math.floor(totalVariablePart4);
printOut("The answer to part 4 is: " + daysFromPart4);

totalVariablePart4 = totalVariablePart4 - daysFromPart4;
totalVariablePart4 = totalVariablePart4 * hoursinDay;
const hoursFromPart4: number = Math.floor(totalVariablePart4);
printOut("The answer to part 4 is: " + hoursFromPart4);

totalVariablePart4 = totalVariablePart4 - hoursFromPart4;
totalVariablePart4 = totalVariablePart4 * secondsinMinute;
const minutesFromPart4: number = Math.floor(totalVariablePart4);
printOut("The answer to part 4 is: " + minutesFromPart4);

totalVariablePart4 = totalVariablePart4 - minutesFromPart4;
totalVariablePart4 = totalVariablePart4 * secondsinMinute;
const secondsFromPart4: number = Math.floor(totalVariablePart4);
printOut("The answer to part 4 is: " + secondsFromPart4);
printOut(newLine);

printOut("----part 5----------------------------------------------------------------------");

let TotalAmountInUSD: number = 54
const USDtoNOK: number = 76/8.6;
const NOKtoUSD: number = 8.6/76;
const TotalAmountInNOK: number = Math.round(TotalAmountInUSD * USDtoNOK);
printOut(TotalAmountInUSD + " dollar is " + TotalAmountInNOK + " kroner.");

TotalAmountInUSD = Math.round(TotalAmountInNOK * NOKtoUSD);
printOut(TotalAmountInNOK + " kroner is " + TotalAmountInUSD + " dollars.");
printOut(newLine);

printOut("----part 6----------------------------------------------------------------------");

let part6Text: string = "There is much between heaven and earth that we do not understand.";
const count: number = part6Text.replace(/\s+/g,"").length;
const charPos: string = part6Text.charAt(19);
const sliceStart: number = 35;
const sliceEnd: number = sliceStart + 8;
const charBetween: string = part6Text.substring(sliceStart, sliceEnd);
const earthText: number = part6Text.indexOf("earth");

printOut(part6Text);
printOut("Antall bokstaver i teksten: " + count.toString());
printOut("Boksaven i posisjon 19 er: " + charPos);
printOut("Bokstavene mellom 35 og 8 er: " + charBetween);
printOut("Indeksen til earth er: " + earthText);
printOut(newLine);

printOut("----part 7----------------------------------------------------------------------");

let p7a: boolean = 5 > 3;
let p7b: boolean = 7 <= 7;
let p7c: boolean = "a" > "b";
let p7d: boolean = false;
let p7e: boolean = "2500" < "abcd";
let p7f: boolean = ("arne" as string) !== ("thomas" as string);
let p7g: boolean = false;
let p7h: boolean = ("abcd" > "bcd") === false;

printOut("5 > 3 is " + p7a.toString());
printOut("7 >= 7 is " + p7b.toString());
printOut("a > b is " + p7c.toString());
printOut("1 < a is " + p7d.toString());
printOut("2500 < abcd is " + p7e.toString());
printOut("arne !== thomas is " + p7f.toString());
printOut("(2 === 5) === true is " + p7g.toString());
printOut("(abcd > bcd) === false is " + p7h.toString());