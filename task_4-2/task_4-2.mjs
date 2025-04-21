"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));
//I FU***NG LOVE ARARYS!!!!!1!!!
//Tragisk at jeg ikke har fått gjort dette før nå!
printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let text = "";
for(let index = 0; index < numbers.length; index++){
  text += numbers[index] + " ";
}

printOut(text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

printOut(numbers.join(","))
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const words = "hei på deg, hvordan har du det?";
const wordsArray = words.split(" ");

wordsArray.every(everyWord);

function everyWord(word, index){
  printOut((index + 1) + ": " + word);
  return true;
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const females = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

function nameRemover(array, name){
  const index = array.indexOf(name);
  if(index !== -1){
    printOut("Fjernet " + name + " fra lista");
    array.splice(index, 1);
  } else{
    printOut(name + " er ikke å finne i lista");
  }
}

nameRemover(females, "Marit");
nameRemover(females, "Katrine");
printOut(females.join(", "));

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const males = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const names = females.concat(males);
printOut("Alle navnene i lista er: " + names.join(", "));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
class TBook{
  #aTitle;
  #aAuthor;
  #aISBN;
  constructor(aTitle, aAuthor, aISBN){
    this.#aTitle = aTitle;
    this.#aAuthor = aAuthor;
    this.#aISBN = aISBN;
  }
  toString(){
    return this.#aTitle + " by " + this.#aAuthor + ", ISBN: " + this.#aISBN;
  }
}
const books = [
  new TBook("Harry Potter", "J.K. Rowling", "978-3-16-148410-0"),
  new TBook("The Hobbit", "J.R.R. Tolkien", "978-3-16-148410-1"),
  new TBook("The Catcher in the Rye", "J.D. Salinger", "978-3-16-148410-2"),
  new TBook("To Kill a Mockingbird", "Harper Lee", "978-3-16-148410-3"),
]

books.forEach(printBook);

function printBook(abook){
  printOut(abook.toString());
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag"},
  WeekDay7: { value: 0x40, name: "Søndag",},
  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekends: { value: 0x20 + 0x40, name: "Helg" },
  WorkoutDays: { value: 0x01 + 0x04 + 0x08, name: "Treningsdager" },
};

const keys = Object.keys(EWeekDays);
printOut("Alle keys:  + " + keys.join(", "));
const values = Object.values(EWeekDays);
printOut("Alle values: " + values.join(", "));
let valuekeys = Object.values(EWeekDays[keys[7]]);
printOut("Value i Spesifisk key: " + valuekeys.join(", "));

for(let index = 0; index < keys.length; index++){
  let svar = "";
  const key = keys[index];
  svar += key + ": ";

  const keyObject = EWeekDays[key];
  const keyObjectKeys = Object.keys(keyObject);
  for(let index2 = 0; index2 < keyObjectKeys.length; index2++){
    const keyObjectKey = keyObjectKeys[index2];
    svar += keyObjectKey + ": " + keyObject[keyObjectKey] + ", ";
  }
  printOut(svar);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const rngNumbers = [];

for(let i = 0; i < 35; i++){
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  rngNumbers.push(randomNumber);
}
printOut("35 tilfeldige tall: " + rngNumbers.join(", "));

rngNumbers.sort(sortRandomValues);
printOut("Sortert i stigende rekkefølge: " + rngNumbers.join(", "));
rngNumbers.reverse();
printOut("Sortert i synkende rekkefølge: " + rngNumbers.join(", "));

function sortRandomValues(aValue1, aValue2){ //stjal denne fra githubben :P Takk <3 
  return aValue1 - aValue2;
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const frequency = {};

for(let i = 0; i < rngNumbers.length; i++){
  const number = rngNumbers[i];
  if(frequency[number]){
    frequency[number]++;
  } else{
    frequency[number] = 1;
  }
}

let sortedKeys = Object.keys(frequency);
sortedKeys.sort(sorterFrequency);

printOut("Sortert etter frekvens: " + sortedKeys.join(", "));

function sorterFrequency(aVerdi1, aVerdi2){
  const verdi1 = frequency[aVerdi1];
  const verdi2 = frequency[aVerdi2];
  return verdi2 - verdi1;
}

let svar = "";

for(let i = 0; i < sortedKeys.length; i++){
  const freqKey = sortedKeys[i]; 
  const freqValue = frequency[freqKey];
  svar += freqKey + ": " + freqValue + ", ";
}

printOut(svar);
printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const TwoDimentionArray = [];

for(let rad =0; rad < 5; rad++){
  const felts = [];
  for(let felt = 0; felt < 9; felt++){
    const cell =+ rad + "," + felt;
    felts.push(cell);
  }
  TwoDimentionArray.push(felts);
  printOut("Rad " + rad + ": " + felts.join(", "));
}

svar = "";
printOut(newLine);
printOut("To-dimensjonal array:");
for(let rad = 0; rad < TwoDimentionArray.length; rad++){
  const felt = TwoDimentionArray[rad];
  for(let feltIndex = 0; feltIndex < felt.length; feltIndex++){
    const cell = felt[feltIndex];
    svar += "[" + cell + "]";
  }
  printOut(svar);
  svar = "";
}

printOut(newLine);