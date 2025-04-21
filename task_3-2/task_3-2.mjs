"use strict";
import { initPrintOut, printOut, newLine} from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

let txtPrintValuePluss = "";
let txtPrintValueMinus = "";

for(let count = 1; count <= 10; count++){
    txtPrintValuePluss += count.toString();
    if (count < 10) {
        txtPrintValuePluss += ",";
    }
}

for(let count = 10; count >=1; count--){
    txtPrintValueMinus += count.toString();
    if (count > 1){
        txtPrintValueMinus += ",";    
    }
}

printOut(txtPrintValuePluss);
printOut(txtPrintValueMinus);
printOut(newLine);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

let part2NumberGuesser = 0;
const numberToBeGuessed = 40;
let timesGuessed = 0;

while(part2NumberGuesser !== numberToBeGuessed){
    part2NumberGuesser = Math.ceil(Math.random()*60);
    timesGuessed++;
}

printOut("Sucsess! You got number " + part2NumberGuesser);
printOut("Guessed: " + timesGuessed + " times though....");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

let part3NumberGuesser = 0;
let timesGuessedPart3 = 0;
let timeOfSolvePart3 = Date.now();

while(part3NumberGuesser !== numberToBeGuessed){
    part3NumberGuesser = Math.ceil(Math.random()*1000000) + 1;
    timesGuessedPart3++;
}

timeOfSolvePart3 = Date.now() - timeOfSolvePart3;
printOut("Sucsess! You got number " + part3NumberGuesser);
printOut("Guessed: " + timesGuessedPart3 + " times though....");
printOut("Took it's time to... took " + timeOfSolvePart3.toString() + " milliseconds!")
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let primeNumbers = "";

for(let primeCounter = 2; primeCounter <= 200; primeCounter++){
    let notPrime = false;
    let divide = 2;
    while(!notPrime && divide < primeCounter){
        notPrime = (primeCounter % divide === 0);
        divide++;
    }
    if(!notPrime) {
        primeNumbers += primeCounter.toString();
        if(primeCounter < 200){
            primeNumbers += ",";
        }
    }
}
printOut(primeNumbers);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
let radtext = "";
for (let rad = 1; rad <= 7; rad++) {
    for (let kol = 1; kol <= 9; kol++) {
        radtext += "K"+kol+"R"+rad+" ";
    }
    printOut(radtext);
    radtext = "";
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
for(let studentID = 0; studentID < 5; studentID++)
    {
    let examPoints = Math.floor(Math.random() * 236);
    let gradePercent = Math.floor(examPoints / 236 * 100);
    let grade = "";

    switch (true) {
        case (gradePercent >= 89 && gradePercent <= 100):
            grade = "A";
            break;
        case (gradePercent >= 77 && gradePercent <= 88):
            grade = "B";
            break;
        case (gradePercent >= 65 && gradePercent <= 76):
            grade = "C";
            break;
        case (gradePercent >= 53 && gradePercent <= 64):
            grade = "D";
            break;
        case (gradePercent >= 41 && gradePercent <= 52):
            grade = "E";
            break;
        case (gradePercent >= 0 && gradePercent <= 40):
            grade = "F";
            break;
    }
    printOut("Studnet ID nr: "+studentID.toString()+" got "+examPoints+" points, which is "+gradePercent+" percent of the exam which gives them the grade "+grade.toString())
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let fullStraitChecher = false;
let yatsyChecker = false;
let fullTowerCheker = false;
let ThreeParChecker = false;
let rollCounter = 0;

do {
    const d1 = Math.ceil(Math.random() * 6);
    const d2 = Math.ceil(Math.random() * 6);
    const d3 = Math.ceil(Math.random() * 6);
    const d4 = Math.ceil(Math.random() * 6);
    const d5 = Math.ceil(Math.random() * 6);
    const d6 = Math.ceil(Math.random() * 6);
    rollCounter++;


    let count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0;


    switch (d1) 
    { 
        case 1: count1++; break; 
        case 2: count2++; break; 
        case 3: count3++; break; 
        case 4: count4++; break; 
        case 5: count5++; break; 
        case 6: count6++; break; 
    }
    switch (d2) 
    { 
        case 1: count1++; break; 
        case 2: count2++; break; 
        case 3: count3++; break; 
        case 4: count4++; break; 
        case 5: count5++; break; 
        case 6: count6++; break; 
    }
    switch (d3) 
    { 
        case 1: count1++; break; 
        case 2: count2++; break; 
        case 3: count3++; break; 
        case 4: count4++; break; 
        case 5: count5++; break; 
        case 6: count6++; break; 
    }
    switch (d4) 
    { 
        case 1: count1++; break; 
        case 2: count2++; break; 
        case 3: count3++; break; 
        case 4: count4++; break; 
        case 5: count5++; break; 
        case 6: count6++; break; 
    }
    switch (d5) 
    { 
        case 1: count1++; break; 
        case 2: count2++; break; 
        case 3: count3++; break; 
        case 4: count4++; break; 
        case 5: count5++; break; 
        case 6: count6++; break; 
    }
    switch (d6) 
    { 
        case 1: count1++; break; 
        case 2: count2++; break; 
        case 3: count3++; break; 
        case 4: count4++; break; 
        case 5: count5++; break; 
        case 6: count6++; break; 
    }

    if (!yatsyChecker && (count1 === 6 || count2 === 6 || count3 === 6 || count4 === 6 || count5 === 6 || count6 === 6)) {
        yatsyChecker = true;
        printOut("Yatsy!");
        printOut("Rolled:" + rollCounter.toString());
        printOut(newLine);
    }

    if (!fullTowerCheker && (count1 === 4 || count2 === 4 || count3 === 4 || count4 === 4 || count5 === 4 || count6 === 4) &&
        (count1 === 2 || count2 === 2 || count3 === 2 || count4 === 2 || count5 === 2 || count6 === 2)) 
    {
        fullTowerCheker = true;
        printOut("Full Tower!");
        printOut("Rolled:" + rollCounter.toString());
        printOut(newLine);
    }

    if (!fullStraitChecher && (count1 === 1 && count2 === 1 && count3 === 1 && count4 === 1 && count5 === 1 && count6 === 1)) 
    {
        fullStraitChecher = true;
        printOut("Full Straight!");
        printOut("Rolled:" + rollCounter.toString());
        printOut(newLine);
    }
    
    if(!ThreeParChecker)
    {
        let pairs = 0;
        if (count1 === 2) pairs++;
        if (count2 === 2) pairs++;
        if (count3 === 2) pairs++;
        if (count4 === 2) pairs++;
        if (count5 === 2) pairs++;
        if (count6 === 2) pairs++;

        if (pairs === 3) 
        {
            ThreeParChecker = true;
            printOut("Tre par!");
            printOut("Rolled:" + rollCounter.toString());
            printOut(newLine);
        }
    }
} 
while (!yatsyChecker || !fullStraitChecher || !fullTowerCheker || !ThreeParChecker);