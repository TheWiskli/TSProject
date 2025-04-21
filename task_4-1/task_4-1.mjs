"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));
// All backend kode ligger foran denne kommentaren
const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1891, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8389, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
  };
const accountTypes ={
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
};

class TAccount {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;

    constructor(typeAccount){
        this.#type = typeAccount;
        this.#balance = 0;
        this.#withdrawCount = 0;
        this.#currencyType = CurrencyTypes.NOK;
    }
    toString() {
        return this.#type;
      }
    setType(typeAccount){
        let tChange = "Account type has been changed from " + this.#type;
        this.#type = typeAccount;
        this.#withdrawCount = 0;
        tChange += " to " + this.#type;
        printOut(tChange);
    }
    getBalance(){
        return this.#balance;
    }
    deposit(dAmount, typeAccount = CurrencyTypes.NOK){
        const newAmount = dAmount / this.#currencyConvert(typeAccount);
        this.#balance += newAmount;
        let text = "Deposited " + dAmount.toFixed(2) + " " + typeAccount.denomination + " to " + this.#type + " account";
        text += " and the new balance is " + this.#balance.toFixed(2) + " " + this.#currencyType.denomination;
        printOut(text);
    }
    withdraw(wAmount, typeAccount = CurrencyTypes.NOK){
        let canWithdraw = true;
        let text = "";
        const convertedWAmount = wAmount / this.#currencyConvert(typeAccount);
        switch(this.#type){
            case accountTypes.Saving:
                if(this.#withdrawCount > 3){
                    canWithdraw = false;
                    text = "You have reached the maximum amount of withdrawals for " + this.#type + " account";
                } else { 
                    this.#withdrawCount++;
                    canWithdraw = true;
                }
                break;
            case accountTypes.Pension:
                    canWithdraw = false;
                    text = "You can't withdraw from a " + this.#type + " account";
                break;
        }
        if(canWithdraw){
            this.#balance -= convertedWAmount;
            text = "Withdrew " + convertedWAmount.toFixed(2) + " " + typeAccount.denomination + " from " + this.#type + " account";
            text += " and the new balance is " + this.#balance.toFixed(2) + " " + this.#currencyType.denomination;
        }
        printOut(text);
    }
    setCurrencyType(newTypeAccount){
        if(this.#currencyType === newTypeAccount){
            return;
        }
        this.#balance = this.#balance * this.#currencyConvert(newTypeAccount);
        let text = "Currency type has been changed from " + this.#currencyType.name + " to " + newTypeAccount.name;
        text += " and the new balance is " + this.#balance.toFixed(2) + " " + newTypeAccount.denomination;
        this.#currencyType = newTypeAccount;
        printOut(text);
    }
    #currencyConvert(aType){
        return CurrencyTypes.NOK.value / this.#currencyType.value * aType.value;
    }
}
printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

const allAccounts = Object.values(accountTypes).join(", ");
printOut(allAccounts); 

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

let myAccount1 = new TAccount(accountTypes.Normal);
printOut("Min Konto: " + myAccount1.toString());
myAccount1.setType(accountTypes.Saving);
printOut("Min Konto: " + myAccount1.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");


myAccount1.deposit(100);
myAccount1.withdraw(25);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
myAccount1.deposit(25);
myAccount1.withdraw(30);
myAccount1.withdraw(30);
myAccount1.withdraw(30);
myAccount1.withdraw(30);
myAccount1.setType(accountTypes.Pension);
myAccount1.withdraw(10);
myAccount1.setType(accountTypes.Saving);
myAccount1.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

myAccount1.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

myAccount1.setCurrencyType(CurrencyTypes.SEK);
myAccount1.setCurrencyType(CurrencyTypes.USD);
myAccount1.setCurrencyType(CurrencyTypes.NOK);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

myAccount1.deposit(12, CurrencyTypes.USD);
myAccount1.withdraw(10, CurrencyTypes.GBP);
myAccount1.setCurrencyType(CurrencyTypes.CAD);
myAccount1.setCurrencyType(CurrencyTypes.INR);
myAccount1.withdraw(100.927, CurrencyTypes.SEK);
printOut(newLine);
