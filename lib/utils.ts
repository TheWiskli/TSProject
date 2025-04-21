"use strict";

let DOMTextOut: HTMLElement | null = null;

export const newLine: string = "<br/>";

/* export const BetterLine = document.createElement('<br/>'); */

export function initPrintOut(aDomElement: HTMLElement): void {
  DOMTextOut = aDomElement;
}

export function printOut(aText: string): void {
  if (!DOMTextOut) {
    console.warn("DOMTextOut is not initialized.");
    return;
  }

  aText = aText.replace(newLine, "");
  if (DOMTextOut.innerHTML.length !== 0) {
    DOMTextOut.innerHTML += newLine;
  }
  DOMTextOut.innerHTML += aText;
}