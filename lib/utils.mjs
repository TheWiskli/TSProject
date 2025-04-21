"use strict";

let DOMTextOut = null;

export const newLine ="<br/>";

/*export const BetterLine = document.createElement('<br/>'); */

export function initPrintOut(aDomElement) {
  DOMTextOut = aDomElement;
}

export function printOut(aText) {
  aText = aText.replace(newLine, "");
  if (DOMTextOut.innerHTML.length !== 0) {
    DOMTextOut.innerHTML += newLine;
  }
  DOMTextOut.innerHTML += aText;
}
