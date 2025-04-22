import { initPrintOut, printOut, newLine } from "../../lib/utils.ts";
initPrintOut(document.getElementById("txtOut")!);

printOut(" Part 1:----------------------------------------------------------------------------------------");

function dato(): void {
    const datoTid = new Date();
    const Valg: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const norskTid: string = datoTid.toLocaleDateString("no-NO", Valg);
    printOut(norskTid);
}

dato();
printOut(newLine);

printOut(" Part 2:--------------------------------------------------------------------------------------");
function DatoPart2(): Date {
    const datoTid = new Date();
    return datoTid;
}

function countDownMaker(relaseDate: Date){
    const dateToday = new Date();
    const daysDiference: number = relaseDate.getTime() - dateToday.getTime();
    const dLeftToDate: number = Math.ceil(daysDiference / (1000 * 60 * 60 * 24));
    return dLeftToDate;
}

function TwoXKO_Countdown():void{
    const TwoXKOReleaseDate: Date = new Date("2025-05-14");
    const datoToday: Date = DatoPart2();
    const Valg: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const daysDiference: number = countDownMaker(TwoXKOReleaseDate);

    printOut("idag er det " + datoToday.toLocaleDateString("no-NO", Valg));
    printOut("Det er " + daysDiference.toString() + " dager igjen til TwoXKO kommer ut!");
}
TwoXKO_Countdown();
printOut(newLine);

printOut(" Part 3:--------------------------------------------------------------------------------------");
function sirkelUtregner(radius: number): void {
    const diameter: number = radius * 2;
    const omkrets: number = Math.PI * diameter;
    const areal: number = Math.PI * radius**2;

    printOut("Diameteren til sirkelen er: " + diameter);
    printOut("Omkretsen til sirkelen er: " + omkrets);
    printOut("Arealet til sirkelen er: " + areal);
}

sirkelUtregner(5);
printOut(newLine);

printOut(" Part 4:--------------------------------------------------------------------------------------");
function rektangelKalkulator(rektangel : {bredde: number, lengde: number}): void {
    const areal: number = rektangel.bredde * rektangel.lengde;
    const omkrets: number = (rektangel.bredde + rektangel.lengde) * 2;

    printOut("Arealet til rektangelet er: " + areal);
    printOut("Omkretsen til rektangelet er: " + omkrets);
}
const rektangel1 = { bredde: 5, lengde: 10 };
const rektangel2 = { bredde: 10, lengde: 20 };
const rektangel3 = { bredde: 15, lengde: 30 };

rektangelKalkulator(rektangel1);
rektangelKalkulator(rektangel2);
rektangelKalkulator(rektangel3);


printOut(newLine);
printOut(" Part 5:--------------------------------------------------------------------------------------");
const EtemperatureType: {Celsius: number, Fahrenheit: number, Kelvin: number} = {Celsius: 1, Fahrenheit: 2, Kelvin: 3};
function convertTemperature(aTemp: number, aType: number): void {
    let fahrenheit: number = 0;
    let celsius: number = 0;
    let kelvin: number = 0;
    
    switch (aType){
        case EtemperatureType.Celsius:
            printOut("Convert from Celsius");
            celsius = aTemp;
            kelvin = aTemp + 273.15;
            fahrenheit = (kelvin - 273.15)*(9/5)+32;
            break;
        case EtemperatureType.Fahrenheit:
            printOut("Convert from Fahrenheit");
            celsius = (aTemp - 32)*(5/9);
            kelvin = celsius + 273.15;
            fahrenheit = aTemp;
            break;
        case EtemperatureType.Kelvin:
            printOut("Convert from Kelvin");
            celsius = aTemp - 273.15;
            kelvin = aTemp;
            fahrenheit = (aTemp - 273.15)*(9/5)+32;
            break;
    }
    printOut("Celsius = " + celsius.toFixed(0) + "c")
    printOut("Kelvin = " + kelvin.toFixed(0) + "k");
    printOut("Fahrenheit = " + fahrenheit.toFixed(0) + "f");
    printOut(newLine);
}
convertTemperature(30, EtemperatureType.Celsius);
convertTemperature(70, EtemperatureType.Fahrenheit);
convertTemperature(2, EtemperatureType.Kelvin);
printOut(newLine);

printOut(" Part 6:--------------------------------------------------------------------------------------");
function CalculateNetPrice(aPrice: number, aTaxGroup: string, aName: string): number {
    let net: number = 0;
    let taxGroup: string = aTaxGroup.toUpperCase();
    let vat: number = NaN;

    switch(taxGroup) {
        case "NORMAL":
            vat = 25;
            break;
        case "FOOD":
            vat = 15;
            break;
        case "TRANSPORT":
        case "HOTEL":
        case "CINEMA":
            vat = 10;
            break;
    }
    if(Number.isNaN(vat)) {
        printOut("Ugyldig skattegruppe: " + aTaxGroup);
        printOut(newLine);
    }
    else if(!Number.isNaN(vat)) {
        net = (100 * aPrice) / (vat + 100);
        printOut("Name = " + aName + ", Tax Group = " + taxGroup + ", Original Price = " + aPrice + ", Net price = " + net.toFixed(2));
        printOut(newLine);
    }
    else{
        net = NaN;
    }
    return net;
}

CalculateNetPrice(100, "normal", "Ola Nordmann");
CalculateNetPrice(1565254, "HoTeL", "Scandic Grimstad");
CalculateNetPrice(50166, "fOOd", "Kiwi");
CalculateNetPrice(1580, "trAnsPORt", "NSB");
CalculateNetPrice(120, "gamestore", "Gamestop");
printOut(newLine);

printOut(" Part 7:--------------------------------------------------------------------------------------");
function FartTidStrekningKalkulator(fart?: number, tid?: number, strekning?: number){
    let resultat: string = "" + newLine;

    switch (true) {
        case(fart === undefined && tid !== undefined && strekning !== undefined):
        resultat += newLine + "Strekning: " + strekning.toFixed(2) + " km" + newLine;
        resultat += "Tid: " + tid.toFixed(2) + " Timer" + newLine;
        resultat += "Fart: " + (strekning / tid).toFixed(2) + " km/t" + newLine;
        break;
        case(fart !== undefined && tid === undefined && strekning !== undefined):
        resultat += newLine + "Fart: "+ fart.toFixed(2) + " km/t" + newLine;
        resultat += "Strekning: " + strekning.toFixed(2) + " km" + newLine;
        resultat += "Tid: " + (strekning / fart).toFixed(2) + " Timer" + newLine;
        break;
        case(fart !== undefined && tid !== undefined && strekning === undefined):
        resultat += newLine + "Fart: "+ fart.toFixed(2) + " km/t" + newLine;
        resultat += "Tid: " + tid.toFixed(2) + " Timer" + newLine;
        resultat += "Strekning: " + (fart * tid).toFixed(2) + " km" + newLine;
        break;
        default:
        resultat = "NaN";
        break;
    }
    if(Number.isNaN(resultat)){
        return resultat;
    }
    else{
    return resultat;
    }
}

printOut("Uten Strekning:   " + FartTidStrekningKalkulator(100, 2, undefined));
printOut("Uten Tid:   " + FartTidStrekningKalkulator(100, undefined, 50));
printOut("Uten Fart:   " + FartTidStrekningKalkulator(undefined, 2, 50));
printOut("Feil Checker:  " + FartTidStrekningKalkulator(undefined, undefined, 50));

printOut(newLine);
printOut(" Part 8:--------------------------------------------------------------------------------------");

function TextModder(text: string, maxSize: number, char: string, insertBefore: boolean): string {
    if (text.length > maxSize) {
        return text;
    }
    const AlphaToAdd: number = maxSize - text.length;
    const padding: string = char.repeat(AlphaToAdd);
    if (insertBefore) {
        return padding + text;
    } else {
        return text + padding;
    }
}

const Text1: string = TextModder("Hello World", 50, "x", true);
printOut("Tekst 1: " + Text1); 

const Text2: string = TextModder("Hello World", 50, "x", false);
printOut("Tekst 2: " + Text2); 
printOut(newLine);
printOut(" Part 9:--------------------------------------------------------------------------------------");
function testIfMathIsFun(): void{
    let operator: number = 1;
    let line: number = 1;
    let ok: boolean = false;

    do {
        let sumLeft: number = 0;
        for(let left: number = 1; left < line + 1; left++){
            sumLeft += operator;
            operator++;
        }

        let sumRight: number = 0;
        for(let right: number = 1; right < line + 1; right++){
            sumRight += operator;
            operator++;
        }
        if(sumLeft !== sumRight){
            printOut("Problem med linje: " + line);
            ok = false
        } else {
            ok = true;
        }
        line++;
        if(line > 200){
            printOut("Math is fun!");
            break;
        }
    
    } while(ok);
}
testIfMathIsFun();
printOut(newLine);

printOut(" Part 10:-------------------------------------------------------------------------------------");

function factorial(aNumber: number): number {
    if(aNumber === 0){
        return 1;
    } else {
        let answerFactorial: number = aNumber * factorial(aNumber -1);
        return answerFactorial;
    }
}

printOut("0! = " + factorial(0));
printOut("5! = " + factorial(5));
printOut("10! = " + factorial(10));
printOut(newLine);