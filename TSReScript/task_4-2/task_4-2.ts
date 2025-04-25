import { initPrintOut, printOut, newLine } from "../../lib/utils";
initPrintOut(document.getElementById("txtOut")!);

printOut("--- Part 1 --------------------------------------------------------------------------------------");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let text: string = "";
for(let index: number = 0; index < numbers.length; index++){
    text += numbers[index] + " ";

}
printOut(text);
printOut(newLine);
printOut("--- Part 2 --------------------------------------------------------------------------------------");

printOut(numbers.join(","));
printOut(newLine);

printOut("--- Part 3 --------------------------------------------------------------------------------------");
const words: string = "hei på deg, hvordan har du det?";
const wordsArray: string[] = words.split(" ");

wordsArray.every(everyWord);

function everyWord(word: string, index: number): boolean {
    printOut((index + 1) + ": " + word);
    return true;
}
printOut(newLine);

printOut("--- Part 4 --------------------------------------------------------------------------------------");
const females: string[] = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function nameRemover(array: string[], name: string): void {
    const index: number = array.indexOf(name);
    if(index !== -1) {
        array.splice(index, 1);
    } else {
        printOut(name + " er ikke å finne i lista.");
    }
}

nameRemover(females, "Marit");
nameRemover(females, "Katrine");
printOut(females.join(", "));
printOut(newLine);

printOut("--- Part 5 --------------------------------------------------------------------------------------");

const males: string[] = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const names: string[] = females.concat(males);
printOut("Alle navnene: " + names.join(", "));
printOut(newLine);

printOut("--- Part 6 --------------------------------------------------------------------------------------");
class TBook{
    private aTitle: string;
    private aAuthor: string;
    private aISBN: string;
    constructor(aTitle: string, aAuthor: string, aISBN: string) {
        this.aTitle = aTitle;
        this.aAuthor = aAuthor;
        this.aISBN = aISBN;
    }
    toString(): string {
        return this.aTitle + " av " + this.aAuthor + ", ISBN: " + this.aISBN;
    }
}
const books: TBook[] = [
    new TBook("Harry Potter", "J.K. Rowling", "978-3-16-148410-0"),
    new TBook("The Hobbit", "J.R.R. Tolkien", "978-3-16-148410-1"),
    new TBook("The Catcher in the Rye", "J.D. Salinger", "978-3-16-148410-2"),
    new TBook("To Kill a Mockingbird", "Harper Lee", "978-3-16-148410-3"),
]

books.forEach(printBook);

function printBook(aBook: TBook): void {
    printOut(aBook.toString());
}

printOut(newLine);

printOut("--- Part 7 --------------------------------------------------------------------------------------");
interface WeekDayEntry {
    value: number;
    name: string;
  }

interface EWeekDaysType {
    WeekDay1: WeekDayEntry;
    WeekDay2: WeekDayEntry;
    WeekDay3: WeekDayEntry;
    WeekDay4: WeekDayEntry;
    WeekDay5: WeekDayEntry;
    WeekDay6: WeekDayEntry;
    WeekDay7: WeekDayEntry;
    Workdays: WeekDayEntry;
    Weekends: WeekDayEntry;
    WorkoutDays: WeekDayEntry;
}
  

const EWeekDays: EWeekDaysType = {
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

const keys: string[] = Object.keys(EWeekDays);
printOut("Alle keys: +" + keys.join(", "));
const values: number[] = Object.values(EWeekDays);
printOut("Alle values: " + values.join(", "));
let valueKeys: string[] = Object.values(EWeekDays[keys[7] as keyof EWeekDaysType]);
printOut("Value i spesifik key: " + valueKeys.join(", "));


for(let index: number = 0; index < keys.length; index++){
    let svar: string = "";
    const key: string = keys[index];
    svar += key + ": ";

    const keyObject: WeekDayEntry = EWeekDays[key as keyof EWeekDaysType];
    const keyObjectValue: any = Object.values(keyObject);
    for(let index2: number = 0; index2 < keyObjectValue.length; index2++){
        const keyObjectKey: string = keys[index2];
        svar += keyObjectKey + ": " + keyObject[keyObjectKey as keyof WeekDayEntry] + ", ";
    }
    printOut(svar);
}
printOut(newLine);
printOut("--- Part 8 --------------------------------------------------------------------------------------");
function sortRandomValues(aValue1: number, aValue2: number): number{
    return aValue1 - aValue2;
}



const rngNumbers: number[] = [];

for(let i: number = 0; i < 35; i++){
    const randomNumber: number = Math.floor(Math.random() * 20) + 1;
    rngNumbers.push(randomNumber);
}
printOut("35 tilfeldige tall: " + rngNumbers.join(", "));

rngNumbers.sort(sortRandomValues);


printOut("--- Part 9 --------------------------------------------------------------------------------------");
printOut("--- Part 10 --------------------------------------------------------------------------------------");