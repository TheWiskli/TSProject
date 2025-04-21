import { initPrintOut, printOut, newLine} from "../../lib/utils.ts";
initPrintOut(document.getElementById("txtOut")!);

printOut ("------Part 1 ---------------------------------------------------------");

let txtPrintValuePluss: string = "";
let txtPrintValueMinus: string = "";

for(let count: number = 1; count <= 10; count++){
    txtPrintValuePluss += count.toString();
    if (count < 10){
        txtPrintValuePluss += " , ";
    }
}

for(let count: number = 10; count >= 1; count--){
    txtPrintValueMinus += count.toString();
    if (count > 1){
        txtPrintValueMinus += " , ";
    }
}
printOut(txtPrintValuePluss);
printOut(txtPrintValueMinus);
printOut(newLine);
printOut ("------Part 2 ---------------------------------------------------------");

let part2NumberGuesser: number = 0;
const numberToBeGuessed: number = 40;
let timesGuessed: number = 0;

while(part2NumberGuesser !== numberToBeGuessed){
    part2NumberGuesser = Math.ceil(Math.random() * 60);
    timesGuessed++;
}

printOut("Sucsess! You got number " + part2NumberGuesser);
printOut("Guessed: " + timesGuessed.toString() + " times though....");
printOut(newLine);

printOut ("------Part 3 ---------------------------------------------------------");

let part3NumberGuesser: number = 0;
let timesGuessedPart3: number = 0;
let timeOfSolvePart3: number = Date.now();

while (part3NumberGuesser !== numberToBeGuessed){
    part3NumberGuesser = Math.ceil(Math.random() * 1000000) + 1;
    timesGuessedPart3++;
}

timeOfSolvePart3 = Date.now() - timeOfSolvePart3;
printOut("Sucsess! You got number " + part3NumberGuesser.toString());
printOut("Guessed: " + timesGuessedPart3.toString() + " times though....");
printOut("Took it's time to... took " + timeOfSolvePart3.toString() + " milliseconds!")
printOut(newLine);

printOut ("------Part 4 ---------------------------------------------------------");
let primeNumbers: string = "";

for(let primeCounter: number = 2;  primeCounter <= 200; primeCounter++){
    let notPrime: boolean = false;
    let divide: number = 2;
    while (!notPrime  && divide < primeCounter){
        notPrime = (primeCounter % divide === 0);
        divide++;
    }
    if(!notPrime){
        primeNumbers += primeCounter.toString();
        if(primeCounter < 200){
            primeNumbers += " , ";
        }
    }
}
printOut("Prime numbers between 1 and 200: " + primeNumbers);
printOut(newLine);
printOut ("------Part 5 ---------------------------------------------------------");
let radText: string = "";
for(let rad: number = 1; rad <=7; rad++){
    for(let kol: number = 1; kol <= 9; kol++){
        radText += "K"+kol.toString() + "R" + rad.toString() + " ";
    }
    printOut(radText);
    radText = "";
}
printOut(newLine);
printOut ("------Part 6 ---------------------------------------------------------");

for (let studentID: number = 0; studentID < 5; studentID++){
    let examPoints: number = Math.floor(Math.random() * 236);
    let gradePercent: number = Math.floor((examPoints / 240) * 100);
    let grade: string = "";

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
    printOut("Student ID: " + studentID.toString() + " got " + examPoints.toString() + " points, which is " + gradePercent.toString() + "% and got grade " + grade);
    printOut(newLine);
}

printOut ("------Part 7 ---------------------------------------------------------");
let fullStraitChecker: boolean = false;
let yatsyChecker: boolean = false;
let fullTowerChecker: boolean = false;
let ThreeParChecker: boolean = false;
let rollCounter: number = 0;

do{
    const d1: number = Math.ceil(Math.random() * 6);
    const d2: number = Math.ceil(Math.random() * 6);
    const d3: number = Math.ceil(Math.random() * 6);
    const d4: number = Math.ceil(Math.random() * 6);
    const d5: number = Math.ceil(Math.random() * 6);
    const d6: number = Math.ceil(Math.random() * 6);
    rollCounter++;

    let count1: number = 0;
    let count2: number = 0;
    let count3: number = 0;
    let count4: number = 0;
    let count5: number = 0;
    let count6: number = 0;

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

    if (!fullTowerChecker && (count1 === 4 || count2 === 4 || count3 === 4 || count4 === 4 || count5 === 4 || count6 === 4) &&
        (count1 === 2 || count2 === 2 || count3 === 2 || count4 === 2 || count5 === 2 || count6 === 2)) 
    {
        fullTowerChecker = true;
        printOut("Full Tower!");
        printOut("Rolled:" + rollCounter.toString());
        printOut(newLine);
    }

    if (!fullStraitChecker && (count1 === 1 && count2 === 1 && count3 === 1 && count4 === 1 && count5 === 1 && count6 === 1)) 
    {
        fullStraitChecker = true;
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
while(!yatsyChecker || !fullStraitChecker || !fullTowerChecker || !ThreeParChecker);