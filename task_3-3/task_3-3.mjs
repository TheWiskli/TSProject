"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
function Dato()
{
    const datoTid = new Date;
    const Valg = 
      { 
        weekday: "long", year: "numeric", month: "long", day: "numeric",
      };
    const norskTid = datoTid.toLocaleString('no-NB', Valg);
    printOut(norskTid);
}

Dato();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
function DatoPart2()
{
    const datoTid = new Date();
    return datoTid
}

function countdownMaker(relaseDate) {
  const dateToday = new Date();
  const daysdiference = relaseDate - dateToday;
  const dLeftToDate = Math.ceil(daysdiference / (1000 * 60 * 60 * 24));
  return dLeftToDate; 
}

function TwoXKO_Countdown() {
  const TwoXKORelaseDate = new Date("2025-05-14");
  const datoToday = DatoPart2();
  const Valg = 
      { 
        weekday: "long", year: "numeric", month: "long", day: "numeric",
      };
  const daysdiference = countdownMaker(TwoXKORelaseDate);
  
  printOut("idag er det " + datoToday.toLocaleDateString("no-NB", Valg));
  printOut("Det er " + daysdiference.toString() + " Dager igjen til 2XKO blir lansert!");
}
TwoXKO_Countdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
function sirkelUtregner(radius){
  const diameter = 2 * radius;
  const omkrets = 2 * Math.PI * radius;
  const areal = Math.PI * radius**2;

  printOut("Diameteren til sirkelen er: " + diameter);
  printOut("Omkretsen til sirkelen er: " + omkrets);
  printOut("Arealet til sirkelen er: " + areal);
}

sirkelUtregner(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
function rectangleKalkulator(rektangel){
  const {lengde, bredde} = rektangel;
  const omkrets = 2 * (lengde + bredde);
  const areal = lengde * bredde;

  printOut("Lengden til rektangelet er: " + lengde + " og bredden er: " + bredde);
  printOut("Omkretsen til rektangelet er: " + omkrets);
  printOut("Arealet til rektangelet er: " + areal);
  printOut(newLine);
}

rectangleKalkulator({lengde: 5, bredde: 10});
rectangleKalkulator({lengde: 10, bredde: 20});
rectangleKalkulator({lengde: 15, bredde: 30});

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const EtmemperaturType = {Celsius: 1, Fahrenheit: 2, Kelvin: 3}
function convertTemperature(aTemp, atype){
    let fahrenheit = 0;
    let celsius = 0;
    let kelvin = 0;
        
    switch (atype){
        case EtmemperaturType.Celsius:
            printOut("Convert from Celsius");
            celsius = aTemp;
            kelvin = aTemp + 273.15;
            fahrenheit = (kelvin - 273.15)*(9/5)+32;
            break;
        case EtmemperaturType.Fahrenheit:
            printOut("Convert from Fahrenheit");
            celsius = (aTemp - 32)*(5/9);
            kelvin = celsius + 273.15;
            fahrenheit = aTemp;
            break;
        case EtmemperaturType.Kelvin:
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

convertTemperature(30, EtmemperaturType.Celsius);
convertTemperature(70, EtmemperaturType.Fahrenheit);
convertTemperature(2, EtmemperaturType.Kelvin);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
function CalculateNetPrice(aPrice, aTaxGroup, aName){
  let net = 0;
  let taxGroup = aTaxGroup.toUpperCase();
  let vat = NaN;
  
  switch(taxGroup){
      case "NORMAL":
          vat = 25;
          break;
      case "FOOD":
          vat = 15;
          break;
      case "HOTEL":
          vat = 10;
          break;
      case "TRANSPORT":
          vat = 10;
          break;
      case "CINEMA":
          vat = 10;
          break;
  }
  if(Number.isNaN(vat)){
    printOut("Unknown VAT group! " + taxGroup + " not found!");
    printOut(newLine);
  }
  else if(!Number.isNaN(vat)){
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

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
function FartTidStrekningsKalkulator(fart, tid, strekning){ 
  /*Skal være ærlig å si at jeg jobbet hardt med å sette opp
  at det skulle se fint ut når du ser det på nettsiden. Finnes sikkert
  en bedre løsning, men fikk prøvd ut "newLine" på en ny måte :)*/
 let resultat = "" + newLine;
 switch(true) {
    case (fart === undefined && tid !== undefined && strekning !== undefined): // uten fart
      resultat += newLine + "Strekning: " + strekning.toFixed(2) + " km" + newLine;
      resultat += " Tid: " + tid.toFixed(2) + " Timer" + newLine;
      resultat += " Fart = " + (strekning / tid).toFixed(2) + " km/t" + newLine;
      break;
    case (fart !== undefined && tid === undefined && strekning !== undefined): // uten tid
      resultat += newLine + " fart: " + fart.toFixed(2) + " km/t" + newLine;
      resultat += "Strekning: " + strekning.toFixed(2) + " km" + newLine;
      resultat += " Tid = " + (strekning / fart).toFixed(2) + " timer" + newLine;
      break;
    case (fart !== undefined && tid !== undefined && strekning === undefined): // uten strekning
    resultat += newLine + " tid: " + fart.toFixed(2) + " timer" + newLine;  
    resultat += "Fart: " + tid.toFixed(2) + " km/t" + newLine;
    resultat += "Strekning = " + (fart * tid).toFixed(2) + " km" + newLine;
      break;
    default:
      resultat = NaN;
      break; 
 }
 if(Number.isNaN(resultat)){
    return resultat;
 }
  else{
    return resultat;
  }
}

printOut("Uten Strekning:   " + FartTidStrekningsKalkulator(100, 2, undefined));
printOut("Uten Tid:   " + FartTidStrekningsKalkulator(100, undefined, 50));
printOut("Uten Fart:   " + FartTidStrekningsKalkulator(undefined, 2, 50));
printOut("Feil Checker:  " + FartTidStrekningsKalkulator(undefined, undefined, 50));

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
function TekstModder(text, maxSize, char, insertBefore) {
  if (text.length >= maxSize) {
    return text;
  }
  const AlphaToAdd = maxSize - text.length;
  const padding = char.repeat(AlphaToAdd);

  if (insertBefore) {
    return padding + text;
  } else {
    return text + padding;
  }
}


const Text1 = TekstModder("Hello World", 50, "x", true);
printOut("Tekst 1: " + Text1); 

const Text2 = TekstModder("Hello World", 50, "x", false);
printOut("Tekst 2: " + Text2); 

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function testIfMathIsFun(){
  let operator = 1;
  let line = 1;
  let ok = false;

  do{
      let sumLeft = 0;
      for(let left = 0; left < line + 1; left++){
        sumLeft += operator;
        operator++;
      }

      let sumRight = 0;
      for(let right = 0; right < line; right++){
        sumRight += operator;
        operator++;
      }
  
      if (sumLeft !== sumRight){
        printOut("Problem ved linje: " + line);
          ok = false;
      } else {
          ok = true;
      }
      line++;  
      
      if(line > 200)
      {
        printOut("Math is Fun!");
        break;
      }
  } while(ok);
}
testIfMathIsFun();
printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

function factorial(aNumber) {
  if (aNumber === 0) {
    return 1;
  } else {
    let answerFactorial = aNumber * factorial(aNumber - 1);
    return answerFactorial;
  }
}

printOut("0! = " + factorial(0));
printOut("5! = " + factorial(5));
printOut("10! = " + factorial(10));
printOut(newLine);